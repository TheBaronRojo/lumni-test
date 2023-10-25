import styles from "./LoginPageDecorationSection.module.css";
import ImagePartASrc from "public/images/LoginPage/Logo_part_a.png";
import ImagePartBSrc from "public/images/LoginPage/Logo_part_b.png";
import ImagePartCSrc from "public/images/LoginPage/Logo_part_c.png";
import Image from "next/image";

const LoginPageDecorationSection = () => {
  return (
    <section className={styles.root}>
      <div className={styles.logoPartA}>
        <Image src={ImagePartASrc} alt=""/>
      </div>
      <div className={styles.logoPartB}>
        <Image src={ImagePartBSrc} alt=""/>
      </div>
      <div className={styles.logoPartC}>
        <Image src={ImagePartCSrc} alt=""/>
      </div>
      <h1>
        ¡Bienvenido de nuevo!
      </h1>
      <p>
        Es agradable tenerte otra vez por aquí.
      </p>
    </section>
  )
};

export default LoginPageDecorationSection;
