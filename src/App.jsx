import React, { useState } from "react";
import "@fontsource/bangers";
// import "@fontsource/chewy";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarausalPage from "./CarausalPage";
import gulan from './assests/gulal.webp'
import pic2 from './assests/pichkari.jpg'
import pic3 from './assests/ballons.webp'
import pic4 from './assests/sweets.jpg'
import pic5 from './assests/holi_tshirt.jpg'
import pic6 from './assests/mask.jfif'
import pic7 from './assests/kit.avif'
import pic8 from './assests/thandai.jfif'

const products = [
  { id: 1, name: "Organic Gulal", price: "₹199", img: gulan },
  { id: 2, name: "Pichkari Set", price: "₹299", img: pic2 },
  { id: 3, name: "Holi Water Balloons", price: "₹149", img: pic3 },
  { id: 4, name: "Sweets", price: "₹189", img: pic4 },
  { id: 5, name: "festive-outfits", price: "₹249", img: pic5 },
  { id: 6, name: "Holi-Mask", price: "₹448", img: pic6 },
  { id: 7, name: "Holi-kit", price: "₹649", img: pic7 },
  { id: 8, name: "Thandai", price: "₹749", img: pic8 },
];



const Navbar = ({ cartCount }) => (
  <nav className="navbar">
    <div className="wrapper">
      <div className="inner">
        <h1>Holi Shop</h1>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
          <li className="cart">Cart ({cartCount})</li>
        </ul>
      </div>
    </div>
  </nav>
);



const Hero = () => (
  <div className="hero-content">
    <h1>Celebrate Holi with Colors!</h1>
    <p>Shop the best organic colors & festive essentials.</p>
    <button>Shop Now</button>
  </div>
);

const About = () => (
  <div className="about">
    <h2>About Us</h2>
    <p>Welcome to Holi Shop! We are passionate about bringing joy and color to your Holi celebrations. <br /> Our collection features a wide range of organic colors, water balloons, <br /> and fun-filled accessories that ensure a safe and vibrant festival experience for everyone. <br /> We believe in eco-friendly and skin-safe products that make Holi not only enjoyable but also responsible.</p>
    <p>Our journey began with a simple idea: to provide high-quality, non-toxic Holi products that everyone can enjoy. <br /> Today, we take pride in serving customers across the country, <br /> spreading happiness one splash of color. Join us in celebrating Holi with love, laughter, and vibrant hues!</p>
  </div>
);

const Products = ({ addToCart }) => (
  <div className="products">
    <div className="wrapper">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="testimonials">
    <div className="wrapper">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-list">
        <div className="testimonial-card">
          <p>"Best Holi products! The organic colors were amazing."</p>
          <h4>- Riya S.</h4>
        </div>
        <div className="testimonial-card">
          <p>"Loved the pichkari set! Perfect for kids and adults alike."</p>
          <h4>- Amit K.</h4>
        </div>
        <div className="testimonial-card">
          <p>"Great quality colors, safe for skin. Highly recommended!"</p>
          <h4>- Priya M.</h4>
        </div>
        <div className="testimonial-card">
          <p>"Great quality colors, safe for skin. Highly recommended!"</p>
          <h4>- Priya M.</h4>
        </div>

        <div className="testimonial-card">
          <p>"Great quality colors, safe for skin. Highly recommended!"</p>
          <h4>- Priya M.</h4>
        </div>

        <div className="testimonial-card">
          <p>"Great quality colors, safe for skin. Highly recommended!"</p>
          <h4>- Priya M.</h4>
        </div>

      </div>
    </div>
  </div>
);

const ContactUs = () => (
  <div className="contact">
    <div className="contact-wrapper">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Drop us a message, and we’ll get back to you as soon as possible.</p>
      <div className="contact-info">
        <p>Email: <a href="mailto:support@holishop.com">support@holishop.com</a></p>
        <p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for more information..." />
        <button>Search</button>
      </div>
      <div className="social-links">
        <p>Follow us on social media:</p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
      </div>
      <form className="contact-form">
        <textarea placeholder="Leave a message..." rows="5" cols="50"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2025 Holi Shop | Made with ❤️</p>
  </footer>
);

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <CarausalPage />
      <Hero />
      <About />
      <Products addToCart={addToCart} />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
