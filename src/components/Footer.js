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
            <Link to='/luxuryCar'>Témoignages</Link>
            <Link to='/luxuryCar'>Carrières</Link>
            <Link to='/luxuryCar'>Investisseurs</Link>
            <Link to='/luxuryCar'>Conditions d'utilisation</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Nous contacter</h2>
            <Link to='/luxuryCar'>Contact</Link>
            <Link to='/luxuryCar'>Support</Link>
            <Link to='/luxuryCar'>Partenariats</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/luxuryCar' className='social-logo'>
            <i className='far fa-gem' />
              LUXURY
            </Link>
          </div>
          <small className='website-rights'>LUXURY © 2032</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/luxuryCar'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/luxuryCar'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/luxuryCar'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/luxuryCar'
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
