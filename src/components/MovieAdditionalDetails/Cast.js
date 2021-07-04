import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCastInfo } from "../../services/fetchApi";

const Cast = () => {
  const history = useHistory();
  console.log("cast", history);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastInfo(history.location.state.id).then((resp) =>
      setCast(resp.data.cast)
    );
  }, [history.location.state.id]);

  return (
    <>
      <h1>Cast</h1>
      <ul>
        {cast.length > 0 ? (
         <ul className="Cast">
      {cast.map(({ name, cast_id, character, profile_path }) => (
              <li key={cast_id} className="Cast--item">
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <img
                    src="https://www.proficinema.ru/assets/images/cnt/poster_no.png"
                    alt={name}
                  />
                )}

                <p className="title">{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <li>Not found any cast</li>
        )}
      </ul>
    </>
  );
};

export default Cast;