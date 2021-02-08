import React, { useContext } from "react";
import styles from "../../styles/landing.module.css";
import Header from "../../components/Header.js";
import { APIContext } from "../../context/HomeData";

export default function landing() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.content}>
        <div className={styles.missions}>
          <h1>Upcoming Missions</h1>
        </div>
      </div>
    </div>
  );
}
