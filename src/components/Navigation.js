import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    const where = window.location.href
    console.log(where)
    if (where !== 'https://leftyloosey.github.io/aquinas-dol-guldur/#about') {
    return (
        <header className="container-fluid headerflex">
      
            <span>
                <img src="./me.jpg" alt="me.jpg"></img>
            </span>
            <span id="span-h">
                david hardin
            </span>
          
            <ul className='navbar list-unstyled'>
                <li>
                <a
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'text-muted text-decoration-none p-1' : 'text-dark text-decoration-none'}
            >
              Work
            </a>
                </li>

                <li>
                <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'text-muted text-decoration-none p-1' : 'text-dark text-decoration-none'}
            >
              About
            </a>
                </li>

                <li>
                <a
              href="#Resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'text-muted text-decoration-none p-1' : 'text-dark text-decoration-none'}
            >
              Resume
            </a>
                </li>
                <li>
                <a
              href="#Contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'text-muted text-decoration-none p-1' : 'text-dark text-decoration-none'}
            >
              Contact
            </a>
                </li>
            </ul>
        </header>
  )
    }

    if (where === 'https://leftyloosey.github.io/aquinas-dol-guldur/#about') { 
      console.log('about')
      return (
        <header className="container-fluid headerflex">
      
        <span>
            <img src="pigeon.jpg" alt="pigeon.jpg"></img>
        </span>
        <span id="span-h">
            david hardin
        </span>
      
        <ul className='navbar list-unstyled'>
            <li>
            <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'text-muted text-decoration-none p-1' : 'text-dark text-decoration-none'}
        >
          Work
        </a>
            </li>

            <li>
            <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'text-muted text-decoration-none p-1' : 'text-dark text-decoration-none'}
        >
          About
        </a>
            </li>

            <li>
            <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'text-muted text-decoration-none p-1' : 'text-dark text-decoration-none'}
        >
          Resume
        </a>
            </li>
            <li>
            <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'text-muted text-decoration-none p-1' : 'text-dark text-decoration-none'}
        >
          Contact
        </a>
            </li>
        </ul>
    </header>
      )
    }
}

export default Navigation;
