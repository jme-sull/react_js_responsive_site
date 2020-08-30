import React from 'react'
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';

import { Link, animateScroll as scroll } from "react-scroll";


export default function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
                <h1>JAMIE SULLIVAN</h1>
                <p>Web Developer</p>
            <div className="hero-btns">
                <Link activeClass='active' to='cards' spy={true} smooth={true}
                 offset={-75} duration={1100}> 
                    <Button className='btns' buttonStyle='btn--outline' 
                    buttonSize='btn--large'>
                        SEE MY WORK
                    </Button>
                </Link>
            
                <Link activeClass='active' to='skills' spy={true} smooth={true}
                 offset={-75} duration={1100}> 
                    <Button className='btns' buttonStyle='btn--primary' 
                    buttonSize='btn--large'>
                    ABOUT ME  {/* <i className="far fa-play-circle"></i> */}
                    </Button>
                </Link>
            </div>
        </div>
    )
}
