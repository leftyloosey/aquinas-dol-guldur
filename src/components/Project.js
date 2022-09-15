function Project({ project }) {
    
    const {name, gitlink, deploy } = project[0] 

    const style = { width: '18rem' };
    return ( 
        
      <div key={project} className="card" >
        <img className="card-img-top" alt="pigeon" src="./me2.jpeg" style={style} ></img>
          <div className="card-body">
            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <ul>
             <li>
             {name}
             </li>
             <li>
             {gitlink}
             </li>
             <li>
            {deploy}
             </li>
           </ul>
        </div>
      </div>
        
      
    )
}

export default Project