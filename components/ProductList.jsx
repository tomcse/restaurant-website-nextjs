import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Available Products</h1>
      {/* <p className={styles.desc}>Brief description of products.</p> */}
      <div className={styles.wrapper}>
        <ProductCard path='/img/monstera.png' title='Monstera Deliciosa' price='40.00' description='Also called the Swiss cheese plant, easy to care form weekly waterings, indoor friendly.'/>
        <ProductCard path='/img/peacelily.png' title='Peace Lily' price='25.00' description='Peace Lily is easy to care for, weekly waterings, indoor friendly.'/>
        <ProductCard path='/img/plant.png' title='Pothos' price='10.00' description='Pothos plant is easy to care for, can be fully submerged, indoor friendly.'/>
        <ProductCard path='/img/snakeplant.png' title='Snake Plant' price='15.00' description='Snake plant is easy to care for, bi-weekly waterings, indoor friendly.'/>
        <ProductCard path='/img/spiderplant.png' title='Spider Plant' price='10.00' description='Spider plant is easy to carefor, weekly waterings, indoor friendly.'/>
        <ProductCard path='/img/zzplant.png' title='ZZ Plant' price='30.00' description='ZZ plant is easy to care for, slow growing, bi-weekly waterings, indoor and outdoor friendly.'/>
      </div>
    </div>
  );
};

export default ProductList;
