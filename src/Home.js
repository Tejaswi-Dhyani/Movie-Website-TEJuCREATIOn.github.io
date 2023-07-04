import React from 'react'
import { Search } from './Search';
import { Movies } from './Movies';
import {Navv} from './Navv';
import './App.css';

export const Home = () => {

    

  return (
    <>
    <Navv></Navv>
    <Search></Search>
    <Movies></Movies>
    </>
   
  );
}
