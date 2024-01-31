import styles, { layout } from "../style";
import { workflow } from "../../public/assets";
import Button from "./Button";
import { RevealY } from "../Animations/RevealY";
import { RevealX } from "../Animations/RevealX";

const About = () => (
  <section id="about" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Så här jobbar <br className="sm:block hidden" />
        vårt team.
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Vi inleder alltid våra projekt med ett personligt möte för att förstå
        era visioner och behov. Därefter omsätter vi era idéer till
        skräddarsydda designförslag i Figma, innan vi realiserar dem med
        precision i Next.js och React, förstärkt med elegansen av Tailwind CSS.
        Alternativt skräddarsyr en backend efter era behov.
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

    <div className={layout.sectionImg}>
      <RevealX duration={0.8} startPos={80} delay={0.1} once={false}>
        <img src={workflow} alt="card" width={"100%"} height={"100%"} />
      </RevealX>
    </div>
  </section>
);
export default About;
