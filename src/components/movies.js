import { useEffect } from 'react';

export const Movies = ({ movieList, getMovieList }) => {
  useEffect(() => {
    getMovieList();
  }, []);
  //map through the movieList to display our list
  return (
    <div>
      {movieList.map((movie, idx) => (
        <div key={idx}>
          <h1 style={{ color: movie.receivedAnOscar ? 'green' : 'red' }}>
            {movie.title}
          </h1>
          <p>Release year: {movie.releaseDate}</p>
        </div>
      ))}
    </div>
  );
};
