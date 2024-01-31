import styles, { layout } from "../style";
import {
  multi_screens,
  github_logo_long,
  linkedin_logo_long,
} from "../../public/assets";
import { RevealX } from "../Animations/RevealX";

const Projects = () => (
  <section id="projects" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <RevealX duration={0.8} startPos={-80} delay={0.1} once={false}>
        <img
          src={multi_screens}
          alt="projects"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </RevealX>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Alltid anpassat efter <br className="sm:block hidden" />
        alla skärmstorlekar.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Upptäck våra tidigare webbplatsprojekt, som återspeglar vårt engagemang
        för högkvalitativ kodning och innovativa webblösningar.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a
          className="flex"
          href={"https://github.com/Quicksleek"}
          target="_blank"
        >
          <img
            src={github_logo_long}
            alt="github_logo"
            className="object-contain mr-5 cursor-pointer hover:opacity-65 w-[120px] h-[120px]"
          />
        </a>

        <a
          className="flex"
          href={"https://www.linkedin.com/company/quicksleek"}
          target="_blank"
        >
          <img
            src={linkedin_logo_long}
            alt="linkedin_logo"
            className="object-contain cursor-pointer hover:opacity-65 w-[120px] h-[120px]"
          />
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
