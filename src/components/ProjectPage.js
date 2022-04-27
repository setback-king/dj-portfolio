const ProjectPage = ({handleClose, info}) => {
  
    const {name, p, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15, p2, p3, p5}=info[0]


    return (
        <div className="projectPage">
            <div className="project--container">
                <div className="sideBar--header">
                    <h1 className='project--header'>{name}</h1>
                    <span className="closeSide" onClick={handleClose}>X</span>
                </div>
                <p>{p}</p>
                <img className="sideImage" src={url2} alt="" />
                <img className="sideImage" src={url3} alt="" />
                <img className="sideImage" src={url4} alt="" />
                <img className="sideImage" src={url5} alt="" />
                <img className="sideImage" src={url6} alt="" />
                <img className="sideImage" src={url7} alt="" />
                <p>{p2}</p>
                <img className="sideImage" src={url8} alt="" />
                <img className="sideImage" src={url9} alt="" />
                <img className="sideImage" src={url10} alt="" />
                <img className="sideImage" src={url11} alt="" />
                {p3 && <p>{p3}</p>}
                <img className="sideImage" src={url12} alt="" />
                {p5 && <p>{p5}</p>}
                <img className="sideImage" src={url13} alt="" />
                {url14 && <img className="sideImage" src={url14} alt=""/>}
                {url15 && <img className="sideImage" src={url15} alt="" />}


            </div>
         
        </div>
    )
}

export default ProjectPage