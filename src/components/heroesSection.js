import React from 'react'
import { Button } from './button'
import '../App.scss'
import '../styles/heroSection.scss'


function HeroesSection() {
    return (
        <div className="hero-container">
            <video src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/videos/video-1.mp4' autoPlay loop muted />

            <h1>ADVENTURE AWAITS</h1>
            <p>what are you waiting for</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started
                </Button>
                
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH THE TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroesSection
