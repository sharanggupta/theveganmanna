import { useState, useEffect } from "react";
import { Col, Row, Button, Input, Select, Spin } from "antd";
import { Form } from "antd";
import { MainLayout } from "layouts";
import {
  PlusCircleOutlined,
  HeartFilled,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { Card } from "components";

import { useRequest } from "ahooks";
import { Category, Recipe } from "interfaces";
import { getCategories, searchRecipes } from "api";
import { useUser } from "contexts";
import { useRouter } from "next/router";
import { cuisines } from "../../cuisines";

const { Option } = Select;

const Search = () => {
  const router = useRouter();
  const isReady = router.isReady;
  const { recipeName, cuisine, prepTime, categoryID }: any = router.query;

  const [categories, setCategories] = useState<Category[]>([]);

  const { data, loading, refresh } = useRequest<Recipe[]>(
    () => searchRecipes({ recipeName, cuisine, prepTime, categoryID }),
    {
      ready: !!isReady,
    }
  );

  useEffect(() => {
    refresh();
  }, [router.query]);

  const fetchData = async () => {
    const data: any = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const heading = (
    <div className="my-recipe-heading">
      <span>{`Result: ${recipeName || ""}`}</span>
    </div>
  );

  type FilterForm = {
    recipeName: string;
    cuisine: string;
    prepTime: number;
    categoryID: string;
  };

  const onFinish = async (values: FilterForm) => {
    const { recipeName, cuisine, prepTime, categoryID } = values;

    const searchProp: any = {};
    if (recipeName) searchProp["recipeName"] = recipeName.trim();
    if (cuisine) searchProp["cuisine"] = cuisine;
    if (prepTime) searchProp["prepTime"] = prepTime;
    if (categoryID) searchProp["categoryID"] = categoryID;

    router.push({
      pathname: "/search",
      query: searchProp,
    });
    // refresh();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <MainLayout title="Search" heading={heading}>
        {router.isReady && (
          <Form
            className="recipe-form"
            style={{ display: "flex" }}
            initialValues={{
              recipeName: recipeName,
              cuisine: cuisine,
              prepTime: prepTime,
              categoryID: categoryID,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div style={{ width: "100%" }}>
              <Row gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }}>
                <Col className="gutter-row" span={12}>
                  <p>Recipe name</p>
                  <Form.Item name="recipeName">
                    <Input placeholder="Recipe name" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                  <p>Prep Time</p>
                  <Form.Item name="prepTime">
                    <Input type="number" placeholder="Prep time" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }}>
                <Col className="gutter-row" span={12}>
                  <p>Category</p>
                  <Form.Item name="categoryID">
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
                  <Form.Item name="cuisine">
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

              <Form.Item style={{ textAlign: "right" }}>
                <Button
                  icon={<SearchOutlined />}
                  type="primary"
                  htmlType="submit"
                >
                  Filter
                </Button>
              </Form.Item>
            </div>
          </Form>
        )}

        {!loading && data ? (
          <div className="cards" style={{ marginTop: 30 }}>
            {!loading &&
              data?.map((recipe: Recipe) => <Card recipe={recipe} />)}
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <Spin size="large" />
          </div>
        )}

        {!loading && data && data.length === 0 && (
          <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
            No recipe found
          </p>
        )}
      </MainLayout>
    </>
  );
};

export default Search;
