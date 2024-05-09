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
        name: "HOT WHEELS®",
        url: "assets/Transition_Photos/1.5)HotWheels_Transition_CoverPhoto.jpg",
        id: 1,
        "hovImg": "assets/1)HotWheels_CoverPhoto.jpg",
        "width": "100%",
        "p": "Partnering with Mattel on one of the most successful and iconic toy brands in the world was a tremendously rewarding experience. I worked hand in hand with their design and marketing teams to develop innovative products and continuously push the envelope of creativity. Here you’ll see a collection of products, packaging and signage that I designed while working on the brand.",
        "url2": "assets/Hotwheels_Images/1)Logo_HotWheels.jpg",
        "url3": "assets/Hotwheels_Images/2)Poster_HotWheels.jpg",
        "p3": "2018 and 2019 line look.",
        "url4": "assets/Hotwheels_Images/3)2018_PackagingMechanical_HotWheels.jpg",
        "url5": "assets/Hotwheels_Images/4)2018_BoxPackageRender_HotWheels.jpg",
        "url6": "assets/Hotwheels_Images/5)ExtremeActionLogo_HotWheels.png",
        "p6": "Product design.",
        "url7": "assets/Hotwheels_Images/6)Product_BluePrint_HotWheels.jpg",
        "url8": "assets/Hotwheels_Images/7)Product_White_HotWheels.jpg",
        "url9": "assets/Hotwheels_Images/8)Product_FullColor_HotWheels.jpg",
        "p9": "Catalog hero page and template.",
        "url10": "assets/Hotwheels_Images/9)Catalog_HeroPage_HotWheels.jpg",
        "url11": "assets/Hotwheels_Images/10)Catalog_Template_HotWheels.jpg",
        "p11": "2016 and 2017 line look.",
        "url12": "assets/Hotwheels_Images/11)2016_PackagingMechanical_HotWheels.jpg",
        "url13": "assets/Hotwheels_Images/12)2016_BoxPackageRender_HotWheels.jpg",
        "p13": "2015 line look.",
        "url14": "assets/Hotwheels_Images/13)2015_PackagingMechanical_HotWheels.jpg",
        "url15": "assets/Hotwheels_Images/14)2015_BoxPackageRender_HotWheels.jpg",
        "p15": "Additional product and packaging design.",
        "url16": "assets/Hotwheels_Images/15)SharkRuiser_HotWheels.jpg",
        "url17": "assets/Hotwheels_Images/16)Velocitrax_HotWheels.jpg",
        "url18": "assets/Hotwheels_Images/17)BoneShaker_HotWheels.jpg",
        "url19": "assets/Hotwheels_Images/18)NitroCharger_HotWheels.jpg",
        "url20": "assets/Hotwheels_Images/19)HyperRacer_HotWheels.jpg",
        "url21": "assets/Hotwheels_Images/20)HotShocks_HotWheels.jpg",
        "url22": "assets/Hotwheels_Images/21)EdgeGlowCruisers_HotWheels.jpg"
      }
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
