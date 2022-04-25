import Projects from "../data/Projects.json"


const AllProjects = () => {

    const projectElements = Projects.map(project => {
        return (
            <div className="imageBox" style={{zIndex: project.zIndex || 1, width: project.width, marginTop: project.marginTop || 0, marginBottom: project.marginBottom || 0}}><img key={project.id} className="project--image" src={project.url} alt={project.name} /></div>
        )
    })

    return (
        <div className="projects--container">{projectElements}</div>
    )
}

export default AllProjects