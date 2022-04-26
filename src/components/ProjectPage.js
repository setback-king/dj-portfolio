const ProjectPage = ({handleClose, name, info}) => {
  
    return (
        <div className="projectPage">
            <div className="project--container">
                <div className="sideBar--header">
                    <h1 className='project--header'>{info[0].name}</h1>
                    <span className="closeSide" onClick={handleClose}>X</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Risus ultricies tristique nulla aliquet. </p>
                <img className="sideImage" src="assets/2)Allen_CoverPhoto.jpg" alt="" />
                <img className="sideImage" src="assets/2)Allen_CoverPhoto.jpg" alt="" />
                <img className="sideImage" src="assets/2)Allen_CoverPhoto.jpg" alt="" />
                <img className="sideImage" src="assets/2)Allen_CoverPhoto.jpg" alt="" />
                <img className="sideImage" src="assets/2)Allen_CoverPhoto.jpg" alt="" />
                <img className="sideImage" src="assets/2)Allen_CoverPhoto.jpg" alt="" />
                <img className="sideImage" src="assets/2)Allen_CoverPhoto.jpg" alt="" />
                <img className="sideImage" src="assets/2)Allen_CoverPhoto.jpg" alt="" />
                <img className="sideImage" src="assets/2)Allen_CoverPhoto.jpg" alt="" />
                <img className="sideImage" src="assets/2)Allen_CoverPhoto.jpg" alt="" />
                <img className="sideImage" src="assets/2)Allen_CoverPhoto.jpg" alt="" />
                <img className="sideImage" src="assets/2)Allen_CoverPhoto.jpg" alt="" />
                <img className="sideImage" src="assets/2)Allen_CoverPhoto.jpg" alt="" />

            </div>
         
        </div>
    )
}

export default ProjectPage