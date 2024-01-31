import { frameworks } from "../constants";
import styles from "../style";

const Frameworks = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {frameworks.map((framework) => (
        <div
          key={framework.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
        >
          <img
            src={framework.logo}
            alt="framework"
            height="h-auto"
            className="sm:w-[250px] object-contain opacity-20 w-[100px] h-[auto]"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Frameworks;
