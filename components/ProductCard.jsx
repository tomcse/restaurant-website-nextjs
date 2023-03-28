import styles from "../styles/ProductCard.module.css";
import Image from "next/image";

const ProductCard = ({path, title, price, description}) => {
  return (
    <div className={styles.container}>
      <Image src={path} alt="" width={300} height={300} />
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.price}>{`$${price}`}</span>
      <p className={styles.desc}>{description}</p>
    </div>
  );
};

export default ProductCard;
