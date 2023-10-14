import styles from '../style';
import { img2 } from '../assets';

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ml-8'>
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>Come,</span> Join {" "}
          <span className='text-white'>&</span> Collaborate
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ml-12'>
          Team <br className='sm:block hidden' /> {" "}
          <span className='text-gradient'>Tech</span> {" "}
        </h1>
      </div>
      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full ml-12'>Build</h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-12`}>
        It is a virtual team-building platform that allows users to collaborate on open-source projects and contribute to the development of innovative solutions in the tech industry.
      </p>

    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={img2} alt="billing" className='w-[80%] h-[80%] relative z-[5] sm:mr-6 md:mr-4 mr-0' />

      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
    </div>

  </section>
);

export default Hero