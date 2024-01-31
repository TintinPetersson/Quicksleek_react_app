import styles from "../style";
import { rocket_hero } from "../../public/assets";
import GetStarted from "./GetStarted";
import { RevealX } from "../Animations/RevealX";
import { RevealY } from "../Animations/RevealY";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <RevealY startPos={30} duration={2} delay={1.7} once={true}>
        <div className="flex flex-row items-center py-[6px] bg-discount-gradient2 rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Hej!&nbsp;</span>Det är bara att&nbsp;
            <a className="text-white" href="#footer">
              maila&nbsp;
            </a>
            <span className="pr-4">oss med eventuella frågor!</span>
          </p>
        </div>
      </RevealY>

      <div className="flex flex-col justify-between w-full">
        <RevealX delay={0.1} duration={1.7} startPos={-80} once={false}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Vi får din <br className="sm:block hidden" />{" "}
          </h1>
        </RevealX>
        <div className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          <RevealX delay={0.1} duration={2} startPos={120} once={false}>
            <span className="animated-text">Verksamhet</span>
          </RevealX>
        </div>
        <div className="ss:flex hidden md:mr-4 mr-0">
          {/* <GetStarted /> */}
        </div>
      </div>
      <RevealX delay={0.1} duration={1.7} startPos={50} once={false}>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          att komma till liv.
        </h1>
      </RevealX>
      <RevealY delay={2} duration={2} startPos={-25} once={true}>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lyft ditt företag med en modern, snabb och snygg webbplats. Din
          vision, vår expertis.
        </p>
      </RevealY>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <RevealY duration={1.5} startPos={30} delay={0.7} once={false}>
        <img
          src={rocket_hero}
          alt="billing"
          className="relative z-[5] hero-image w-[100%] h-[100%]"
        />
      </RevealY>

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
