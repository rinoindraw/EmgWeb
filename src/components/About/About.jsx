import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import pasFoto from "../../assets/fotofadil.jpeg";
import "./About.css";

export const About = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Android Developer",
    "Web Developer",
    "Robotics",
    "Graphic Designer",
    "UX Designer",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const summary = "Passionate IT student in programming, software development, and emerging technologies. Committed to continuous skill growth and eager for new challenges. Thrives as a collaborative team player, adept at connecting the dots and delivering innovative solutions. An enthusiastic learner driven to make an impact in the tech industry."

  return (
    <section className="about" id="about">
        <div className="about-content">
          <div className="about-text">
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                  <h1>Meet The Creator</h1>
                  <p>{summary}</p>
                  <a
                    className="socialBox"
                    href="https://www.linkedin.com/in/fadil-arif-wiharto-a904b5210/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </div>
          <div className="about-image">
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={pasFoto} alt="PasFoto" />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
    </section>
  );
};

export default About;
