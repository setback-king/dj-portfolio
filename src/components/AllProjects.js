import Projects from "../data/Projects.json"
import {useState, useEffect} from "react"
import Project from "./Project"
import ProjectPage from "./ProjectPage"


const AllProjects = () => {

    const [isClicked, setIsClicked] = useState('')
    const [pageInfo, setPageInfo] = useState([])

    const handleClicker = (id) => {
        setIsClicked(true)
        document.body.style.overflowY = "hidden"
       Projects.map(project => {
            if(project.id === id) {
               setPageInfo([{name: project.name}])
            }
        })
    }

        

    const handleClose = () => {
        setIsClicked(false)
        document.body.style.overflowY = "visible"
    }

    useEffect(() => {
        setIsClicked(false)
        setPageInfo([{name: "Kreo"}])
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
            {isClicked && <ProjectPage handleClose={handleClose} info={pageInfo}/>}
        </div>
    )
}

export default AllProjects