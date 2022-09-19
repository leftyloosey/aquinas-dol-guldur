function Footer () {
  const style = { width: '1.5rem', height:'1.5rem'};

    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center bg-light py-1 my-1 border-top fixed-bottom">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-0 me-1 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="5"></svg>
          </a>
          <span className="mb-0 mb-md-0 text-muted">© 2022 david hardin</span>
        </div>
    
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li>
          <a href="https://github.com/leftyloosey"><img src="github.png" alt="github" style={style} /></a>
          </li>
          <li>
          <a href="https://www.myspace.com/davidhardin"><img src="myspace.webp" alt="you guys on myspace?" style={style} /></a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/david-hardin-a934294b/"><img src="linked.png" alt="linkedin" style={style} /></a>
          </li>
        </ul>
      </footer>
    )
}

export default Footer