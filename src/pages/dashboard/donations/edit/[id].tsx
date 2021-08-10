import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Upload, Modal, Form, Button, Input, message, Spin } from "antd";
import {
  ArrowLeftOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { MainLayout } from "layouts";
import { useWindow } from "hooks";
import { Donation } from "interfaces";
import { nanoid } from "nanoid";
import { Storage } from "aws-amplify";
import { getDonationApi, updateDonationApi } from "api";
import useRequest from "@ahooksjs/use-request";

const Donations = () => {
  const router = useRouter();

  const [width] = useWindow();

  const id: any = router.query.id;

  const { data, loading } = useRequest<Donation>(() => getDonationApi(id));

  const updateAction = useRequest(updateDonationApi, {
    manual: true,
    onSuccess: () => {
      router.push("/dashboard/donations");
      message.success("Donation updated");
    },
    onError: () => {
      message.error("Error occured");
    },
  });

  const [initialValues, setInitialValues] = useState<any>(null);

  const [uploadState, setUploadState] = useState<any>({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
  });

  const handleCancel = () => {
    setUploadState({ ...uploadState, previewVisible: false });
  };

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setUploadState({
      ...uploadState,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  const handleChange = async ({
    fileList,
    file: currentFile,
  }: {
    fileList: any;
    file: any;
  }) => {
    const file = fileList[fileList.length - 1];

    if (!file) {
      setUploadState({
        ...uploadState,
        fileList,
      });
      return;
    }

    if (currentFile.status === "removed") {
      setUploadState({
        ...uploadState,
        fileList,
      });
      return;
    }

    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG or PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }

    if (!isJpgOrPng || !isLt2M) return;

    setUploadState({
      ...uploadState,
      fileList: [...fileList.slice(0, -1), { status: "uploading", percent: 0 }],
    });

    const originFile = file.originFileObj;

    const fileName: string = `${Date.now()}-${originFile.name}`;

    const res: any = await Storage.put(fileName, originFile, {
      contentType: originFile.type,
    });

    setUploadState({
      ...uploadState,
      fileList: [
        ...fileList.slice(0, -1),
        { ...file, imgKey: res.key, status: "done" },
      ],
    });
  };

  const customRequest = (props: any) => {
    const { file, onSuccess } = props;

    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  function getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>
        Upload <br /> image
      </div>
    </div>
  );

  const onFinish = async (values: any) => {
    if (uploadState.fileList.length === 0) {
      message.warn("Upload image");
      return;
    }

    console.log("Success:", values);

    const images: string[] = uploadState.fileList.map(
      (file: any) => file.imgKey
    );

    const input: Donation = {
      id: data?.id || "",
      caption: values.caption,
      image: images[0],
      typename: "Donation",
      createdAt: new Date().toISOString(),
    };

    console.log("input:", input);

    updateAction.run(input);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const heading = (
    <div className="my-recipe-heading">
      <span>Create Donation</span>
    </div>
  );

  const headingButton = (
    <Link href="/dashboard/donations">
      <Button
        icon={<ArrowLeftOutlined />}
        style={{ marginTop: 2 }}
        type="dashed"
      >
        Back
      </Button>
    </Link>
  );

  const fetchImage = async (imgKey: string) => {
    const url: any = await Storage.get(imgKey);
    const res = await fetch(url);
    const data = await res.blob();
    const file = new File([data], imgKey, { type: data.type });
    const thumbUrl = await getBase64(file);

    const fileObj = {
      imgKey,
      originFileObj: file,
      status: "done",
      thumbUrl,
      name: file.name,
      lastModified: file.lastModified,
      size: file.size,
      type: file.type,
      webkitRelativePath: "",
    };

    setUploadState({
      ...uploadState,
      fileList: [fileObj],
    });
  };

  useEffect(() => {
    if (!loading && data) {
      fetchImage(data.image);

      const initialValues: any = { caption: data.caption };

      setInitialValues(initialValues);
    }
  }, [loading]);

  return (
    <>
      {!loading && data && initialValues && uploadState ? (
        <MainLayout
          title="Create"
          heading={heading}
          headingButton={headingButton}
        >
          <Form
            initialValues={{
              caption: "",
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div className="donation-create">
              <p>Caption</p>
              <Form.Item
                name="caption"
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                ]}
              >
                <Input placeholder="Caption" />
              </Form.Item>

              <div
                className="image-container"
                style={{
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Form.Item>
                  <Upload
                    customRequest={customRequest}
                    listType="picture-card"
                    fileList={uploadState.fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {uploadState.fileList.length === 1 ? null : uploadButton}
                  </Upload>
                  <Modal
                    visible={uploadState.previewVisible}
                    title={uploadState.previewTitle}
                    footer={null}
                    centered
                    onCancel={handleCancel}
                    width={width > 1024 ? "60%" : "80%"}
                  >
                    <img
                      alt="example"
                      style={{ width: "100%" }}
                      src={uploadState.previewImage}
                    />
                  </Modal>
                </Form.Item>
              </div>
            </div>

            <Form.Item>
              <Button
                icon={<PlusCircleOutlined />}
                type="primary"
                htmlType="submit"
                loading={updateAction.loading}
              >
                Update
              </Button>
            </Form.Item>
          </Form>
        </MainLayout>
      ) : (
        <MainLayout title="Loading">
          <div style={{ textAlign: "center" }}>
            <Spin size="large" />
          </div>
        </MainLayout>
      )}
    </>
  );
};

export default Donations;
