import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';

export const Movies = () => {
  const [movieList, setMovieList] = useState([]);

  // creates a reference to what collection we are connecting to
  // the second arg in the collection function is the name
  // of the collection we are getting from.
  const moviesCollectionRef = collection(db, 'movies');

  useEffect(() => {
    const getMovieList = async () => {
      try {
        //using firebases getDocs func to get the reference
        const data = await getDocs(moviesCollectionRef);
        //data returns tons of info but we want the specific movies
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        //setting the movieList to the filteredDate
        setMovieList(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieList();
  }, []);

  //map through the movieList to display our list
  return (
    <div>
      {movieList.map((movie) => (
        <div>
          <h1 style={{ color: movie.receivedAnOscar ? 'green' : 'red' }}>
            {movie.title}
          </h1>
          <p>Release year: {movie.releaseDate}</p>
        </div>
      ))}
    </div>
  );
};
