import Project from "./Project"

function Work() {

    const project1 = [{name:'project1', gitlink:'gitlink', deploy:'deployment link'}]
    const project2 = [{name:'project2', gitlink:'gitlink', deploy:'deployment link'}]
    const project3 = [{name:'project3', gitlink:'gitlink', deploy:'deployment link'}]
    const project4 = [{name:'project4', gitlink:'gitlink', deploy:'deployment link'}]
    const project5 = [{name:'project5', gitlink:'gitlink', deploy:'deployment link'}]
    const project6 = [{name:'project6', gitlink:'gitlink', deploy:'deployment link'}]
    

    return (
        <div className="container-fluid text-decoration-none">
          <div className="container-fluid m-3 p-3">
            <div className="container-fluid row m-3 p-3">
            <Project project= {project1}/>
            <Project project= {project2}/>
            <Project project= {project3}/>
            
            <div className="container-fluid row mt-5">
            <Project project= {project4}/>
            <Project project= {project5}/>
            <Project project= {project6}/>

            </div>
            </div>
          </div>
        </div>
    )

}

export default Work