import Projects from "../data/Projects.json"
import {useState, useEffect} from "react"
import Project from "./Project"
import ProjectPage from "./ProjectPage"


const AllProjects = () => {

    const [isClicked, setIsClicked] = useState('')

    const handleClicker = (id) => {
        setIsClicked(true)
        
    }

    const handleClose = () => {
        setIsClicked(false)
    }

    useEffect(() => {
        setIsClicked(false)
    }, [])


    const projectElements = Projects.map(project => {
        return (
            <Project 
                key={project.id} 
                urls={project.url} 
                names={project.name} 
                id={project.id}
                styles= {{marginTop: project.marginTop, marginBottom: project.marginBottom, width: project.width, zIndex: project.zIndex}}
                handleClick={() => handleClicker(project.id)}
            />
        )
    })

    return (
        <div className="projects--container">
            {projectElements}
            {isClicked && <ProjectPage handleClose={handleClose} />}
        </div>
    )
}

export default AllProjects