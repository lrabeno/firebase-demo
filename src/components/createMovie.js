import { useState } from 'react';
import { addDoc } from 'firebase/firestore';

export const CreateMovie = ({ moviesCollectionRef, getMovieList }) => {
  // add new movie state
  const [newMovieTitle, setNewMovieTitle] = useState('');
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);

  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        receivedAnOscar: isNewMovieOscar,
      });
      getMovieList();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Submit movie form</h1>
      <input
        placeholder="Movie title"
        onChange={(e) => setNewMovieTitle(e.target.value)}
      />
      <input
        placeholder="release year"
        type="number"
        onChange={(e) => setNewReleaseDate(Number(e.target.value))}
      />
      <input
        type="checkbox"
        checked={isNewMovieOscar}
        onChange={(e) => setIsNewMovieOscar(e.target.checked)}
      />
      <label>received an oscar</label>
      <button onClick={onSubmitMovie}>submit movie</button>
    </div>
  );
};
