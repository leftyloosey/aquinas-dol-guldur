import Project from "./Project"

function Work() {

    const project1 = [{name:'Weather Dashboard App', gitlink:'https://github.com/leftyloosey/bertrand_russel_oliphaunt-6', deploy:'https://leftyloosey.github.io/bertrand_russel_oliphaunt-6/', img:'./public/man.jpeg'}]
    const project2 = [{name:'Notetaker App', gitlink:'https://github.com/leftyloosey/michel-delving-express-notetaker', deploy:'https://michel-delving-notetaker.herokuapp.com/', img:'./public/schedule.jpeg'}]
    const project3 = [{name:'Work Scheduling App', gitlink:'https://github.com/leftyloosey/challenge_5', deploy:'https://leftyloosey.github.io/challenge_5/', img:'./public/fax.webp'}]
    const project4 = [{name:'Tech Blog App', gitlink:'https://github.com/leftyloosey/cirith-stuart-techblog', deploy:'https://cirith-blog.herokuapp.com/', img:'./public/ruin.jpeg'}]
    const project5 = [{name:'Text Editor App', gitlink:'https://github.com/leftyloosey/thales-valinor-19', deploy:'https://thales-valinor.herokuapp.com/', img:'./public/press.jpeg'}]
    const project6 = [{name:'Weather Mood Music App', gitlink:'https://github.com/tanyamilburn/birthday-cake', deploy:'https://tanyamilburn.github.io/birthday-cake/index.html', img:'./public/woman.jpeg'}]
    

    return (
        <div className="container-fluid text-decoration-none">
          <div className="container-fluid m-3 p-3">
            <div className="container-fluid row m-3 p-3">
            <Project project= {project1}/>
            <Project project= {project2}/>
            <Project project= {project3}/>
            
            {/* <div className="container-fluid row mt-5"> */}
            <Project project= {project4}/>
            <Project project= {project5}/>
            <Project project= {project6}/>

            {/* </div> */}
            </div>
          </div>
        </div>
    )

}

export default Work