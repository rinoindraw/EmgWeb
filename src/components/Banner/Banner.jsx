import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { EnvelopeFill } from "react-bootstrap-icons";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect/dist/core";
import Arrow from "../../assets/arrow.png";
import styles from "./Banner.module.css"; 
import About from "../About/About";
import Desc from "../Desc/Desc";


const Banner = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "Berbasis Esp32",
        "Dengan Menggunakan Internet Of Things",
      ],
      autoStart: true,
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 50,
    });

    typewriterRef.current.style.display = "flex";
    typewriterRef.current.style.flexWrap = "wrap";

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <section className={styles.bodyWallpaper}>
    <div className={styles.banner} id="home">
      <div className={styles.flexBanner}>
        <a
          href="https://www.linkedin.com/in/fadil-arif-wiharto-a904b5210/"
          target="_blank"
          className={`${styles.icons} ${styles.leftAnim}`}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>

      <div className={styles.Introduction}>
        <h1>Deteksi Otot Dengan Sensor Surface Electromyography</h1>
        <h2>
          <span ref={typewriterRef}></span>
        </h2>
        <p>By Fadil Arif Wiharto</p>
        <h2 className={styles.scrollText}>Scroll for more</h2>
        <img src={Arrow} alt="Arrow" />
      </div>
    </div>
    <Desc/>
    <About/>
    </section>
  );
};

export default Banner;
