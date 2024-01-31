import { logo } from "../../public/assets";
import { socialMedia } from "../constants";
import styles from "../style";

const Footer = () => (
  <section
    id="footer"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <a href="#navbar">
          <img
            src={logo}
            alt="hoobank"
            className="object-contain w-[133px] h-[36.14px]"
          />
        </a>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 Quicksleek. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`object-contain cursor-pointer hover:opacity-65 w-[21px] h-[21px] ${
              index !== socialMedia.length - 1 ? "mr-4" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);
export default Footer;
