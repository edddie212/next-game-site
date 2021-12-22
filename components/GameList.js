import Game from "./Game";

const GameList = ({ games }) => {
  return (
    <div className='row'>
      {games.map((game, index) => (
        
        <div key={game.id} className="col-lg-4 col-md-6 col-sm-12">
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
  );
};

export default GameList;
