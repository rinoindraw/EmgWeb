import React from "react";
import Footer from "../Footer/Footer";
import styles from "./Dashboard.module.css";
import navIcon3 from "../../assets/nav-icon3.svg";

const Dashboard = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.dashboard}>
          <div className={styles.tittleWrapper}>
            <div className="social-icon">
              <a
                href="https://www.instagram.com/rinoindraw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <div className={styles.tittleText}>
              <h2>Dashboard</h2>
              <p>BottleCare</p>
            </div>
          </div>
          <div className={styles.chartWrapper}>
          </div>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </section>
  );
};

export default Dashboard;
