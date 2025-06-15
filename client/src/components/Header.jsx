import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="relative mx-4 sm:mx-16 xl:mx-24">

      {/* === Intro Section with Badge === */}
      <div className="text-center mt-20 mb-8">

        {/* AI Feature Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm">
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} alt="star" width="13" />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-[4.5rem] text-gray-700">
          Your own <span className="text-primary">blogging</span><br /> platform.
        </h1>

        {/* Subtext */}
        <p className="my-6 sm:my-8 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base">
          This is your space to think out loud, to share what matters, and to write without filters. 
          Whether it’s one word or a thousand, your story starts right here.
        </p>

        {/* === Search Form === */}
        <form className="flex max-w-lg mx-auto border border-gray-300 bg-white rounded overflow-hidden shadow-sm">
          
          {/* Input Field */}
          <input
            type="text"
            placeholder="Search blogs"
            className="flex-grow px-4 py-2 text-sm outline-none"
            required
          />

          {/* Animated Search Button */}
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 text-sm transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary/90"
          >
            Search
          </button>
        </form>
      </div>

      {/* === Gradient Background Image === */}
      <img
        src={assets.gradientBackground}
        alt="Gradient background"
        className="absolute -top-48 -z-10 opacity-50 w-full pointer-events-none"
      />
    </div>
  );
};

export default Header;
