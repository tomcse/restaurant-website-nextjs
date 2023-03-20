import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody style={{ textAlign: "center" }}>
            <tr className={styles.tr}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/plant.png"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>foodNAME</span>
              </td>
              <td>
                <span className={styles.extra}>
                  Double Ingredient, Add spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/plant.png"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>foodNAME</span>
              </td>
              <td>
                <span className={styles.extra}>
                  Double Ingredient, Add spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/plant.png"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>foodNAME</span>
              </td>
              <td>
                <span className={styles.extra}>
                  Double Ingredient, Add spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/plant.png"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>foodNAME</span>
              </td>
              <td>
                <span className={styles.extra}>
                  Double Ingredient, Add spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper} style={{ borderRadius: "6px" }}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$00.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>Checkout Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
