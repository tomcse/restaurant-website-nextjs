import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const images = ["/img/bird.png", "/img/plant.png", "/img/cat.png"];

  function test() {
    console.log("svbjufv");
    return 0;
  }

  const [index, setIndex] = useState(() => {
    return 0;
  });
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/img/plant.png"
          alt="arrow-left"
          fill
          sizes=""
          style={{ objectFit: "contain" }}
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" fill style={{ objectFit: "contain" }} />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/plant.png"
          alt="arrow-right"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Featured;
