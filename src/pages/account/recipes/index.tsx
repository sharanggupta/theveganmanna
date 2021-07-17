import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Col, Row, Button, Input } from "antd";
import { Form, Spin } from "antd";
import { MainLayout } from "layouts";
import {
  PlusCircleOutlined,
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { Card } from "components";

import { useRequest } from "ahooks";
import { Recipe } from "interfaces";
import { getUserRecipes } from "api";
import { useUser } from "contexts";

const Recipes = () => {
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [user] = useUser();

  type RecipesProps = {
    items: Recipe[];
    nextToken?: string;
  };

  const { data, loading } = useRequest<RecipesProps>(
    () => getUserRecipes({ id: user.id, nextToken: null }),
    {
      ready: !!user.id,
    }
  );

  const fetchRecipes = useRequest<RecipesProps>(getUserRecipes, {
    manual: true,
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("err");
    },
  });

  useEffect(() => {
    if (!loading && data) {
      setRecipes(data.items);
      setNextToken(data?.nextToken || null);
    }
  }, [loading]);

  useEffect(() => {
    if (!fetchRecipes.loading) {
      if (fetchRecipes.data?.items) {
        setRecipes([...recipes, ...fetchRecipes.data?.items]);
        setNextToken(fetchRecipes?.data.nextToken || null);
      }
    }
  }, [fetchRecipes.loading]);

  const loadRecipes = async () => {
    await fetchRecipes.run({ id: user.id, nextToken });
  };

  const heading = (
    <div className="my-recipe-heading">
      <span>My Recipes</span>
    </div>
  );

  const headingButton = (
    <Link href="/account/recipes/create">
      <Button
        icon={<PlusCircleOutlined />}
        style={{ marginTop: 2 }}
        type="dashed"
      >
        Add Recipe
      </Button>
    </Link>
  );

  return (
    <>
      <MainLayout
        title="My Recipes"
        heading={heading}
        headingButton={headingButton}
      >
        <div className="cards">
          {!loading &&
            recipes.map((recipe: Recipe) => <Card recipe={recipe} />)}
        </div>
        {!loading && recipes.length === 0 && (
          <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
            You have no recipes
          </p>
        )}
        <div
          style={{
            display: "flex",
            marginTop: 40,
            marginBottom: 20,
            justifyContent: "center",
          }}
        >
          {fetchRecipes.loading ? (
            <Spin size="large" />
          ) : (
            nextToken && (
              <a
                onClick={() => loadRecipes()}
                className="custom-btn custom-btn--big custom-btn--green btn--animated"
              >
                Load more
              </a>
            )
          )}
        </div>
      </MainLayout>
    </>
  );
};

export default Recipes;
