import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              JME_SULL
              <i class="fas fa-code"></i> 
            </Link>
          </div>
          <small class='website-rights'>JAMIE SULLIVAN © 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link github'
              href='https://github.com/jme-sull/'
              aria-label='GitHub'
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/jamie-sullivan-a6499420/'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link email'
              href='mailto:jkcrawshaw@gmail.com'
              aria-label='Email'
            >
              <i class="fas fa-envelope-square"></i>
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
