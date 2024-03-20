import React from 'react';
import HomeImage from '../assets/shop.jpg'; // Update import to match your image file

function Home() {
  return (
    <div className="container mx-auto mt-10 text-center">
      <img src={HomeImage} alt="Shop" className="w-50 h-auto object-cover mb-8 rounded-lg shadow-lg" /> {/* Adjust width (w-full) and add rounded and shadow classes */}
      <h1 className="text-3xl font-bold mb-10">
        <span className="font-cursive">Welcome</span> to My Shop{/* Wrap the Welcome text in a span with the font-cursive class */}
      </h1>
      <p className="text-lg mb-5">This is the home page of my Shop. Feel free to explore!</p>
    </div>
  );
}

export default Home;
