import React, { useState, useEffect } from "react";
import { getPopularCategories, getRecentRecipes } from "api";
import { useRequest } from "ahooks";
import { useRouter } from "next/router";
import { Category, Recipe } from "interfaces";
import { Spin } from "antd";

interface Props {}

const Footer: React.FC<Props> = () => {
  const router = useRouter();

  const categories = useRequest<Category[]>(() => getPopularCategories());
  const { data, loading } = useRequest<Recipe[]>(() => getRecentRecipes());

  return (
    <div className="footer">
      <div className="footer__about">
        <img src="/leaf.png" style={{ width: 100 }} />
        <h2 className="footer__heading">The Vegan Manna</h2>
        <a
          onClick={() => router.push("/donate")}
          className="custom-btn custom-btn--small custom-btn--green"
        >
          Donate
        </a>
      </div>
      <div className="footer__recent-recipes">
        <h2 className="footer__heading">Recent Recipes</h2>
        {!loading && data ? (
          data.map((recipe: Recipe) => (
            <p
              onClick={() => router.push(`/recipes/${recipe.id}`)}
              className="recent-recipe-item"
            >
              {recipe.recipeName}
            </p>
          ))
        ) : (
          <Spin size="large" />
        )}
      </div>
      <div className="footer__categories">
        <h2 className="footer__heading">Popular Categories</h2>
        <div className="category-container">
          {!categories.loading && categories.data ? (
            categories.data.map((category: Category) => (
              <h2
                onClick={() =>
                  router.push({
                    pathname: "/search",
                    query: { categoryID: category.id },
                  })
                }
                id={category.id}
                className="category-item"
              >
                {category.name}
              </h2>
            ))
          ) : (
            <Spin size="large" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
