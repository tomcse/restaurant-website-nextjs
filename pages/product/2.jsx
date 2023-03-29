import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0);

  const product1 = {
    id: 2,
    img: "/img/peacelily.png",
    name: "Peace Lily ",
    price: [10, 15, 25],
    desc: "Peace lilies (Spathiphyllum species) are attractive indoor foliage plants that produce showy white flowers. They are not true lilies but a member of the Araceae family, which also includes caladiums, elephant ears, anthuriums, and callas. They are one of the few foliage plants that will flower in low light. Peace lilies are easy to grow, making them a popular choice for houseplants and one of the top selections of air-purifying indoor plants. Do be aware that calcium oxalate crystals are present in the plant cells and, if consumed, can cause toxicity in pets and children. The most common side effect is burning of the mouth, throat, and tongue.",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={product1.img}
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product1.name}</h1>
        <span className={styles.price}>${product1.price[size]}</span>
        <p className={styles.desc}>{product1.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/plant.png" alt="" fill />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/plant.png" alt="" fill />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/plant.png" alt="" fill />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        {/* <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Add Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className={styles.checkbox}
            />
            <label htmlFor="garlic">Add Garlic Sauce</label>
          </div>
        </div> */}
        <div className={styles.add}>
          <input
            type="number"
            defaultValue={1}
            className={styles.quantity}
            style={{ borderRadius: "8px", fontSize: "16px" }}
          />
          <button className={styles.button} style={{ borderRadius: "8px" }}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
