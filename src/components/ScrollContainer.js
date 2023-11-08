import React from "react";
import Title from "./Title";
import styles from "./ScrollContrainer.module.css";
const ScrollContainer = () => {
    return (
        <div className={styles.scrollContainer}>
            <Title />
            <Title />
            <Title />
        </div>
    );
}

export default ScrollContainer;
