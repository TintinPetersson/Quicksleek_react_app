import { stats } from "../constants";
import styles from "../style";
import { RevealY } from "../Animations/RevealY";

const Stats = () => (
  <RevealY duration={0.7} startPos={20} delay={0.1} once={false}>
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[30px] text-[20px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[12px] xs:leading-[26px] leading-[15px] text-gradient uppercase ml-3 mt-1">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  </RevealY>
);

export default Stats;
