import { db } from '../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
export const Movies = ({ movieList, deleteMovie, getMovieList }) => {
  //Update title func and state
  const [updatedTitle, setUpdatedTitle] = useState('');
  const updateMovieTitle = async (id) => {
    const movieDoc = doc(db, 'movies', id);
    await updateDoc(movieDoc, { title: updatedTitle });
    await getMovieList();
  };
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
          <input
            placeholder="new title..."
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <button onClick={() => updateMovieTitle(movie.id)}>
            Update Title
          </button>
        </div>
      ))}
    </div>
  );
};
