import styles from "../style";
import { arrowUp } from "../../public/assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} get-started-button w-[140px] h-[140px] rounded-full bg-pink-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Ta</span>
        </p>
        <img
          src={arrowUp}
          width={23}
          height={23}
          alt="arrow"
          className="object-contain w-[23px] h-[23px]"
        />
      </div>
      <a href="#footer">
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Kontakt</span>
        </p>
      </a>
    </div>
  </div>
);

export default GetStarted;
