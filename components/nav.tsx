import Link from 'next/link';
import { ExternalLink } from 'react-external-link';
// import { prefix } from "../config/config";

export default function Nav() {
    const TEXT_HOME = "HOME";
    const TEXT_GREETING = "GREETING";
    const TEXT_FICTION = "FICTION";
    const TEXT_TERM = "TERM";
    const prefix = "";


    return (
        <>
      <nav className='relative w-[465px] h-[70px] -top-[720px] bg-gradient-to-b from-black to-transparent opacity-90 overflow-x-scroll scrollbar-hide'>
              <div className='relative w-[465px] left-0 top-1 border-t border-white'>
                <div className='relative h-2 left-0 top-0 border-l border-white'>
                  <div className='relative w-9 h-2 left-1 top-2 font-neodgm text-white text-[20px]'>
                    <Link href="/">{process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}</Link>
                  </div>
                </div>
                <div className='relative w-0 h-2 left-16 -top-2 border-l border-white'>
                  <div className="relative w-20 h-2 left-1 top-2 font-neodgm text-white text-[20px]">
                    <Link href="/greeting">{TEXT_GREETING}</Link>
                  </div>
                </div>
                <div className='relative w-0 h-2 left-48 -top-4 border-l border-white'>
                  <div className="relative h-2 left-1 top-2 font-neodgm text-white text-right text-[20px]">
                    <Link href="/fiction">{TEXT_FICTION}</Link>
                  </div>
                </div>
              </div>
        </nav>

        <div className="relative w-[465px] -top-[30px] border-t border-[#636363]">
          <div className="relative h-[10px] border-l border-[#636363]">
                <div className="relative w-[50px] h-[20px] left-1 top-2 font-neodgm text-[20px] text-[#636363]">
                  <Link
                      href="/term"
                    >
                      {TEXT_TERM}
                    </Link>
                </div>
                  </div>
          <div className="relative h-[10px] left-[150px] -top-[10px] border-l border-[#636363]">
            <ExternalLink href="https://opensea.io/collection/dogesoundclub-mates">
                <div className ="relative w-[24px] h-[24px] left-[5px] top-4 bg-cover"
                     style={{backgroundImage : `url(${prefix}/img/icon/opensea.png)`}}></div>
            </ExternalLink>
          </div>
          <div className="relative h-[10px] left-[194px] -top-[20px] border-l border-[#636363]">
            <ExternalLink href="https://discord.gg/dogesoundclub">
                <div className ="relative w-[24px] h-[24px] left-[5px] top-4 bg-cover"
                     style={{backgroundImage : `url(${prefix}/img/icon/discord.png)`}}></div>
            </ExternalLink>
          </div>
          <div className="relative h-[10px] left-[238px] -top-[30px] border-l border-[#636363]">
            <ExternalLink href="https://github.com/dogesoundclub/fiction-dogesoundclub">
                <div className="relative w-[24px] h-[24px] left-[5px] top-4 bg-cover"
                     style={{backgroundImage : `url(${prefix}/img/icon/github.png)`}}></div>
            </ExternalLink>
          </div>
          <div className="relative h-[10px] left-[282px] -top-[40px] border-l border-[#636363]">
            <ExternalLink href="https://twitter.com/dogesoundclub">
                <div className="relative w-[24px] h-[24px] left-[5px] top-4 bg-cover"
                     style={{backgroundImage : `url(${prefix}/img/icon/twitter.png)`}}></div>
            </ExternalLink>
          </div>
          <div className="relative h-[10px] left-[326px] -top-[50px] border-l border-[#636363]">
            <ExternalLink href="https://www.youtube.com/@dogesoundclub_kr">
                <div className="relative w-[24px] h-[24px] left-[5px] top-4 bg-cover"
                     style={{backgroundImage : `url(${prefix}/img/icon/youtube.png)`}}></div>
                </ExternalLink>
          </div>
          <div className="relative h-[10px] left-[370px] -top-[60px] border-l border-[#636363]">
            <ExternalLink href="https://t.me/dogesoundclub">
                <div className="relative w-[24px] h-[24px] left-[5px] top-4 bg-cover"
                     style={{backgroundImage : `url(${prefix}/img/icon/telegram.png)`}}></div>
                </ExternalLink>
          </div>
          <div className="relative h-[10px] left-[413px] -top-[70px] border-l border-[#636363]">
            <ExternalLink href="https://www.instagram.com/dogesoundclub/">
                <div className="relative w-[24px] h-[24px] left-[5px] top-4 bg-cover"
                     style={{backgroundImage : `url(${prefix}/img/icon/instagram.png)`}}></div>
                </ExternalLink>
          </div>
      </div>
        </>
    )
}