import React from 'react';
import about from '../assets/about.jpg'

function About() {
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={about} alt="About Us" className="rounded-lg shadow-lg mb-4 w-full h-auto" style={{ maxWidth: '100%', maxHeight: '400px' }} />
          </div>
          <div>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu odio at est tincidunt fermentum. Duis vehicula tellus et ultricies pulvinar.
            </p>
            <p className="text-lg mb-4">
              Nullam id leo nec lacus euismod tristique ut eget felis. Integer auctor aliquet est, at fringilla nisi viverra vel.
            </p>
            <p className="text-lg mb-4">
              Donec vitae magna lacinia, condimentum quam ut, fermentum leo. Duis sollicitudin justo vel eros commodo, ac molestie lacus tristique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
