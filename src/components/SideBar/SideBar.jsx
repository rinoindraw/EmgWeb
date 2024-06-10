import React, { useState } from "react";
import styles from "./SideBar.module.css";
import SidebarLink from "./SidebarLink";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineLightMode, MdDarkMode, MdSpaceDashboard } from "react-icons/md";
import { BsPersonFill, BsFillTrash2Fill } from "react-icons/bs";
import { MdBarChart } from "react-icons/md";
import logoFadil from "../../assets/flogo.png";

const SideBar = ({
  darkMode,
  toggleDarkMode,
  sidebarClosed,
  handleSidebarToggle,
}) => {
  const switchClassName = darkMode ? "switch dark" : "switch";
  const sidebarClassName = `${styles.sidebar} ${
    sidebarClosed ? styles.close : ""
  }`;

  return (
    <nav
      className={`${styles.sidebar} ${darkMode ? styles.dark : ""} ${
        sidebarClosed ? styles.close : ""
      }`}
    >
      <header>
        <div className={styles.imageText}>
          <span className={styles.image}>
            {darkMode ? (
              <img src={logoFadil} alt="logo" />
            ) : (
              <img src={logoFadil} alt="logo" />
            )}
          </span>

          <div className={`${styles.text} ${styles.headerText}`}>
            <span className={styles.name}>EMG Sensor</span>
          </div>
        </div>

        <MdOutlineKeyboardArrowRight
          className={styles.toggle}
          onClick={handleSidebarToggle}
        />
      </header>
      <div className={styles.menuBar}>
        <div className={styles.menu}>
          <ul className={styles["menu-links"]}>
            <SidebarLink
              icon={<MdSpaceDashboard className={styles.icon} />}
              text={"Dashboard"}
              to={"/"}
            />
            <SidebarLink
              icon={<BsPersonFill className={styles.icon} />}
              text={"About Us"}
              to={"/about"}
            />
          </ul>
        </div>

        <div className={styles.bottomContent}>
          <li className={styles.mode}>
            <div className={styles.moonSun}>
              {darkMode ? (
                <i className={`${styles.icon} ${styles.moon}`}>
                  <MdDarkMode />
                </i>
              ) : (
                <i className={`${styles.icon} ${styles.sun}`}>
                  <MdOutlineLightMode />
                </i>
              )}
            </div>
            <span className={`${styles.modeText} ${styles.text}`}>
              {darkMode ? "Light " : "Dark "}Theme
            </span>
            <div
              className={`${styles.toggleSwitch} ${styles[switchClassName]}`}
              onClick={toggleDarkMode}
            >
              <span className={styles.switch}></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
