import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  const style = { width: '7rem', height:'9rem'};
    return (
        <header className="container-fluid col sm-6 headerflex">
          <span id="span-h">
            {/* <span id="span-h"> */}
            <p>
                <img src="./me2.jpeg" alt="me2.jpeg" style={style}></img>
                david_hardin
                </p>
            {/* </span> */}
            {/* <span> */}
               
            </span>
          
            {/* </div> */}
          <div className='col md-9 d-flex fixed-top flex-row-reverse'>
            <span>
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
            </span>
            </div>
        </header>
  )
}

export default Navigation;
