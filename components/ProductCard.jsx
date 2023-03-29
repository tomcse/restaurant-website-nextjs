import styles from "../styles/ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ path, title, price, description, index }) => {
  return (
    <div className={styles.container}>
      <Link
        href={`/product/${index}`}
        style={{ textDecoration: "none", margin: "0" }}
        className={styles.childContainer}
      >
        <Image src={path} alt="" width={300} height={300} />
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.price}>{`$${price}`}</span>
        <p className={styles.desc}>{description}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
