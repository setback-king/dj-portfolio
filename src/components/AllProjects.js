import Projects from "../data/Projects.json";
import mobileProjects from "../data/mobileProjects.json";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Project from "./Project";
import ProjectPage from "./ProjectPage";

const AllProjects = () => {
  const [isClicked, setIsClicked] = useState("");
  const [pageInfo, setPageInfo] = useState([]);

  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });

  const displayPhotos = isMobile ? mobileProjects : Projects; // put here conditional code to either choose project.json or mobile version

  window.addEventListener("click", (e) => {
    console.log(e.target.className);
    if (e.target.className === "projectPage" && isClicked) {
      handleClose();
    }
  });

  const handleClicker = (id) => {
    setIsClicked(true);
    document.body.style.overflowY = "hidden";
    let projectContainer = document.querySelector(".projects--container--wrap");
    projectContainer.style.filter = "brightness(60%)";
    projectContainer.style.pointerEvents = "none";

    displayPhotos.forEach((project) => {
      if (project.id === id) {
        setPageInfo([
          {
            name: project.name,
            url: project.url,
            p: project.p,
            pp2: project.pp2,
            link1: project.link1,
            id: project.id,
            url2: project.url2,
            url3: project.url3,
            url4: project.url4,
            url5: project.url5,
            url6: project.url6,
            url7: project.url7,
            url8: project.url8,
            url9: project.url9,
            url10: project.url10,
            url11: project.url11,
            url12: project.url12,
            url13: project.url13,
            url14: project.url14,
            url15: project.url15,
            url16: project.url16,
            url17: project.url17,
            url18: project.url18,
            url19: project.url19,
            url20: project.url20,
            url21: project.url21,
            url22: project.url22,
            p2: project.p2,
            p3: project.p3,
            p4: project.p4,
            p5: project.p5,
            p6: project.p6,
            hovImg: project.hovImg,
            p7: project.p7,
            p8: project.p8,
            p9: project.p9,
            p10: project.p10,
            p11: project.p11,
            p12: project.p12,
            p13: project.p13,
            p14: project.p14,
            p15: project.p15,
          },
        ]);
      }
    });
  };

  const handleClose = () => {
    setIsClicked(false);
    let sideBar = document.querySelector(".projectPage");
    let projectContainer = document.querySelector(".projects--container--wrap");
    if (projectContainer && sideBar) {
      sideBar.style.left = "-100%";
      projectContainer.style.filter = "brightness(100%)";
      document.body.style.overflowY = "visible";
      projectContainer.style.pointerEvents = "";
    }
  };

  useEffect(() => {
    setIsClicked(false);
    setPageInfo([
      {
        name: "ALLEN® 50TH ANNIVERSARY",
        url: "assets/1)Allen50_CoverPhoto.png",
        p: "The year 2020 marked 50 years of Allen® being in business. We wanted a special logo to promote on our website, apparel, ads, etc. Here you'll see the logo I designed, the product catalog I lead design on, and a few other applications where our team promoted the anniversary. It was promoted effectively at Shot Show, the nation's largest professional event for sport shooting, hunting, and the outdoor industry.",
        id: 0,
        url2: "assets/Images_Allen50/1)Logo_Allen50.jpg",
        url3: "assets/Images_Allen50/2)CatalogCover_InEnvironment_Allen50.jpg",
        url4: "assets/Images_Allen50/3)CatalogCover_Allen50.jpg",
        url5: "assets/Images_Allen50/4)CatalogBackCover_Allen50.jpg",
        url6: "assets/Images_Allen50/5)CatalogSpread1_Allen50.jpg",
        url7: "assets/Images_Allen50/6)CatalogSpread2_Allen50.jpg",
        url8: "assets/Images_Allen50/7)CatalogSpread3_Allen50.jpg",
        url9: "assets/Images_Allen50/8)Tradeshow1_Allen50.jpg",
        url10: "assets/Images_Allen50/9)Tradeshow2_Allen50.jpg",
        url11: "assets/Images_Allen50/10)Hangtag_Allen50.jpg",
        url12: "assets/Images_Allen50/11)SalesAward_Allen50.jpg",
        url13: "assets/Images_Allen50/12)LogoOptions_InEnvironment_Allen50.jpg",
      },
    ]);
  }, []);

  const projectElements = displayPhotos.map((project) => {
    return (
      <Project
        key={project.id}
        urls={project.url}
        hovImg={project.hovImg}
        names={project.name}
        id={project.id}
        styles={{
          marginTop: project.marginTop,
          marginBottom: project.marginBottom,
          width: project.width,
          zIndex: project.zIndex,
        }}
        handleClick={() => handleClicker(project.id)}
      />
    );
  });

  return (
    <div className="projects--container">
      <div className="projects--container--wrap">{projectElements}</div>
      {isClicked && <ProjectPage handleClose={handleClose} info={pageInfo} />}
    </div>
  );
};

export default AllProjects;
