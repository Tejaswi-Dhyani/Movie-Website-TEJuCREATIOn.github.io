import React from 'react'
import { useGlobalContext } from './context';

export const Search = () => {
  const {query,setQuery,isError} = useGlobalContext();
  return (
    <>
     <section className='search-section'>
      <h3>Search Your Favourite Movie</h3>
      <br></br>
      <form onSubmit={(event)=>{event.preventDefault()}}>
        <div>
          <input type='text'placeholder='Search Here...'value={query} onChange={(event)=>{setQuery(event.target.value)}}>
          </input>
        </div>
      </form>
      <div className='card-error'>
        <p>{isError.show && isError.msg}</p>
      </div>
     </section>
    </>
   
  )
}
