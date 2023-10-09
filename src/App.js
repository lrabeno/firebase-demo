import { useState, useEffect } from 'react';
import './App.css';
import { Auth } from './components/auth';
import { CreateMovie } from './components/createMovie';
import { Movies } from './components/movies';
import { db } from './config/firebase';
import { collection } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { doc, deleteDoc } from 'firebase/firestore';

function App() {
  // creates a reference to what collection we are connecting to
  // the second arg in the collection function is the name
  // of the collection we are getting from.
  const moviesCollectionRef = collection(db, 'movies');
  const [movieList, setMovieList] = useState([]);
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
  const deleteMovie = async (id) => {
    const movieDoc = doc(db, 'movies', id);
    await deleteDoc(movieDoc);
  };
  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div className="App">
      <p>Louis page</p>
      <Auth />
      <CreateMovie
        moviesCollectionRef={moviesCollectionRef}
        movieList={movieList}
        getMovieList={getMovieList}
      />
      <Movies
        moviesCollectionRef={moviesCollectionRef}
        movieList={movieList}
        getMovieList={getMovieList}
        deleteMovie={deleteMovie}
      />
    </div>
  );
}

export default App;
