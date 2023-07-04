import React from 'react'
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const {movies,isLoading} = useGlobalContext();
// console.log(movies);
if(isLoading){
  return (
    <>
    <div className='movie-section'>
      <div className='loading'>Loading...</div>
      
    </div>
    </>
    );
  }

  return (
    <>
   <section className='movie-page'>
    <div className='container'>
    <div className='row '>
      <div className='col d-flex justify-content-center align-items-start flex-wrap'>
      {
    movies.map((curMovie) => {
      const {Title,imdbID,Poster} = curMovie
      const movieName=Title.substring(0,15);
return (
  <>
  
  <Link to={`movie/${imdbID}`} key={imdbID}>
  <div className="card ">
<div className="card-body">
    <h4 className="card-title">
      {movieName.length >= 15 ? `${movieName}...` : movieName}
      </h4>
    
</div>
  <img src={Poster} className="card-img-top" height={280} alt={Title}/>
</div>
  
  </Link>

  </>
);
})
   }
      </div>
    {/*  */}
    </div>
    </div>
   </section>
   


    </>
  );
}
