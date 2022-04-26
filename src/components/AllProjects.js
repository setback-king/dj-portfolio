import Projects from "../data/Projects.json"
import {useState, useEffect} from "react"
import Project from "./Project"
import ProjectPage from "./ProjectPage"
import { click } from "@testing-library/user-event/dist/click"


const AllProjects = () => {

    const [isClicked, setIsClicked] = useState('')
    const [pageInfo, setPageInfo] = useState([])

    const handleClicker = (id) => {
      handleClickChange(id)
    }

    function handleClickChange(id){
        document.body.style.overflowY = "hidden"
        let sideBar = document.querySelector('.projectPage')
        sideBar.style.left = '0';
        let projectContainer = document.querySelector('.projects--container--wrap')
        projectContainer.style.filter = 'brightness(60%)'
        projectContainer.style.pointerEvents = 'none'

        Projects.map(project => {
            if(project.id === id) {
               setPageInfo([{name: project.name}])
            }
        })
    }

    const handleClose = () => {
       // setIsClicked(true)
        handleCloseChange()
    }

    function handleCloseChange(){
        let sideBar = document.querySelector('.projectPage')
        sideBar.style.left = '-100%';
        let projectContainer = document.querySelector('.projects--container--wrap')
        projectContainer.style.filter = 'brightness(100%)'
        document.body.style.overflowY = "visible"
        projectContainer.style.pointerEvents = ''
    }

    useEffect(() => {
        setIsClicked(true)
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
        <div className="projects--container" >
            <div className="projects--container--wrap">{projectElements}</div>
            {isClicked && <ProjectPage handleClose={handleClose} info={pageInfo}/>}
        </div>
    )
}

export default AllProjects