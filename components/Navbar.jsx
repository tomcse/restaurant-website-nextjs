import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logoButton}>
          <Link href={"/"}>
            <Image src="/img/plant.png" alt="--" width="32" height="32" />
          </Link>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>123 123 123</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/" style={{ textDecoration: "none", color: "white" }}>
              Homepage
            </Link>
          </li>
          <li className={styles.listItem}>jxProducts</li>
          <li className={styles.listItem}>Menu</li>
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            <Image src="/img/plant.png" alt="--" width="160" height="69" />
          </Link>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Link href="/cart" style={{ textDecoration: "none", color: "white" }}>
            <Image src="/img/plant.png" alt="--" width="30" height="30" />
          </Link>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
