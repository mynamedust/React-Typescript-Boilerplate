import React from "react";
import styles from "./Welcome.module.css";
import Youtube from "../../assets/icons/youtube.svg";
import Github from "../../assets/icons/github.svg";

const Welcome = () => (
    <div className={styles.wrapper}>
        <h1 className={styles.h1}>Welcome!</h1>
        <h1 className={styles.h2}>This is React + TS ready boilerplate</h1>
        <h3 className={styles.h3}>Enjoy your development without CRA</h3>
        <h3 className={styles.text}>Check m GitHub and YouTube channel for more</h3>
        <div className={styles.icons}>
            <a href="https://github.com/mynamedust" target="_blank" rel="noreferrer">
                <Github />
            </a>
            <a
                href="https://www.youtube.com/channel/UCdMxjU63zzTZGX8ho9KAzOQ/featured"
                target="_blank"
                rel="noreferrer"
            >
                <Youtube />
            </a>
        </div>
    </div>
);

export default Welcome;
