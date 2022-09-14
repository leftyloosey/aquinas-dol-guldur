import Project from "./Project"

function Work() {
    console.log("work")
    const reptiles = ["alligator", "snake","lizard"]
    const mammals = ['bear','hog']
    const animalia = [reptiles, mammals]
    return (
        <div>
        <Project reptiles={reptiles} animalia={animalia} />
        <Project reptiles={reptiles} animalia={animalia} />
        <Project reptiles={reptiles} animalia={animalia} />
        
        </div>
    )

}

export default Work