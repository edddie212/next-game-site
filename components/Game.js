import Link from "next/link";
import { gameCategories } from "../data";

const Game = ({ id, title, genre, publisher, release_date, thumbnail }) => {
  return (
    <div>
      <div className="product__item">
        <div
          className="product__item__pic set-bg"
          data-setbg="img/trending/trend-1.jpg"
          title={title}
          style={{
            backgroundImage: `url(${thumbnail})`,
          }}
        >
          <div className="ep">{publisher}</div>
        </div>
        <div className="product__item__text text-center ">
          <ul>
            <li>{genre}</li>
            <li>{release_date}</li>
          </ul>
          <h5>
            <Link href="/game/[id]" as={`/game/${id}`}>
              <a>{title}</a>
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Game;
