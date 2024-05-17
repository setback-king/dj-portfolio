import { useMediaQuery } from "react-responsive";

const ProjectPage = ({ handleClose, info }) => {
  const {
    name,
    p,
    pp2,
    link1,
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

  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });
  console.log(info);

  return (
    <div className="projectPage">
      <div className="project--container">
        <div className="sideBar--header">
          <h1 className="project--header">{name}</h1>
          <span className="closeSide" onClick={handleClose}>
            X
          </span>
        </div>
        <p style={{ marginTop: "-2%" }}>{p}</p>
        {pp2 && <p style={{ marginTop: "0%" }}>{pp2}</p>}
        {link1 && (
          <a href={link1} target="_blank" rel="noreferrer">
            https://rivergreenresort.com
          </a>
        )}

        {isMobile ? (
          <img
            className="sideImage"
            style={{ marginBottom: "7%" }}
            src={url2}
            alt=""
            loading="lazy"
          />
        ) : (
          <a href={url2} className="sidebarA" target="_blank" rel="noreferrer">
            <img className="sideImage" src={url2} alt="" loading="lazy" />
          </a>
        )}

        {p2 && <p className="sideP">{p2}</p>}
        {isMobile ? (
          <img
            className="sideImage"
            style={{ marginBottom: "7%" }}
            src={url3}
            alt=""
            loading="lazy"
          />
        ) : (
          <a href={url3} className="sidebarB" target="_blank" rel="noreferrer">
            <img className="sideImage" src={url3} alt="" loading="lazy" />
          </a>
        )}
        {p3 && <p className="sideP">{p3}</p>}
        {url4 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url4}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url4}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url4} alt="" loading="lazy" />
            </a>
          ))}
        {p4 && <p className="sideP">{p4}</p>}
        {url5 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url5}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url5}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url5} alt="" loading="lazy" />
            </a>
          ))}
        {p5 && <p className="sideP">{p5}</p>}
        {url6 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url6}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url6}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url6} alt="" loading="lazy" />
            </a>
          ))}
        {p6 && <p className="sideP">{p6}</p>}
        {url7 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url7}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url7}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url7} alt="" loading="lazy" />
            </a>
          ))}
        {p7 && <p className="sideP">{p7}</p>}
        {url8 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url8}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url8}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url8} alt="" loading="lazy" />
            </a>
          ))}
        {p8 && <p className="sideP">{p8}</p>}
        {url9 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url9}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url9}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url9} alt="" loading="lazy" />
            </a>
          ))}
        {p9 && <p className="sideP">{p9}</p>}
        {url10 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url10}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url10}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url10} alt="" loading="lazy" />
            </a>
          ))}
        {p10 && <p className="sideP">{p10}</p>}
        {url11 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url11}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url11}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url11} alt="" loading="lazy" />
            </a>
          ))}
        {p11 && <p className="sideP">{p11}</p>}
        {url12 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url12}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url12}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url12} alt="" loading="lazy" />
            </a>
          ))}
        {p12 && <p className="sideP">{p12}</p>}
        {url13 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url13}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url13}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url13} alt="" loading="lazy" />
            </a>
          ))}
        {p13 && <p className="sideP">{p13}</p>}
        {url14 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url14}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url14}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url14} alt="" loading="lazy" />
            </a>
          ))}
        {p14 && <p className="sideP">{p14}</p>}
        {url15 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url15}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url15}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url15} alt="" loading="lazy" />
            </a>
          ))}
        {p15 && <p className="sideP">{p15}</p>}
        {url16 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url16}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url16}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url16} alt="" loading="lazy" />
            </a>
          ))}
        {url17 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url17}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url17}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url17} alt="" loading="lazy" />
            </a>
          ))}
        {url18 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url18}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url18}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url18} alt="" loading="lazy" />
            </a>
          ))}
        {url19 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url19}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url19}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url19} alt="" loading="lazy" />
            </a>
          ))}
        {url20 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url20}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url20}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url20} alt="" loading="lazy" />
            </a>
          ))}
        {url21 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url21}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url21}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url21} alt="" loading="lazy" />
            </a>
          ))}
        {url22 &&
          (isMobile ? (
            <img
              loading="lazy"
              className="sideImage"
              src={url22}
              alt=""
              style={{ marginBottom: "7%" }}
            />
          ) : (
            <a
              href={url22}
              className="sidebarB"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sideImage" src={url22} alt="" loading="lazy" />
            </a>
          ))}
      </div>
    </div>
  );
};

export default ProjectPage;
