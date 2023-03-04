import { ExternalLink } from 'react-external-link';
import Link from 'next/link';

export default function Footer() {
    const TEXT_OLD_VERSION = "--> GO TO OLD VERSION";

    return (
        <div className="relative -top-[60px]">
        <ExternalLink href="https://www.instagram.com/dogesoundclub/">
            <div className="relative w-[465px] h-[30px]  text-[15px] text-[#838383] text-center">
                    Unless otherwise stated, contents licensed as CC BY-SA 4.0
            </div>
        </ExternalLink>
        <div className="relative w-[465px] h-[18px] -top-[3px] font-neodgm text-white text-[18px] text-right">
          <a  style={{ textDecoration: "none", color: "#ffffff" }} 
              href='https://v3.dogesound.club'>{TEXT_OLD_VERSION}</a>
        </div>
        </div>
    )
}