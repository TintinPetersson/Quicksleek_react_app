import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";
import { RevealX } from "../Animations/RevealX";
import { RevealY } from "../Animations/RevealY";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="services" className={`${layout.section} md:mt-36 mt-12`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Fokusera på ditt företag, <br className="sm:block hidden" />
        vi sköter din närvaro online.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Välj oss för skräddarsydda hemsidor som perfekt reflekterar ditt
        varumärke, med blixtsnabb prestanda och sökmotoroptimering som
        överträffar standardlösningarna från WordPress och Wix. <br />
        <br />
        Vår användning av ledande teknologier som React och Next.js garanterar
        unika digitala upplevelser som inte bara engagerar utan också står ut
        från mängden, vilket erbjuder en mer skräddarsydd och professionell
        närvaro online än traditionella webbplatsbyggare.
      </p>
      <RevealY duration={0.8} startPos={30} delay={0.2} once={false}>
        <Button
          styles="hover-animation mt-10 bg-purple-blue-gradient text-white font-normal text-base"
          href={"#footer"}
          name={"Ta kontakt"}
          type={"button"}
        />
      </RevealY>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <RevealX
          key={feature.id}
          duration={0.8}
          startPos={80}
          delay={0.1}
          once={false}
        >
          <FeatureCard {...feature} index={index} />
        </RevealX>
      ))}
    </div>
  </section>
);

export default Business;
