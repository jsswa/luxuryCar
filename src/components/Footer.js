import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>

        </p>
        <p className='footer-subscription-text'>
          S'abonner à la newsletter.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Votre email'
            />
            <Button buttonStyle='btn--outline'>S'inscrire</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>À propos</h2>
            <Link to={`${process.env.PUBLIC_URL}/`}>Témoignages</Link>
            <Link to={`${process.env.PUBLIC_URL}/`}>Carrières</Link>
            <Link to={`${process.env.PUBLIC_URL}/`}>Investisseurs</Link>
            <Link to={`${process.env.PUBLIC_URL}/`}>Conditions d'utilisation</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Nous contacter</h2>
            <Link to={`${process.env.PUBLIC_URL}/`}>Contact</Link>
            <Link to={`${process.env.PUBLIC_URL}/`}>Support</Link>
            <Link to={`${process.env.PUBLIC_URL}/`}>Partenariats</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to={`${process.env.PUBLIC_URL}/`} className='social-logo'>
            <i className='far fa-gem' />
              LUXURY
            </Link>
          </div>
          <small className='website-rights'>LUXURY © 2032</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to={`${process.env.PUBLIC_URL}/`}
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to={`${process.env.PUBLIC_URL}/`}
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to={`${process.env.PUBLIC_URL}/`}
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to={`${process.env.PUBLIC_URL}/`}
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
