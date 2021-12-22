import { server } from "../../config";
import { useState } from 'react';
import Game from "../../components/Game";
import Meta from "../../components/Meta";

const SingleCategory = ({ category, mmorpg, shooter, fighting }) => {
const checkCategory = (category, mmorpg, shooter, fighting) => {
    if (category.title === mmorpg[0].genre) {
      return mmorpg;
    } else if (category.title === shooter[0].genre) {
      return shooter;
    } else if (category.title === fighting[0].genre) {
      return fighting;
    }
  };

  const result = checkCategory(category, mmorpg, shooter, fighting);

  return (
    <div className="container">
      <Meta
        title={`${category.title} - ${category.description}`}
        description={category.description}
      />
      <div className="row">
        <div className="clear-fix-small"></div>
        <div className="col-lg-12">
          <div className="product__page__content">
            <div className="product__page__title">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-6">
                  <div className="section-title">
                    <h4>{category.title}</h4>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {result.map((game) => (
          <div key={game.id} className="col-md-4">
            <Game
              id={game.id}
              title={game.title}
              short_description={game.short_description}
              genre={game.genre}
              platform={game.platform}
              publisher={game.publisher}
              developer={game.developer}
              release_date={game.release_date}
              thumbnail={game.thumbnail}
              game_url={game.game_url}
              freetogame_profile_url={game.freetogame_profile_url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/categories/${context.params.id}`);
  const mmorpgRes = await fetch(
    `https://www.freetogame.com/api/games?category=mmorpg `,
    {
      methods: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "2f38357328msh897085dc58b7fb1p170b67jsn9fe8508d29c2",
      },
    }
  );
  const shooterRes = await fetch(
    `https://www.freetogame.com/api/games?category=shooter `,
    {
      methods: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "2f38357328msh897085dc58b7fb1p170b67jsn9fe8508d29c2",
      },
    }
  );

  const fightingRes = await fetch(
    `https://www.freetogame.com/api/games?category=fighting `,
    {
      methods: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "2f38357328msh897085dc58b7fb1p170b67jsn9fe8508d29c2",
      },
    }
  );

  //json respones
  const category = await res.json();
  const mmorpg = await mmorpgRes.json();
  const shooter = await shooterRes.json();
  const fighting = await fightingRes.json();

  return {
    props: {
      category,
      mmorpg,
      shooter,
      fighting,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/categories`);
  const categories = await res.json();
  const ids = categories.map((category) => category.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
