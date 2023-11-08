import React from "react";
import styles from "./Slide1.module.css";

const Slide1 = () => {
    return (
        <div className={styles.Slide1}>
            <h4 className={styles.rainbowText}>Kas tā ir un vai tā ir struktūras vai uzvedības modeļa daļa?</h4>
            <h3 className={styles.rainbowText}>Component diagramma ir viena no Unified Modeling Language (UML) diagrammu veidiem, kas tiek izmantota, lai attēlotu lietotnes vai sistēmas komponentus un to savstarpējās attiecības. Tā var tikt izmantota gan struktūras, gan uzvedības modelēšanai, taču visbiežāk tā tiek izmantota, lai attēlotu struktūras komponentus, to savstarpējās attiecības un kā tie tiek sadalīti sistēmā.</h3>
        </div>
    );
}

export default Slide1;
