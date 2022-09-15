import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  const style = { width: '8rem', height:'8rem'};
    return (
        <header className="container-fluid headerflex">
      
            <span>
                <img src="./me2.jpeg" alt="me2.jpeg" style={style}></img>
            </span>
            <span id="span-h">
                david hardin
            </span>
          
            <ul className='navbar list-unstyled'>
                <li>
                <a
              href="#Home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'text-muted text-decoration-none p-1' : 'text-dark text-decoration-none'}
            >
              Work
            </a>
                </li>

                <li>
                <a
              href="#About"
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

export default Navigation;
