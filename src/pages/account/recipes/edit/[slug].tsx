import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Upload,
  Modal,
  Form,
  Col,
  Row,
  Select,
  Button,
  Input,
  message,
  Spin,
} from "antd";
import {
  ArrowLeftOutlined,
  PlusCircleOutlined,
  CloseOutlined,
  PlusOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useUser } from "contexts";
import { MainLayout } from "layouts";
import { useWindow } from "hooks";
import { Category, Ingredient, Recipe } from "interfaces";
import { nanoid } from "nanoid";

import { API, graphqlOperation, Storage } from "aws-amplify";
import { createRecipe, updateRecipe } from "graphql/mutations";
import { getRecipeApi, getCategories, updateRecipeApi } from "api";
import { useRequest } from "ahooks";
import config from "aws-exports";

const { Option } = Select;
const { TextArea } = Input;
var request: any = null;

const EditRecipe = () => {
  const router = useRouter();
  const slug: any = router.query.slug;

  const { data, loading: recipeLoading } = useRequest<Recipe>(() =>
    getRecipeApi(slug)
  );

  const [user] = useUser();
  const [categories, setCategories] = useState<Category[]>([]);

  const [width] = useWindow();
  const [ingredients, setIngredients] = useState<any>([{ name: "", count: 0 }]);
  const [instructions, setInstructions] = useState<any>([""]);
  const [contentType, setContentType] = useState<"video" | "images" | "">("");

  const [initialValues, setInitialValues] = useState<any>(null);

  const [uploadState, setUploadState] = useState<any>(null);

  const [videoUrl, setVideoUrl] = useState<string>("");
  const [videoKey, setVideoKey] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const updateAction = useRequest(updateRecipeApi, {
    manual: true,
    onSuccess: () => {
      router.push("/account/recipes");
      message.success("Recipe updated");
    },
    onError: () => {
      message.error("error!");
    },
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

  const handleChange = async ({ fileList }: { fileList: any }) => {
    const file = fileList[fileList.length - 1];

    if (!file) {
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

  const handleChangeVideo = async (info: any) => {
    if (info.file.status === "uploading") {
      console.log("info:", info);
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64Video(info.file.originFileObj, async (url: any) => {
        const fileName: string = `${Date.now()}-${info.file.name}`;
        const region = config.aws_user_files_s3_bucket_region;
        const bucketName = config.aws_user_files_s3_bucket;

        setVideoKey(fileName);

        const body = {
          fileType: info.file.originFileObj.type,
          fileName: `public/${fileName}`,
          region,
          bucketName: bucketName,
        };

        const res = await API.post("s3Upload", "/upload", {
          body,
        });

        const signedUrl = res.data;

        request = new XMLHttpRequest();
        request.responseType = "json";

        var percentage = document.getElementById("percentage") as HTMLElement;

        request.upload.addEventListener("progress", (e: any) => {
          var loaded = e.loaded;
          var total = e.total;
          var percentageLoaded = (loaded / total) * 100;

          if (percentage) {
            percentage.innerText = Math.floor(percentageLoaded) + "%";
          }
        });

        request.addEventListener("load", (e: any) => {
          if (request.status === 200) {
            console.log("upload success");
            setVideoUrl(url);
            setLoading(false);
            request = null;
          } else {
            console.log("upload error");
            request = null;
          }
        });

        request.addEventListener("error", (e: any) => {
          console.log("error uploading file");
          request = null;
        });

        request.open("put", signedUrl);
        request.send(info.file.originFileObj);

        // await fetch(signedUrl, {
        //   method: "PUT",
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        //   body: info.file.originFileObj,
        // });
      });
    }
  };

  function getBase64Video(img: any, callback: any) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const videoUploadButton = (
    <div>
      {loading ? (
        <span>
          <LoadingOutlined />
          <span id="percentage" style={{ marginLeft: 5 }}>
            0%
          </span>
        </span>
      ) : (
        <PlusOutlined />
      )}
      <div style={{ marginTop: 8 }}>
        Upload{loading && "ing"} <br /> video
      </div>
    </div>
  );

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>
        Upload <br /> image
      </div>
    </div>
  );

  const beforeUploadVideo = async (file: any) => {
    const isSupportedType =
      file.type === "video/mp4" || file.type === "video/webm";
    if (!isSupportedType) {
      message.error("You can only upload mp4 or webm file!");
    }
    // const isLt2M = file.size / 1024 / 1024 < 2;
    // if (!isLt2M) {
    //   message.error("Image must smaller than 2MB!");
    // }
    // return isSupportedType && isLt2M;

    const isLt100M = file.size / 1024 / 1024 < 100;
    if (!isLt100M) {
      message.error("Video must smaller than 100MB!");
    }
    return isSupportedType && isLt100M;
  };

  // Slugify a string
  const slugify = (str: string) => {
    str = str.replace(/^\s+|\s+$/g, "");
    str = str.toLowerCase();

    var from =
      "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    var to =
      "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    return str;
  };

  const onFinish = async (values: any) => {
    if (uploadState.fileList.length === 0 && videoKey === "") {
      message.warn("Upload video or images");
      return;
    }

    if (loading) {
      message.warn("Uploading in progress");
      return;
    }

    console.log("Success:", values);

    Object.keys(values).forEach((k) => {
      const arr = k.split("_");
      if (arr[0] === "ingredient") {
        const index = parseInt(arr[2]);

        if (arr[1] === "count") {
          ingredients[index].count = values[k];
        } else {
          ingredients[index].name = values[k];
        }
      } else if (arr[0] === "instruction") {
        const index = parseInt(arr[1]);
        instructions[index] = values[k];
      }
    });

    const images: string[] = uploadState.fileList.map(
      (file: any) => file.imgKey
    );

    const id: any = data?.id;

    message.loading("calculating calories");

    const calories = await getCalories(
      ingredients.map((x: Ingredient) => `${x.count} ${x.name}`).join(", ")
    );

    const input: Recipe = {
      // id: slugify(values.recipeName) + "-" + nanoid(6),
      id,
      recipeName: values.recipeName,
      cuisine: values.cuisine,
      prepTime: values.prepTime,
      serving: values.serving,
      description: values.description,
      ingredients,
      instructions,
      calories,
      owner: user.sub,
      userID: user.id,
      categoryID: values.categoryID,
      images,
      video: videoKey,
      isArchived: 0,
    };

    updateAction.run(input);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const heading = (
    <div className="my-recipe-heading">
      <span>Edit Recipe</span>
    </div>
  );

  const headingButton = (
    <Link href="/account/recipes">
      <Button
        icon={<ArrowLeftOutlined />}
        style={{ marginTop: 2 }}
        type="dashed"
      >
        Back
      </Button>
    </Link>
  );

  const fetchData = async () => {
    const data: any = await getCategories();
    setCategories(data);
  };

  async function asyncForEach(array: any, callback: any) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  const fetchImages = async (images: string[]) => {
    const files: any[] = [];

    await asyncForEach(images, async (imgKey: string) => {
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
      files.push(fileObj);
    });

    setUploadState({
      ...uploadState,
      fileList: files,
    });
  };

  const fetchVideo = async (url: string) => {
    const videoUrl: any = await Storage.get(url);
    setVideoUrl(videoUrl);
    setUploadState({
      previewVisible: false,
      previewImage: "",
      previewTitle: "",
      fileList: [],
    });
  };

  const getCalories = async (query: string) => {
    const res = await API.post("nutrition", "/nutrients", {
      body: {
        ingredients: query,
      },
    });

    const data = JSON.parse(res.data);
    const calories = data.foods.map((food: any) => food.nf_calories);
    const totalCalories = calories.reduce(
      (accumulator: number, currentValue: number) => {
        return accumulator + currentValue;
      },
      0
    );

    return totalCalories;
  };

  useEffect(() => {
    if (!recipeLoading && data) {
      if (user.id !== data.userID) router.push("/account/recipes");

      setInstructions(data.instructions);
      setIngredients(data.ingredients);

      if (data.images && data.images?.length > 0) {
        setContentType("images");
        fetchImages(data.images);
      } else if (data.video) {
        setContentType("video");
        fetchVideo(data.video);
      }

      const initialValues: any = {};

      data.instructions.forEach((instruction: string, i: number) => {
        initialValues[`instruction_${i}`] = instruction;
      });

      data.ingredients.forEach((ingredient: Ingredient, i: number) => {
        initialValues[`ingredient_name_${i}`] = ingredient.name;
        initialValues[`ingredient_count_${i}`] = ingredient.count;
      });

      setInitialValues(initialValues);
    }
  }, [recipeLoading]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!recipeLoading && data && initialValues && uploadState ? (
        <MainLayout
          title="Edit Recipe"
          heading={heading}
          headingButton={headingButton}
        >
          <Form
            className="recipe-form"
            initialValues={{
              recipeName: data.recipeName,
              cuisine: data.cuisine,
              prepTime: data.prepTime,
              serving: data.serving,
              categoryID: data.categoryID,
              description: data.description,
              ...initialValues,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div style={{ width: "100%" }}>
              <p>Recipe name</p>
              <Form.Item
                name="recipeName"
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                ]}
              >
                <Input placeholder="Recipe name" />
              </Form.Item>

              <Row gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }}>
                <Col className="gutter-row" span={12}>
                  <p>Category</p>
                  <Form.Item
                    name="categoryID"
                    rules={[
                      {
                        required: true,
                        message: "Required",
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      placeholder="Select a category"
                      filterOption={(input, option: any) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {categories.map((category: Category) => (
                        <Option value={category.id}>{category.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                  <p>Cuisine</p>
                  <Form.Item
                    name="cuisine"
                    rules={[
                      {
                        required: true,
                        message: "Required",
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      placeholder="Select a cuisine"
                      filterOption={(input, option: any) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {["japanese", "american"].map((c: string) => (
                        <Option
                          style={{ textTransform: "capitalize" }}
                          value={c}
                        >
                          {`${c[0].toUpperCase()}${c.slice(1)}`}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }}>
                {/* Prep time */}
                <Col className="gutter-row" span={12}>
                  <p>Prep time (minute)</p>
                  <Form.Item
                    name="prepTime"
                    rules={[
                      {
                        required: true,
                        message: "Required",
                      },
                    ]}
                  >
                    <Input type="number" placeholder="Prep time" />
                  </Form.Item>
                </Col>
                {/* Serving */}
                <Col className="gutter-row" span={12}>
                  <p>Serving</p>
                  <Form.Item
                    name="serving"
                    rules={[
                      {
                        required: true,
                        message: "Required",
                      },
                    ]}
                  >
                    <Input type="text" placeholder="Serving" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }}>
                {/* Description */}
                <Col className="gutter-row" span={24}>
                  <p>Description</p>
                  <Form.Item
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: "Required",
                      },
                    ]}
                  >
                    <TextArea rows={4} placeholder="description" />
                  </Form.Item>
                </Col>
              </Row>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <p>Ingredients</p>
                <Button
                  onClick={() =>
                    setIngredients([{ name: "", count: 0 }, ...ingredients])
                  }
                  icon={<PlusCircleOutlined />}
                  style={{ marginLeft: 10 }}
                />
              </div>

              {ingredients.map((ingredient: Ingredient, index: number) => (
                <Row
                  gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }}
                  style={{ marginBottom: 10 }}
                >
                  <Col className="gutter-row" span={3}>
                    <Button
                      onClick={() => {
                        if (ingredients.length === 1) {
                          message.warning(
                            "There should be at least 1 ingredient"
                          );
                          return;
                        }

                        setIngredients(
                          ingredients.filter((_: any, i: number) => i !== index)
                        );
                      }}
                      icon={<CloseOutlined />}
                    ></Button>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <Form.Item
                      name={`ingredient_count_${index}`}
                      rules={[
                        {
                          required: true,
                          message: "Required",
                        },
                      ]}
                    >
                      <Input type="number" placeholder="count" />
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row" span={15}>
                    <Form.Item
                      name={`ingredient_name_${index}`}
                      rules={[
                        {
                          required: true,
                          message: "Required",
                        },
                      ]}
                    >
                      <Input placeholder="name" />
                    </Form.Item>
                  </Col>
                </Row>
              ))}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <p>Instructions</p>
                <Button
                  onClick={() => setInstructions(["", ...instructions])}
                  style={{ marginLeft: 10 }}
                  icon={<PlusCircleOutlined />}
                />
              </div>

              {instructions.map((instruction: any, index: number) => (
                <Row
                  gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }}
                  style={{ marginBottom: 10 }}
                >
                  <Col className="gutter-row" span={3}>
                    <Button
                      onClick={() => {
                        if (instructions.length === 1) {
                          message.warning(
                            "There should be at least 1 instruction"
                          );
                          return;
                        }

                        setInstructions(
                          instructions.filter(
                            (_: any, i: number) => i !== index
                          )
                        );
                      }}
                      icon={<CloseOutlined />}
                    ></Button>
                  </Col>
                  <Col className="gutter-row" span={21}>
                    <Form.Item
                      name={`instruction_${index}`}
                      rules={[
                        {
                          required: true,
                          message: "Required",
                        },
                      ]}
                    >
                      {/* <textarea></textarea> */}
                      <TextArea rows={4} />
                    </Form.Item>
                  </Col>
                </Row>
              ))}
            </div>

            {contentType === "images" ? (
              <div
                className="image-container"
                style={{
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                  }}
                >
                  <Button
                    onClick={() => {
                      setContentType("");
                      setUploadState({
                        previewVisible: false,
                        previewImage: "",
                        previewTitle: "",
                        fileList: [],
                      });
                    }}
                    icon={<CloseOutlined />}
                  />
                </div>
                <Form.Item>
                  <Upload
                    listType="picture-card"
                    fileList={uploadState.fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {uploadState.fileList.length >= 8 ? null : uploadButton}
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
            ) : contentType === "video" ? (
              <div
                className="image-container"
                style={{
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                  }}
                >
                  <Button
                    onClick={() => {
                      setContentType("");
                      setVideoUrl("");
                      setVideoKey("");
                      if (request) {
                        message.error("Video upload cancelled");
                        setLoading(false);
                        request.abort();
                      }
                    }}
                    icon={<CloseOutlined />}
                  />
                </div>
                <Form.Item>
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={beforeUploadVideo}
                    onChange={handleChangeVideo}
                  >
                    {!videoUrl && videoUploadButton}
                  </Upload>
                  {videoUrl && (
                    <video
                      controls
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    >
                      <source src={videoUrl} type="video/mp4" />
                      <source src={videoUrl} type="video/webm" />
                      Sorry, your browser doesn't support embedded videos.
                    </video>
                  )}
                </Form.Item>
              </div>
            ) : (
              <div className="image-container">
                <a
                  onClick={() => setContentType("images")}
                  style={{ width: 180, textAlign: "center" }}
                  className="custom-btn custom-btn--green custom-btn--small"
                >
                  Upload images
                </a>
                <a
                  onClick={() => setContentType("video")}
                  style={{ width: 180, textAlign: "center" }}
                  className="custom-btn custom-btn--green custom-btn--small"
                >
                  Upload video
                </a>
              </div>
            )}

            <Form.Item>
              <Button
                icon={<PlusCircleOutlined />}
                type="primary"
                htmlType="submit"
                loading={updateAction.loading}
              >
                Update Recipe
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

export default EditRecipe;
