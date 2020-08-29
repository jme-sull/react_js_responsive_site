import React from 'react'
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';

export default function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
                <h1>JAMIE SULLIVAN</h1>
                <p>Web Developer</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    SEE MY WORK
                </Button>
                <Button className='btns' buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                    INTRO VIDEO <i className="far fa-play-circle"></i>
                </Button>
            </div>
        </div>
    )
}
