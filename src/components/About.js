export default function About() {
  return (
    <div className="main">
      <div className="about">
        <div className="pic">
          <img
            src="assets/Contact Photo_New.jpg"
            alt=""
            className="profilePic"
          />
        </div>
        <div className="aboutRight">
          <h3
            style={{
              marginTop: "0px",
              textShadow: "0px 1px, 1px 0px, 1px 1px",
              letterSpacing: "1.5px",
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
        </div>
      </div>
    </div>
  );
}
