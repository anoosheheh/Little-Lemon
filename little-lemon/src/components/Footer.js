import React from 'react';
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
          <p>
            Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Menu</a></li>
            <li><a href='/'>Reservations</a></li>
            <li><a href='/'>Order Online</a></li>
            <li><a href='/'>Login</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>Email:littlelemon@restaurant.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Little Lemon St, Chicago, IL</p>
        </div>
        <div>
          <h3>Social Media</h3>
          <ul>
            <li><a href='/'>Facebook</a></li>
            <li><a href='/'>Instagram</a></li>
            <li><a href='/'>Twitter</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;