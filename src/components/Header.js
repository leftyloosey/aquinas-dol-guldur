import React, { useState } from 'react';
import Navigation from './Navigation';
// import Project from './Project';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Work from './Work';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Work />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
