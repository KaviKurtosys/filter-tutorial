import './App.css';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import Filter from './Filter';

function App() {
  const [popular, setPopular] = useState([]);
  
  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=1230572aa6e37e4d0253e3aec63a1a6e&language=en-US&page=1');
    
    const movies = await data.json();

    setPopular(movies.results);
    console.log(movies.results);
  }

  return (
    <div className="App">
      <Filter />
     <div className="popular-movies">
       {popular.map(movie => {
         return (<Movie key={movie.id} movie={movie}></Movie>)
       })
       }
     </div>
    </div>
  );
}

export default App;
