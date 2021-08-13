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
import { createRecipe } from "graphql/mutations";
import { createRecipeApi, getCategories } from "api";
import config from "aws-exports";
import useRequest from "@ahooksjs/use-request";
import Slider from "react-slick";

const { Option } = Select;
const { TextArea } = Input;
var request: any = null;

const NextArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <div
      className="carousel-arrow"
      style={{
        ...style,
        right: -15,
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <div
      className="carousel-arrow"
      style={{ ...style, left: -15 }} // should be -25
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

import { cuisines } from "cuisines";

const Recipes = () => {
  const router = useRouter();

  const [user] = useUser();
  const [categories, setCategories] = useState<Category[]>([]);

  const [width] = useWindow();
  const [ingredients, setIngredients] = useState<any>([{ name: "", count: 0 }]);
  const [instructions, setInstructions] = useState<any>([""]);
  const [showImageUpload, setImageUpload] = useState<boolean>(false);
  const [showVideoUpload, setVideoUpload] = useState<boolean>(false);

  const settings = {
    className: "center video-carousel",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: function (index: number) {
      const videos: any = document.querySelectorAll(".carousel-video-item");
      videos.forEach((video: HTMLVideoElement) => video.pause());
    },
  };

  const createAction = useRequest(createRecipeApi, {
    manual: true,
    onSuccess: () => {
      router.push("/account/recipes");
      message.success("Recipe created");
    },
    onError: () => {
      message.error("Recipe name already taken, choose another name");
    },
  });

  const [uploadState, setUploadState] = useState<any>({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
  });

  type VideoKey = {
    videoKey: string;
    url: string;
  };

  const [videoKeys, setVideoKeys] = useState<VideoKey[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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

  const handleChangeVideo = async (info: any) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64Video(info.file.originFileObj, async (url: any) => {
        const fileName: string = `${Date.now()}-${info.file.name}`;
        const region = config.aws_user_files_s3_bucket_region;
        const bucketName = config.aws_user_files_s3_bucket;

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
            setVideoKeys([...videoKeys, { videoKey: fileName, url }]);
            setLoading(false);
            request = null;
          } else {
            request = null;
          }
        });

        request.addEventListener("error", (e: any) => {
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
    if (uploadState.fileList.length === 0 && videoKeys.length === 0) {
      message.warn("Upload video or images");
      return;
    }

    if (loading) {
      message.warn("Uploading in progress");
      return;
    }

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

    message.loading("calculating calories");

    const calories = await getCalories(
      ingredients
        .map(
          (x: Ingredient) =>
            `${x.count.replace(/(\d+)([a-z]+)/g, "$1 $2")} ${x.name}`
        )
        .join(", ")
    );

    const input: Recipe = {
      // id: slugify(values.recipeName) + "-" + nanoid(6),
      id: slugify(values.recipeName),
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
      images: showImageUpload ? images : [],
      videos: showVideoUpload
        ? videoKeys.map((videoKey) => videoKey.videoKey)
        : [],
      typename: "Recipe",
      isArchived: 0,
      // createdAt: new Date().toISOString(),
    };

    createAction.run(input);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const heading = (
    <div className="my-recipe-heading">
      <span>Create Recipe</span>
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
    fetchData();
  }, []);

  return (
    <>
      <MainLayout
        title="Create Recipe"
        heading={heading}
        headingButton={headingButton}
      >
        <Form
          className="recipe-form"
          initialValues={{
            recipeName: "",
            cuisine: "",
            prepTime: 0,
            serving: "",
            categoryID: "",
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
                    {cuisines.map((c: string) => (
                      <Option style={{ textTransform: "capitalize" }} value={c}>
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

            {ingredients.map((ingredient: any, index: number) => (
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
                    <Input placeholder="count" />
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
                        instructions.filter((_: any, i: number) => i !== index)
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

          <div>
            {showImageUpload ? (
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
                      setImageUpload(false);
                    }}
                    icon={<CloseOutlined />}
                  />
                </div>
                <Form.Item>
                  <Upload
                    customRequest={customRequest}
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
            ) : (
              <div className="image-container">
                <a
                  onClick={() => setImageUpload(true)}
                  style={{ width: 180, textAlign: "center" }}
                  className="custom-btn custom-btn--green custom-btn--small"
                >
                  Upload images
                </a>
              </div>
            )}

            {showVideoUpload ? (
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
                      setVideoUpload(false);
                      if (request) {
                        message.error("Video upload cancelled");
                        setLoading(false);
                        request.abort();
                        request = null;
                      }
                    }}
                    icon={<CloseOutlined />}
                  />
                </div>
                <Form.Item style={{ maxHeight: 800 }}>
                  <Upload
                    customRequest={customRequest}
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={beforeUploadVideo}
                    onChange={handleChangeVideo}
                  >
                    {videoUploadButton}
                  </Upload>
                  <Slider {...settings}>
                    {videoKeys.map(({ url }) => (
                      <div className="video-wrapper">
                        <Button
                          className="remove-video"
                          onClick={() =>
                            setVideoKeys([
                              ...videoKeys.filter(
                                (videoKey) => videoKey.url !== url
                              ),
                            ])
                          }
                        >
                          Remove video
                        </Button>
                        <video
                          className="carousel-video-item"
                          controls
                          style={{
                            minWidth: 250,
                            maxWidth: "100%",
                            maxHeight: 600,
                          }}
                        >
                          <source src={url} type="video/mp4" />
                          <source src={url} type="video/webm" />
                          Sorry, your browser doesn't support embedded videos.
                        </video>
                      </div>
                    ))}
                  </Slider>
                </Form.Item>
              </div>
            ) : (
              <div className="image-container">
                <a
                  onClick={() => setVideoUpload(true)}
                  style={{ width: 180, textAlign: "center" }}
                  className="custom-btn custom-btn--green custom-btn--small"
                >
                  Upload videos
                </a>
              </div>
            )}
          </div>

          <Form.Item>
            <Button
              icon={<PlusCircleOutlined />}
              type="primary"
              htmlType="submit"
              loading={createAction.loading}
            >
              Create Recipe
            </Button>
          </Form.Item>
        </Form>
      </MainLayout>
    </>
  );
};

export default Recipes;
