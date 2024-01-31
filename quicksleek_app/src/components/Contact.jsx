import styles from "../style";
import { aboutCards } from "../constants";
import TeamCard from "./TeamCard";
import { RevealY } from "../Animations/RevealY";

const Contact = () => (
  <section
    id="contact"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    <div className="w-full flex justify-between items-center md:flew-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        Möt gänget.
        <br className="sm:block hidden" />
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Vi är en trio av passionerade halländska utvecklare, förenade i vårt
          åtagande till kodning och de senaste teknologierna. Vår webbplats
          visar vår expertis, erbjuder en inblick i vårt engagemang och en kanal
          för att ansluta med kunder och arbetsgivare.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {aboutCards.map((card) => (
        <RevealY
          key={card.id}
          duration={0.7}
          startPos={20}
          delay={0.3}
          once={false}
        >
          <TeamCard {...card} />
        </RevealY>
      ))}
    </div>
  </section>
);

export default Contact;
