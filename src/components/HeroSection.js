import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={`${process.env.PUBLIC_URL}/videos/video-1.mp4`} poster={`${process.env.PUBLIC_URL}/images/img-10.jpg`} autoPlay loop muted />
      <h1>LUXURY CARS</h1>
      <p>Une application React responsive</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          COMMENCER
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SERVICES
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
