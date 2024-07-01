import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const handleClick = (link: string) => {
    const url = /^https?:\/\//i.test(link) ? link : `http://${link}`;
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      alert("Failed to open new tab. Please allow popups for this website.");
    }
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          一緒につながり、 <span className="text-purple">素晴らしい</span>
          ものを作りましょう!
        </h1>
        <a href="mailto:ilham.kahar130899@gmail.com">
          <MagicButton
            title="一緒に連絡しましょう"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024. Made by Aceternity UI and ShadcnUI
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              onClick={() => handleClick(info.link)}
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
