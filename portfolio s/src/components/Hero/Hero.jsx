import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dhruv</h1>
        <p className={styles.description}>
        A Full-Stack MERN Developer and Web Designer creating responsive and user-friendly web applications. Currently in my second year of  btech in CSE (specialization in AIML). Reach out if you'd like to learn more!
        </p>
        <a href="mailto:dksingh2953@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/laval.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
