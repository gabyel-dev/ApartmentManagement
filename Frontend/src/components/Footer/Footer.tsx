import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const fb = <FontAwesomeIcon icon={faSquareFacebook} />;
const ig = <FontAwesomeIcon icon={faInstagram} />;
const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;

export default function Footer() {
  return (
    <div className="md:h-[300px] bg-[var(--dark-green)] md:px-[3vw] md:py-12">
      <div className="flex flex-col">
        <div className="flex gap-4 items-center">
          <img src="/logo.png" alt="logo" className="w-25 h-25" />
          <div className="flex flex-col items-end text-white border-l-1 border-white pl-4">
            <h1 className="text-6xl title">AptEase</h1>
            <p className="text-sm font leading-2 tracking-[5px] font-extralight">
              PROPERTY
            </p>
          </div>
        </div>
        {/* socials */}
        <div className="text-4xl text-white flex gap-3 pt-4 pl-2">
          <a href="#">{linkedIn}</a>
          <a href="#">{fb}</a>
          <a href="#">{ig}</a>
        </div>
      </div>
    </div>
  );
}
