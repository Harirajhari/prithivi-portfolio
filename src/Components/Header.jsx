// Components/Header.jsx
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4 px-6">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="text-xl md:text-2xl font-bold tracking-wide cursor-pointer hover:text-teal-300 transition"
        >
          Prithivi Raj K, RN
        </Link>
        <nav className="hidden md:flex space-x-6">
          {['about', 'skills', 'experience', 'education', 'certifications', 'contact'].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="capitalize hover:text-teal-300 transition cursor-pointer text-sm lg:text-base"
              activeClass="text-teal-300 font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;