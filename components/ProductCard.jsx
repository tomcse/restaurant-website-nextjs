import styles from "../styles/ProductCard.module.css";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/bird.png" alt="" width={500} height={500} />
      <h1 className={styles.title}>template-title</h1>
      <span className={styles.price}>$10.50</span>
      <p className={styles.desc}>description of food</p>
    </div>
  );
};

export default ProductCard;
