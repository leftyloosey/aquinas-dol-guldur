function Project({ project }) {
    
    const {name, gitlink, deploy, img } = project[0] 

    const style = { width: '18rem' };
    return ( 
        
      <div key={project} className="card pt-1" >
        <img className="card-img-top" alt="pigeon" src={img} style={style} ></img>
          <div className="card-body">
            <ul>
             <li>
             {name}
             </li>
             <li>
             <a href={gitlink}>git</a>
             </li>
             <li>
             <a href={deploy}>deployment</a>
             </li>
           </ul>
        </div>
      </div>
        
      
    )
}

export default Project