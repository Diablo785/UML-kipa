import React from "react";
import styles from "./Slide2.module.css";

const Slide2 = () => {
    return (
        <div className={styles.Slide2}>
            <h4 className={styles.rainbowText}>Kad to izmanto?</h4>
            <h5 className={styles.rainbowText}>
Sistēmas projektēšana: Tā palīdz projektēt sistēmas komponentus un to organizāciju, lai sasniegtu konkrētus projektēšanas mērķus.

Programmatūras arhitektūras izstrāde: Komponentu diagramma ir noderīga, lai definētu programmatūras komponentus, to atkarības, saskarnes un to organizāciju sistēmas arhitektūrā.

Integrācija un sadarbība: Tā palīdz saprast, kā dažādi komponenti mijiedarbojas un savstarpēji sazinās, īpaši sistēmās, kas satur vairākus komponentus un moduļus.

Migrācija un pārveidošana: Tā var tikt izmantota, lai plānotu pāreju no vienas sistēmas versijas uz citu, jaunāku platformu vai arhitektūru.

Dokumentācija: Komponentu diagramma kalpo kā vizuāla dokumentācija, lai aprakstītu sistēmas komponentus un to struktūru.
            </h5>
        </div>
    );
}

export default Slide2;
