import React from "react";
import styles from "./Title.module.css";

const Title = () => {
    return (
        <div className={styles.title}>
            <h2 className={styles.rainbowText}>Component diagrams</h2>
            <h1 className={styles.rainbowText}>IPa21 IK MJ RAG</h1>
        </div>
    );
}

export default Title;
