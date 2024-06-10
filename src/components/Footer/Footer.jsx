import React from "react";
import gundar from "../../assets/gundarsmall.png";
import navIcon3 from "../../assets/nav-icon3.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoFooter}>
        <p>Supported By</p>
        <div className={styles.supportLogo}>
          <img className={styles.footerLogo} src={gundar} alt="Logo" />
        </div>
      </div>
      <div className={styles.socialFooter}>
        <div className="social-icon">
          <a
            href="https://www.instagram.com/rinoindraw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={navIcon3} alt="Icon" />
          </a>
          <p>&copy; 2024, Skripsi</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
