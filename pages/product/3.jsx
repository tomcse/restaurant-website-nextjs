import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0);

  const product1 = {
    id: 3,
    img: "/img/plant.png",
    name: "Pothos",
    price: [3, 6, 10],
    desc: "Pothos is an evergreen plant with thick, waxy, green, heart-shaped leaves with splashes of yellow. As a houseplant, it is commonly grown as a hanging plant. Pothos can climb by means of aerial roots, and wild or cultivated plants grown outdoors can reach enormous heights using tall trees as support. In addition, the leaves of outdoor plants grow many times larger than indoor plants. ‘Marble Queen,’ with white variegations of greater extent than in the species, and ‘Tricolor,’ with shades of green, deep yellow, and creamy white, are popular varieties. The plant is easily propagated from cuttings and rarely, if ever, flowers.",
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
