const ProjectPage = ({handleClose, info}) => {
  
    const {name, p, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15, p2, p3, p4, p5, p6, p7, p9, p11, p12}=info[0]


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
                {p7 && <p>{p7}</p>}
                <img className="sideImage" src={url8} alt="" />
                <img className="sideImage" src={url9} alt="" />
                {p9 && <p>{p9}</p>}
                <img className="sideImage" src={url10} alt="" />
               {url11 && <img className="sideImage" src={url11} alt="" />}
                {p11 && <p>{p11}</p>}
               {url12 && <img className="sideImage" src={url12} alt="" />}
                {p12 && <p>{p12}</p>}
                {url13 && <img className="sideImage" src={url13} alt="" />}
                {url14 && <img className="sideImage" src={url14} alt=""/>}
                {url15 && <img className="sideImage" src={url15} alt="" />}


            </div>
         
        </div>
    )
}

export default ProjectPage