import '../../App.scss'
import HeroesSection from '../heroesSection'
  

import React from 'react'
import { Cards } from '../cards'
import { Footer } from '../footer'

function Home() {
    return (
        <>
         <HeroesSection/>   
         <Cards/>
         <Footer/>
        </>
    )
}

export default Home
