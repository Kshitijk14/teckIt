import { group2 } from "../assets";
import styles, { layout } from "../style";
import Button3 from "./Button3";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>

      <h2 className={styles.heading2}>
        Create Teams
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our platform allows you to easily create a team and invite members to collaborate on your project. With a diverse community of tech enthusiasts, you can find the right people with the right skills to bring your project to life.
      </p>

      <Button3 styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={group2} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal