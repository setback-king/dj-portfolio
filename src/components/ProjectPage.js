import Project from "./Project";

const ProjectPage = ({ handleClose, info }) => {
  const {
    name,
    p,
    pp2,
    link1,
    pc,
    url2,
    url3,
    url4,
    url5,
    url6,
    url7,
    url8,
    url9,
    url10,
    url11,
    url12,
    url13,
    url14,
    url15,
    url16,
    url17,
    url18,
    url19,
    url20,
    url21,
    url22,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
  } = info[0];

  return (
    <div className="projectPage">
      <div className="project--container">
        <div className="sideBar--header">
          <h1 className="project--header">{name}</h1>
          <span className="closeSide" onClick={handleClose}>
            X
          </span>
        </div>
        <p>{p}</p>
        {pp2 && <p>{pp2}</p>}
        {link1 && (
          <a href={link1} target="_blank" rel="noreferrer">
            https://rivergreenresort.com
          </a>
        )}
        {pc && <p>{pc}</p>}
        <img className="sideImage" src={url2} alt="" />
        {p2 && <p>{p2}</p>}
        <img className="sideImage" src={url3} alt="" />
        {p3 && <p>{p3}</p>}
        {url4 && <img className="sideImage" src={url4} alt="" />}
        {p4 && <p>{p4}</p>}
        {url5 && <img className="sideImage" src={url5} alt="" />}
        {p5 && <p>{p5}</p>}
        {url6 && <img className="sideImage" src={url6} alt="" />}
        {p6 && <p>{p6}</p>}
        {url7 && <img className="sideImage" src={url7} alt="" />}
        {p7 && <p>{p7}</p>}
        {url8 && <img className="sideImage" src={url8} alt="" />}
        {p8 && <p>{p8}</p>}
        {url9 && <img className="sideImage" src={url9} alt="" />}
        {p9 && <p>{p9}</p>}
        {url10 && <img className="sideImage" src={url10} alt="" />}
        {p10 && <p>{p10}</p>}
        {url11 && <img className="sideImage" src={url11} alt="" />}
        {p11 && <p>{p11}</p>}
        {url12 && <img className="sideImage" src={url12} alt="" />}
        {p12 && <p>{p12}</p>}
        {url13 && <img className="sideImage" src={url13} alt="" />}
        {p13 && <p>{p13}</p>}
        {url14 && <img className="sideImage" src={url14} alt="" />}
        {p14 && <p>{p14}</p>}
        {url15 && <img className="sideImage" src={url15} alt="" />}
        {p15 && <p>{p15}</p>}
        {url16 && <img className="sideImage" src={url16} alt="" />}
        {url17 && <img className="sideImage" src={url17} alt="" />}
        {url18 && <img className="sideImage" src={url18} alt="" />}
        {url19 && <img className="sideImage" src={url19} alt="" />}
        {url20 && <img className="sideImage" src={url20} alt="" />}
        {url21 && <img className="sideImage" src={url21} alt="" />}
        {url22 && <img className="sideImage" src={url22} alt="" />}
      </div>
    </div>
  );
};

export default ProjectPage;
