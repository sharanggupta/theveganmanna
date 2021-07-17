import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { Col, Row, Button, Input, Spin } from "antd";
import { Form } from "antd";
import { MainLayout } from "layouts";
import {
  HeartFilled,
  HeartOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Card } from "components";
import { useRouter } from "next/router";
import { useRequest } from "ahooks";
import { Recipe, User } from "interfaces";
import { getUserApi, getUserPopularRecipes } from "api";
import { Storage } from "aws-amplify";

const Profile = () => {
  const router = useRouter();
  const username: any = router.query.username;
  const [url, setUrl] = useState<any>(null);

  const { data, loading } = useRequest<User>(() => getUserApi(username), {
    ready: router.isReady,
  });

  const recipes = useRequest<Recipe[]>(() => getUserPopularRecipes(username), {
    ready: router.isReady,
  });

  const fetchImage = async (data: User) => {
    const image = data.image;
    if (image) {
      const signedUrl = await Storage.get(image);
      setUrl(signedUrl);
    } else {
      setUrl("/author.png");
    }
  };

  useEffect(() => {
    if (!loading && data) {
      fetchImage(data);
    }
  }, [loading]);

  return (
    <>
      {!loading && data && url ? (
        <MainLayout title="Profile" heading="Profile">
          {!loading && data && (
            <div className="profile">
              <div className="author">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="author__image">
                    <img id="profile_image" src={url} />
                  </div>
                </div>
                <div className="author__info">
                  <h3 style={{ fontSize: "2rem" }} className="heading-tertiary">
                    About me
                  </h3>
                  <p className="author__name">Hi! I'm {data.id}</p>
                  <p className="author__bio">{data?.bio}</p>

                  <div className="author__social">
                    {data.social?.instagram && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://instagram.com/${data.social?.instagram}`}
                      >
                        <InstagramOutlined className="icon" />
                      </a>
                    )}
                    {data.social?.twitter && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://twitter.com/${data.social?.twitter}`}
                      >
                        <TwitterOutlined className="icon" />
                      </a>
                    )}
                    {data.social?.facebook && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://facebook.com/${data.social?.facebook}`}
                      >
                        <FacebookOutlined className="icon" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="popular">
                <div className="u-center-text u-margin-bottom-medium">
                  <h2 className="heading-secondary">Most popular</h2>
                </div>

                {!recipes.loading && recipes.data ? (
                  recipes.data.length === 0 ? (
                    <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
                      User has no recipes
                    </p>
                  ) : (
                    <div className="cards">
                      {recipes?.data?.map((recipe: Recipe) => (
                        <Card recipe={recipe} />
                      ))}
                    </div>
                  )
                ) : (
                  <Spin size="large" style={{ width: "100%" }} />
                )}
              </div>
            </div>
          )}
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

export default Profile;
