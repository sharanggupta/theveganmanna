import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Col, Row, Button, Input } from "antd";
import { Form } from "antd";
import { MainLayout } from "layouts";
import {
  PlusCircleOutlined,
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { Card } from "components";

import { useRequest } from "ahooks";
import { Like, Recipe } from "interfaces";
import { getUserApi } from "api";
import { useUser } from "contexts";

type LikedRecipe = {
  likes: {
    items: Like[];
    nextToken?: string;
  };
};

const Recipes = () => {
  const [user] = useUser();

  const { data, loading, refresh } = useRequest<LikedRecipe>(
    () => getUserApi(user.id),
    {
      ready: !!user.id,
    }
  );

  console.log("liked recipes:", data);

  const heading = (
    <div className="my-recipe-heading">
      <span>Liked Recipes</span>
    </div>
  );

  return (
    <>
      <MainLayout title="My Recipes" heading={heading}>
        <div className="cards">
          {!loading &&
            data?.likes.items
              .filter((like: Like) => like.recipe?.isArchived === 0)
              .map(
                (like: Like) =>
                  like.recipe && <Card refresh={refresh} recipe={like.recipe} />
              )}
        </div>
        {!loading &&
          data?.likes.items.filter(
            (like: Like) => like.recipe?.isArchived === 0
          ).length === 0 && (
            <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
              You have no liked recipes
            </p>
          )}
      </MainLayout>
    </>
  );
};

export default Recipes;
