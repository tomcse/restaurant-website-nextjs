import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logoButton}>
          <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
            <Image src="/img/logo.png" alt="--" width="40" height="40" />
          </Link>
        </div>
        <div className={styles.texts}>
          {/* <div className={styles.text}>ORDER NOW!</div> */}
          <div className={styles.text}>
            Plant <br />
            Nation
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link
            href={"/"}
            style={{ textDecoration: "none", color: "white" }}
            scroll
          >
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link
            href={"/#products"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <li className={styles.listItem}>Products</li>
          </Link>
          <Link
            href={"/voucher"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <li className={styles.listItem}>Vouchers</li>
          </Link>
          <Link
            href={"#contact"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <li className={styles.listItem}>Contact</li>
          </Link>
          {/* <Image src="/img/logo.png" alt="--" width="100" height="69" /> */}
          {/* <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li> */}
        </ul>
      </div>
      <div className={styles.item}>
        <Link href={"/cart"} style={{ textDecoration: "none", color: "white" }}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="--" width="35" height="35" />
            <div className={styles.counter}>3</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
