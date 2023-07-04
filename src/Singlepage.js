import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';

// import { Link } from 'react-router-dom';

export const Singlepage = () => {
 
    const {id} = useParams();

    const[isLoading, setIsLoading]=useState(true);
    const[movies, setMovies]=useState("");
    
    const API_URL=`https://www.omdbapi.com/?apikey=73e7982f`;

    useEffect(()=>{
      getMovies(`${API_URL}&i=${id}`);
    },[id,API_URL]);
    
    const getMovies = async (url)=>{
 try {
    const resp= await fetch(url);
    const datas = await resp.json();
    // console.log(datas);
    if(datas.Response === "True"){
    setIsLoading(false);
    setMovies(datas);
//    console.log(data.Search);
}

} catch (error) {
  console.log(error);
}
    }
   

  if(isLoading){
    return (
      <>
      <div className='movie-section'>
        <div className='loading'>Loading...</div>
        {/* Singlepage ID = {id} */}
      </div>
      </>
      );
    }
    return(
      <>
      
      <section className='movie-section'>
        <div className='container'>
        <div className='row'>
          <div className='col-lg-3  col-md-2 col'>
          
          </div>
          <div className='col-lg-7 col-md-8 col'>
          <div className='movie-card row'>
             <div className='col-lg-6 col-12'>
              <img src={movies.Poster} alt={movies.Title} ></img>
             </div>
             <div className='col-lg-6 cardBody col-12'>
              <h3>{movies.Title} </h3>
              <h5>{movies.Year}</h5>
             </div>
         
     </div>
          </div>
          <div className='col-lg-2 col  col-md-2'></div>
        </div>
        </div>
        
        
      </section>
     
      
      </>
    );
   
}
