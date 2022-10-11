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
              letterSpacing: "1.5px",
              marginBottom: "10px",
            }}
          >
            ABOUT ME...
          </h3>
          <p className="aboutBody">
            I’m a highly motivated Senior Graphic Designer with seven years of
            experience in the areas of brand identity, brand development and
            packaging. There is a wide variety of design and creativity that
            falls under those pillars including advertising, web design,
            illustration and photography. From conceptualizing to creating, I am
            passionate about each project that I work on. There is no greater
            reward than seeing a finished product after putting your heart and
            soul into it. This is what drives me to be the best designer I can
            be, maintain a strong work ethic and go the extra mile.
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
                <strong>Phone: </strong>203-848-8488
              </span>
              <span>
                <strong>Email: </strong>danielbarez04@gmail.com
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
              <a href="assets/About/Daniel Barez_Resume.pdf" download>
                <img
                  src="assets/About/Resume_Icon_AboutPage.png"
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
