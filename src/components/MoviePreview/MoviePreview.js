import React from "react";
import PropTypes from "prop-types";

const MoviePreview = ({ title, poster, id }) => {
  return (
    <div key={id} className="MoviePreview--container">
      {poster ? (
        <img
          src={`https://image.tmdb.org/t/p/w300${poster}`}
          alt={title}
          className="MoviePreview--img"
        />
      ) : (
        <img
          className="MoviePreview--img"
          src="https://www.proficinema.ru/assets/images/cnt/poster_no.png"
          alt={title}
        />
      )}
      <h3 className="MoviePreview--title">{title}</h3>
    </div>
  );
};

MoviePreview.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MoviePreview;