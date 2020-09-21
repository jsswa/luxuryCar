import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Quelques unes de nos voitures</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-1.jpg`}
              text='BMW M850i xDrive Automatic'
              path='#'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-2.jpg`}
              text='Aston Martin Valkyrie AMR Pro'
              path='#'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-3.jpg`}
              text='Maserati Levante Trofeo V8'
              path='#'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-4.jpg`}
              text='Bentley Mulsanne W.O. Edition'
              path='#'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-5.jpg`}
              text='Ferrari 488 Pista Spider'
              path='#'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-6.jpg`}
              text='Jaguar E-type Lightweight "Car Zero"'
              path='#'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-7.jpg`}
              text='Lamborghini Huracan Evo'
              path='#'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-8.jpg`}
              text='Land Rover Discovery Sport'
              path='#'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-9.jpg`}
              text='Lexus RC-F Track Edition'
              path='#'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-10.jpg`}
              text='McLaren 650S Spider'
              path='#'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-11.jpg`}
              text='Mercedes AMG GT 63'
              path='#'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
