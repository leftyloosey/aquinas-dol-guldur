function Project(props) {
    
        console.log(props)
        return ( 
            // console.log("downward props", props, props.animalia)
        
        props.reptiles.map((animal) => <li key={animal}>{animal}</li>

        )
        )
      
        
}

export default Project