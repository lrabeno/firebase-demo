import { useEffect } from 'react';
export const Movies = ({ movieList, getMovieList, deleteMovie }) => {
  //map through the movieList to display our list

  return (
    <div>
      {movieList.map((movie) => (
        <div key={movie.id}>
          <h1 style={{ color: movie.receivedAnOscar ? 'green' : 'red' }}>
            {movie.title}
          </h1>
          <p>Release year: {movie.releaseDate}</p>
          <button onClick={() => deleteMovie(movie.id)}>Delete movie</button>
        </div>
      ))}
    </div>
  );
};
