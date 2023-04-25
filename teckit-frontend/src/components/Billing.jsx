import { group1 } from "../assets";
import styles, { layout } from '../style';
import Button2 from './Button2';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={group1} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Join Teams</h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Join our virtual teams to work on real-world projects with a community of tech enthusiasts from diverse backgrounds. Build your skills, expand your network, and contribute to meaningful projects. Sign up now!
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer" />
      </div> */}

      <div className="sm:mt-10 mt-4">
        <Button2 style="mt-10" />
      </div>

    </div>
  </section>
);

export default Billing