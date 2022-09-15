function Project({ project }) {
    
    const {name, gitlink, deploy } = project[0] 
    
    return ( 
        
        <div key={project}>
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
      
    )
}

export default Project