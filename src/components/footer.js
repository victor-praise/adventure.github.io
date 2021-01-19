import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.scss'
import { Button } from './button'

export function Footer(props) {
    

    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subsciption-heading'>
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className='footer-subsciption-text'>
                   you can unsubscribe at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' className='footer-input' placeholder='your email'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Investor</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Investor</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Investor</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
