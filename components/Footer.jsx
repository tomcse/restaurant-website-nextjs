import styles from "../styles/Footer.module.css";
import Image from "next/legacy/image";

const Footer = () => (
  <div className={styles.container}>
    <div className={styles.item}>
      <Image
        src="/img/cat.png"
        alt=""
        layout="fill"
        style={{ objectFit: "contain" }}
      />
    </div>
    <div className={styles.item}>
      <div className={styles.card}>
        <h2 className={styles.motto}>FILL IN A RANDOM MOTTO.</h2>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>COME VISIT US AT</h1>
        <p className={styles.text}>
          63 Robinson Rd
          <br />
          Singapore 068894
          <br />
          (+65) 66732312
        </p>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>WORKING HOURS</h1>
        <p className={styles.text}>
          MONDAY - FRIDAY
          <br />
          09:00 - 22:00
        </p>
        <p className={styles.text}>
          SATURDAY & SUNDDAY
          <br />
          10:30 - 15:30
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
