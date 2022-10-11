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
        {pp2 && <p style={{ marginTop: "0%" }}>{pp2}</p>}
        {link1 && (
          <a href={link1} target="_blank" rel="noreferrer">
            https://rivergreenresort.com
          </a>
        )}
        {pc && <p>{pc}</p>}

        <a
          href={url2}
          style={{ marginBottom: "0%", marginTop: "5%" }}
          target="_blank"
          rel="noreferrer"
        >
          <img className="sideImage" src={url2} alt="" />
        </a>

        {p2 && <p className="sideP">{p2}</p>}
        <img className="sideImage" src={url3} alt="" />
        {p3 && <p className="sideP">{p3}</p>}
        {url4 && <img className="sideImage" src={url4} alt="" />}
        {p4 && <p className="sideP">{p4}</p>}
        {url5 && <img className="sideImage" src={url5} alt="" />}
        {p5 && <p className="sideP">{p5}</p>}
        {url6 && <img className="sideImage" src={url6} alt="" loading="lazy" />}
        {p6 && <p className="sideP">{p6}</p>}
        {url7 && <img className="sideImage" src={url7} alt="" loading="lazy" />}
        {p7 && <p className="sideP">{p7}</p>}
        {url8 && <img className="sideImage" src={url8} alt="" loading="lazy" />}
        {p8 && <p className="sideP">{p8}</p>}
        {url9 && <img className="sideImage" src={url9} alt="" loading="lazy" />}
        {p9 && <p className="sideP">{p9}</p>}
        {url10 && (
          <img className="sideImage" src={url10} alt="" loading="lazy" />
        )}
        {p10 && <p className="sideP">{p10}</p>}
        {url11 && (
          <img className="sideImage" src={url11} alt="" loading="lazy" />
        )}
        {p11 && <p className="sideP">{p11}</p>}
        {url12 && (
          <img className="sideImage" src={url12} alt="" loading="lazy" />
        )}
        {p12 && <p className="sideP">{p12}</p>}
        {url13 && (
          <img className="sideImage" src={url13} alt="" loading="lazy" />
        )}
        {p13 && <p className="sideP">{p13}</p>}
        {url14 && (
          <img className="sideImage" src={url14} alt="" loading="lazy" />
        )}
        {p14 && <p className="sideP">{p14}</p>}
        {url15 && (
          <img className="sideImage" src={url15} alt="" loading="lazy" />
        )}
        {p15 && <p className="sideP">{p15}</p>}
        {url16 && (
          <img className="sideImage" src={url16} alt="" loading="lazy" />
        )}
        {url17 && (
          <img className="sideImage" src={url17} alt="" loading="lazy" />
        )}
        {url18 && (
          <img className="sideImage" src={url18} alt="" loading="lazy" />
        )}
        {url19 && (
          <img className="sideImage" src={url19} alt="" loading="lazy" />
        )}
        {url20 && (
          <img className="sideImage" src={url20} alt="" loading="lazy" />
        )}
        {url21 && (
          <img className="sideImage" src={url21} alt="" loading="lazy" />
        )}
        {url22 && (
          <img className="sideImage" src={url22} alt="" loading="lazy" />
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
