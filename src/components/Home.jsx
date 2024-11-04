import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Card from './Card';
import itemData from '../mockData/itemdata';
import laptopGif from '../assets/laptop.gif'; // Import the laptop GIF
import phoneGif from '../assets/phone.gif'; // Import the phone GIF
import './Home.css'; // Import the CSS
import Footer from './Footer';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'text',
      title: 'Welcome to GenTECH',
      description: 'Your gateway to innovative technology solutions.',
    },
    {
      type: 'image',
      src: phoneGif,
      overlay: 'Introducing the Latest Smartphones. Experience the future in your hands.',
    },
    {
      type: 'image',
      src: laptopGif,
      overlay: 'Discover the cutting-edge New Laptops. Designed for performance and style.',
    },
  ];

  useEffect(() => {
    // Change slide every 5 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div
          className="slide"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) =>
            slide.type === 'text' ? (
              <div key={index} className="slide-content flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg font-semibold">{slide.description}</p>
              </div>
            ) : (
              <div key={index} className="slide-content">
                <img src={slide.src} alt="Showcase" />
                <div 
                  key={`${slide.overlay}-${currentSlide}`} // Ensure key changes on every slide
                  className="slide-text-overlay animate"
                >
                  {slide.overlay.split('. ').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center p-4">
        {itemData.map((item) => (
          <Card 
            key={item.id}
            cardName={item.cardName}
            to={`/items/${item.id}`}
            imgSrc={item.imgSrc}
            price={item.price}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
