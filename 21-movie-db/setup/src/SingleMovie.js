import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, data: movie, error } = useFetch(`i=${id}`);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }

  const { Title: title, Poster: poster, Year: year, Plot: plot } = movie;
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
