import React from 'react'
import Mainnav from './Mainnav'
import './App.css';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Mainfooter from './Mainfooter';
export default function App() {
  return (
    <>
    <Mainnav></Mainnav>
    <Portfolio></Portfolio>
    <About></About>
    <Contact></Contact>
    <Mainfooter></Mainfooter>
    </>
  )
}
