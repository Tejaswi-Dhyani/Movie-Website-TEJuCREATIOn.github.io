import React, { useContext, useState } from "react";
import { useEffect } from "react";

const API_URL=`https://www.omdbapi.com/?apikey=73e7982f`;
const AppContext= React.createContext();

const AppProvider = ({children}) => {

    const[isLoading, setIsLoading]=useState(true);
    const[movies, setMovies]=useState([]);
    const [isError, setIsError]=useState({show:"false", msg:''});
    const [query,setQuery]=useState("titanic");

    const getMovies= async(url)=>{
        try {
            const resp= await fetch(url);
            const datas = await resp.json();
            // console.log(datas);
            // console.log(datas.Response);
          if(datas.Response === "True"){
            
                setIsLoading(false);
            setMovies(datas.Search);
        //    console.log(data.Search);
        }
        else{
            setIsError({
                show:"true", 
                msg: datas.Error
            })
        }
           
        } catch (error) {
            console.log(error);
        }

    };
    useEffect(()=>{
// Debouncing use kiya hai...
let timerOut= setTimeout(()=>{
    getMovies(`${API_URL}&s=${query}`);
},100);
   return ()=>clearTimeout(timerOut);    
},[query]);

 return <AppContext.Provider value={{movies, isLoading, isError, setQuery}}>
    {children}
   
 </AppContext.Provider>
};
// Global custom hooks
const useGlobalContext=()=>{
    return useContext(AppContext);
}
 export {AppContext, AppProvider, useGlobalContext};
