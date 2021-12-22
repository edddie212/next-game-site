import Meta from "../../components/Meta";

const singleGame = ({ game }) => {
  const limitDesc = (description) => {
    const length = 1099;
    const trimmedshortDesc = description.substring(0, length);
    return description.length <= length ? description : trimmedshortDesc;
  };
  const showMore = () => {
    const more = document.getElementById("read-more-desc");
    const showFromLength = 1096;
    const restDesc = game.description.substring(showFromLength);
    if (more.style.display !== "block") {
      more.innerText = restDesc;
      more.style.display = "block";
    } else {
      more.style.display = "none";
    }
  };

  return (
    <div className="row">
      <Meta
        title={`${game.title} - ${game.short_description}`}
        description={game.short_description}
        author={game.developer}
        keywords={game.genre}
      />
      <section className="anime-details spad">
        <div className="container">
          <div className="anime__details__content">
            <div className="row">
              <div className="col-lg-3">
                <div
                  className="anime__details__pic set-bg"
                  data-setbg={game.thumbnail}
                  title={game.title}
                  style={{
                    backgroundImage: `url(${game.thumbnail})`,
                  }}
                >
                  <div className="comment">
                    <i className="fa fa-comments"></i> 11
                  </div>
                  <div className="view">
                    <i className="fa fa-eye"></i> 9141
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="anime__details__text">
                  <div className="anime__details__title">
                    <h3>{game.title}</h3>
                    <span>{`${game.genre} - ${game.short_description}`}</span>
                  </div>
                  <div className="anime__details__rating">
                    <div className="rating">
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star-half-o"></i>
                      </a>
                    </div>

                  </div>
                  <p>
                    {limitDesc(game.description)}
                    <button
                      id="read-more-btn"
                      onClick={showMore}
                      style={{
                        background: `transparent`,
                        color: `#ffffff`,
                        border: `none`,
                      }}
                    >
                      ...
                    </button>
                    <p id="read-more-desc"></p>
                  </p>
                  <div className="anime__details__widget">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <ul>
                          <li>
                            <span>Genre:</span> {game.genre}
                          </li>
                          <li>
                            <span>Platform:</span> {game.platform}
                          </li>
                          <li>
                            <span>Developer:</span> {game.developer}
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <ul>
                          <li>
                            <span>Realse Date:</span> {game.release_date}
                          </li>
                          <li>
                            <span>Publisher:</span> {game.publisher}
                          </li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="anime__details__btn">
                    <a
                      href={game.freetogame_profile_url}
                      target="_blank"
                      className="follow-btn"
                      rel="noreferrer"
                    >
                      <i className="fa fa-heart-o"></i> Free To Play Website
                    </a>

                    <a
                      href={game.game_url}
                      target="_blank"
                      className="watch-btn"
                      rel="noreferrer"
                    >
                      <span>{game.title} Official Website</span>{" "}
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default singleGame;

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
    {
      methods: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "2f38357328msh897085dc58b7fb1p170b67jsn9fe8508d29c2",
      },
    }
  );
  const game = await res.json();
  return {
    props: {
      game,
    },
  };
}

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games`,
    {
      methods: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "2f38357328msh897085dc58b7fb1p170b67jsn9fe8508d29c2",
      },
    }
  );
  const games = await res.json();
  const ids = games.map((game) => game.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
