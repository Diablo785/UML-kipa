import React from "react";
import styles from "./Slide3.module.css";

const Slide3 = () => {
    return (
        <div className={styles.Slide3}>
            <h4 className={styles.rainbowText}>Kādi UML elementi ir šajā diagrammā?</h4>
            <h3 className={styles.rainbowText}>
            Grafiski komponentu diagramma parasti satur:
            
            components, interfaces un dependency, aggregation, constraint, generalization, association, un realization relationships.
            
            Tajā var būt arī notes un constraints.
            </h3>
        </div>
    );
}

export default Slide3;
