import { quotes } from "../../public/assets";
import {
  socialMedia as defaultSocialMedia,
  socialMediaSet1,
  socialMediaSet2,
  socialMediaSet3,
} from "../constants";

const TeamCard = ({ content, name, img }) => {
  let socialMediaIcons = defaultSocialMedia;

  const socialMediaSets = {
    "Mattias Sikmar": socialMediaSet1,
    "Jonathan Kullman": socialMediaSet2,
    "Tintin Petersson": socialMediaSet3,
  };

  if (socialMediaSets[name]) {
    socialMediaIcons = socialMediaSets[name];
  }

  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] w-[420px] h-[500px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="double_quotes"
        className="object-contain w-[42px] h-[27px]"
      />
      <p className="font-poppins font-normal text-[16px] leading-[32px] text-dimWhite my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[75px] h-[75px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <div className="flex flex-row md:mt-1 mt-2">
            {socialMediaIcons.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer hover:opacity-65 ${
                  index !== socialMediaIcons.length - 1 ? "mr-3" : "mr-0"
                }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
