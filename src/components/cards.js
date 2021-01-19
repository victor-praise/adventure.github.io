import React from 'react'
import { Carditem } from './cardItem'
import '../styles/cards.scss'
export function Cards(props) {


    return (
        <>
            <div className="cards">
                <h1>
                    check out thes EPIC Destinations!
            </h1>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem src='https://github.com/briancodex/react-website-v1/blob/master/public/images/img-9.jpg?raw=true'
                         text="Explore the hidden waterfall deep inside the Amazon Jungle"
                          label="Adventure" 
                          path="/services" />
                        <Carditem src='https://github.com/briancodex/react-website-v1/blob/master/public/images/img-2.jpg?raw=true'
                         text="Travel through the islands of Bali in a Private Cruise"
                          label="Luxury" 
                          path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <Carditem src='https://github.com/briancodex/react-website-v1/blob/starter/public/images/img-6.jpg?raw=true'
                         text="Explore the streets of different countries"
                          label="Travel" 
                          path="/services" />
                        <Carditem src='https://github.com/briancodex/react-website-v1/blob/starter/public/images/img-7.jpg?raw=true'
                         text="Capture sights across the world with a camera"
                          label="Photography" 
                          path="/services" />
                        <Carditem src='https://github.com/briancodex/react-website-v1/blob/starter/public/images/img-5.jpg?raw=true'
                         text="View different monuments world wide"
                          label="Tourism" 
                          path="/services" />
                    </ul>
                </div>
            </div>
        </>
    )
}
