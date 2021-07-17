import { useState, useEffect } from "react";
import { MainLayout } from "layouts";
import { Card } from "components";
import { useRequest } from "ahooks";
import { Recipe } from "interfaces";
import { getRecipes } from "api";
import { Spin } from "antd";

const IndexPage = () => {
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  type RecipesProps = {
    items: Recipe[];
    nextToken?: string;
  };

  const { data, loading } = useRequest<RecipesProps>(() =>
    getRecipes({ nextToken })
  );

  const fetchRecipes = useRequest<RecipesProps>(getRecipes, {
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
    await fetchRecipes.run({ nextToken });
  };

  return (
    <>
      <MainLayout title="Home" home={true}>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">About being vegan</h2>
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                What do vegans eat?
              </h3>
              <p className="paragraph">
                A great deal - you'll soon find a whole new world of exciting
                foods and flavours opening up to you. A vegan diet is richly
                diverse and comprises all kinds of fruits, vegetables, nuts,
                grains, seeds, beans and pulses - all of which can be prepared
                in endless combinations that will ensure you're never bored.
                From curry to cake, pasties to pizzas, all your favourite things
                can be suitable for a vegan diet if they're made with
                plant-based ingredients.
              </p>
              <h3 className="heading-tertiary u-margin-bottom-small">
                It's not just about diet
              </h3>
              <p className="paragraph">
                Vegans avoid exploiting animals for any purpose, with compassion
                being a key reason many choose a vegan lifestyle. From
                accessories and clothing to makeup and bathroom items, animal
                products and products tested on animals are found in more places
                than you might expect. Fortunately nowadays there are affordable
                and easily-sourced alternatives to just about everything.
              </p>

              <a href="#" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  srcSet="/img/image-1.jpg 300w, /img/image-1-large.jpg 1000w"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 1"
                  className="composition__photo composition__photo--p1"
                  src="/img/image-1-large.jpg"
                />

                <img
                  srcSet="/img/image-2.jpg 300w, /img/image-2-large.jpg 1000w"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 2"
                  className="composition__photo composition__photo--p2"
                  src="/img/image-2-large.jpg"
                />

                <img
                  srcSet="/img/image-3.jpg 300w, /img/image-3-large.jpg 1000w"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 3"
                  className="composition__photo composition__photo--p3"
                  src="/img/image-3-large.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* features section */}
        <section className="section-features">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary" style={{ color: "#fff" }}>
              Why vegan?
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <img className="feature-box__icon" src="/trees.svg" />
                <h3 className="heading-tertiary">30 sq. ft of forests</h3>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <img className="feature-box__icon" src="/co2.svg" />
                <h3 className="heading-tertiary">20lbs of CO2</h3>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <img className="feature-box__icon" src="/water.svg" />
                <h3 className="heading-tertiary">1100 gallons of water</h3>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <img className="feature-box__icon" src="/wheat.svg" />
                <h3 className="heading-tertiary">45 lbs of grain</h3>
              </div>
            </div>
          </div>

          <h3
            className="heading-tertiary"
            style={{ color: "#fff", textAlign: "center" }}
          >
            Saved by a vegan each year
          </h3>
        </section>

        <div
          style={{ marginTop: "5rem" }}
          className="u-center-text u-margin-bottom-big"
        >
          <h2 className="heading-secondary">Recipes</h2>
        </div>

        <div style={{ margin: "0 15px" }} className="cards">
          {recipes && recipes.map((recipe: Recipe) => <Card recipe={recipe} />)}
        </div>
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

export default IndexPage;
