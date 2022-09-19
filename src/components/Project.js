import React from 'react';

function Project({ project }) {
    
    const {name, gitlink, deploy, img } = project[0] 

    const style = { width: '18rem' };

    function mouseOver(e) {
      return (e.target.className='text-dark font-italic text-decoration-none') 
    }
    function mouseLeave(e) {
      return (e.target.className='text-dark text-decoration-none') 
    }

    return ( 
        
      <div key={project} className="card pt-1">
        <img className="card-img-top" alt="pigeon" src={img} style={style} ></img>
          <div className="card-body list-unstyled">
            <ul className="card-body list-unstyled">
             <li>
             {name}
             </li>
             <li>
             <a 
              onMouseOver={mouseOver}
              onMouseLeave={mouseLeave}
              className="text-dark text-decoration-none" href={gitlink}>git</a>
             </li>
             <li>
             <a 
              onMouseOver={mouseOver}
              onMouseLeave={mouseLeave}
              className="text-dark text-decoration-none" href={deploy}>deployment</a>
             </li>
           </ul>
        </div>
      </div>
  )
}

export default Project