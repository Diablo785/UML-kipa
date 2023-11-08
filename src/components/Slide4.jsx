import React from "react";
import styles from "./Slide4.module.css";

const Slide4 = () => {
    return (
        <div className={styles.Slide4}>
            <h4 className={styles.rainbowText}>Kāds ir piemērs ar skaidrojumu?</h4>
            <h3 className={styles.rainbowText}>Piemērs: Bloga lapas struktūra</h3>

            Komponente: Bloga lapa

Atbildība: Galvenais komponents, kas parāda visu bloga saturu.
Sastāvdaļas: Saturs, Komentāri, Plašāka informācija.
Mijiedarbība ar citiem komponentiem:
Saņem datus no "Saturs" komponentes.
Atļauj lietotājiem komentēt, izmantojot "Komentāri" komponenti.
Sniedz papildus informāciju, izmantojot "Plašāka informācija" komponenti.
Komponente: Saturs

Atbildība: Komponents, kas attēlo bloga galveno saturu.
Sastāvdaļas: Raksta virsraksts, teksts, attēli.
Mijiedarbība ar citiem komponentiem: Nav tiešas mijiedarbības ar citiem komponentiem.
Komponente: Komentāri

Atbildība: Komponents, kas ļauj lietotājiem komentēt blogu.
Sastāvdaļas: Komentāru saraksts, ievades lauks jauna komentāra pievienošanai.
Mijiedarbība ar citiem komponentiem: Var sūtīt jaunus komentārus "Bloga lapa" komponentei.
Komponente: Plašāka informācija

Atbildība: Komponents, kas sniedz papildus informāciju par bloga saturu.
Sastāvdaļas: Saites uz saistītiem rakstiem, informācija par autoru, publikācijas datums.
Mijiedarbība ar citiem komponentiem: Nav tiešas mijiedarbības ar citiem komponentiem.
        </div>
    );
}

export default Slide4;
