import ContactMe from "./ContactMe";

export default function About() {
  return (
    <div className="main">
      <div className="about">
        <div className="pic">
          <img
            src="assets/About/About Photo_New.jpg"
            alt=""
            className="profilePic"
            loading="lazy"
          />
        </div>
        <div className="aboutRight">
          <h3
            className="aboutHeader"
            style={{
              marginTop: "0px",
              textShadow: "0px 1px, 1px 0px, 1px 1px",
              letterSpacing: "1px",
              marginBottom: "10px",
              fontFamily: "GothamBook",
              fontWeight: "700",
            }}
          >
            ABOUT ME
          </h3>
          <p className="aboutBody">
            As a seasoned Graphic Designer with nine years of dedicated
            experience, I specialize in brand development, brand identity and
            packaging design. I utilize a wide range of skills to bring my
            creative visions to life, and I am passionate about each project
            that I touch. There is no greater reward than seeing a finished
            product after putting your heart and soul into it. This is what
            motivates me to excel as a designer, maintain a strong work ethic
            and consistently exceed expectations.
          </p>
          <div
            className="contactInfo"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "2%",
              }}
            >
              <span>
                <span>Phone: </span>
                <span style={{ fontFamily: "GothamBook" }}>303-945-9887</span>
              </span>
              <span>
                <span>Email: </span>
                <span style={{ fontFamily: "GothamBook" }}>
                  daniel.barez@outlook.com
                </span>
              </span>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <a
                href="https://www.linkedin.com/in/daniel-barez-b46a4718b/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="assets/About/LinkedIn_Icon_AboutPage.png"
                  alt=""
                  className="aboutLogo"
                />
              </a>
            </div>
          </div>
          <ContactMe />
        </div>
      </div>
    </div>
  );
}
