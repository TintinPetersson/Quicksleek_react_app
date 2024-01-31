import styles, { layout } from "../style";
import Button from "./Button";
import { RevealX } from "../Animations/RevealX";
import { RevealY } from "../Animations/RevealY";

const CTA = () => (
  <section id="contact" className={`${layout.section} relative`}>
    <div className="absolute z-[0] w-[40%] h-[40%] -left-[40%] rounded-full pink__gradient" />

    <div className={`${layout.sectionInfo} flex-col`}>
      <RevealX duration={0.7} startPos={-20} delay={0} once={false}>
        <h2 className={styles.heading2}>Kontakta oss.</h2>
      </RevealX>
      <RevealX duration={1.2} startPos={20} delay={0.2} once={false}>
        <p className={`pt-5 ${styles.paragraph}`}>
          Tack för att du tog dig tid att utforska vår hemsida. Hos oss värderar
          vi varje möjlighet till kontakt och ser fram emot att höra från dig.
          Oavsett om du har frågor, idéer eller bara vill säga hej, är vårt team
          redo att lyssna. <br />
          <br /> Vi tror på att skapa starka relationer och ser varje
          interaktion som en möjlighet att fördjupa vårt samarbete. Så, tveka
          inte att skicka ett meddelande genom att fylla i formuläret. Vi är
          redo att göra din upplevelse med oss minnesvärd. <br />
          <br />
          Tack för att du väljer oss!
        </p>
      </RevealX>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <form action="#" className={`font-poppins space-y-8 pt-8 font-normal`}>
        <div className="flex flex-wrap">
          {/* Name Input */}
          <div className="relative mr-3">
            <RevealX duration={0.9} startPos={30} once={false} delay={0}>
              <input
                type="text"
                id="name"
                className="peer bg-transparent border-b-2 border-gray-300 text-dimWhite focus:text-white text-sm p-2.5 focus:border-primary-500 focus:outline-none block w-full"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-dimWhite text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Namn
              </label>
            </RevealX>
          </div>

          {/* Company Input */}
          <div className="relative flex-1">
            <RevealX duration={0.9} startPos={30} once={false} delay={0.2}>
              <input
                type="text"
                id="company"
                className="peer bg-transparent border-b-2 border-gray-300 text-dimWhite focus:text-white text-sm p-2.5 focus:border-primary-500 focus:outline-none block w-full"
                placeholder=" "
                required
              />
              <label
                htmlFor="company"
                className="absolute left-0 -top-3.5 text-dimWhite text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Företag
              </label>
            </RevealX>
          </div>
        </div>

        {/* Email Input */}
        <div className="relative">
          <RevealX duration={0.9} startPos={30} once={false} delay={0.4}>
            <input
              type="email"
              id="email"
              className="peer bg-transparent border-b-2 border-gray-300 text-dimWhite focus:text-white text-sm p-2.5 focus:border-primary-500 focus:outline-none block w-full"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Email
            </label>
          </RevealX>
        </div>

        {/* Subject Input */}
        <div className="relative">
          <RevealX duration={0.9} startPos={30} once={false} delay={0.6}>
            <input
              type="text"
              id="subject"
              className="peer bg-transparent border-b-2 border-gray-300 text-dimWhite focus:text-white text-sm p-2.5 focus:border-primary-500 focus:outline-none block w-full"
              placeholder=" "
              required
            />
            <label
              htmlFor="subject"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Ämne
            </label>
          </RevealX>
        </div>

        {/* Message Textarea */}
        <div className="relative">
          <RevealX duration={0.9} startPos={30} once={false} delay={0.8}>
            <textarea
              id="message"
              rows="6"
              className="resize-none peer bg-transparent border-b-2 border-gray-300 text-dimWhite focus:text-white text-sm p-2.5 focus:border-primary-500 focus:outline-none block w-full"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Meddelande
            </label>
          </RevealX>
        </div>

        {/* Submit Button - Assuming Button is a custom component */}
        <RevealY duration={0.9} startPos={15} delay={1.6} once={false}>
          <Button
            type="submit"
            href="#footer"
            name="Skicka"
            styles="hover-animation bg-purple-blue-gradient pr-8 pt-3 pb-3 pl-8 text-white font-semibold text-base w-full text-center"
          />
        </RevealY>
      </form>
    </div>
  </section>
);

export default CTA;
