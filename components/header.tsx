// import {ReactNode} from 'react';

// interface LayoutProps {
//     children: ReactNode;
// }

import Link from 'next/link';

export default function Header() {
    const TEXT_HOME = "HOME";
    const TEXT_GREETING = "GREETING";
    const TEXT_FICTION = "FICTION";
    const TEXT_TERM = "TERM";

    return (
        <>
      <nav className='relative w-80 h-10 left-0 top-3 bg-gradient-to-t from-black to-transparent opacity-90 overflow-x-scroll scrollbar-hide'> {/*NavBox*/}
              <div className='relative w-465 left-0 top-1 border-t border-white'> {/*NavlineMain*/}
                <div className='relative w-0 h-2 left-0 top-0 border-l border-white'>{/*<NavLineBranch1*/}
                  <div className='relative w-9 h-2 left-1 top-1 font-neodgm text-white'> {/*NavLineBranchText1*/}
                    <Link href="/">{TEXT_HOME}</Link>
                  </div>
                </div>
                <div className='relative w-0 h-2 left-16 -top-2 border-l border-white'> {/*NavLineBranch2*/}
                  <div className="relative w-20 h-2 left-1 top-1 font-neodgm text-white"> {/*NavLineBranchText2*/}
                    <Link href="/Greeting">{TEXT_GREETING}</Link>
                  </div>
                </div>
                <div className='relative w-0 h-2 left-48 -top-4 border-l border-white'> {/*NavLineBranch3*/}
                  <div className="relative h-2 left-1 top-1 font-neodgm text-white text-right"> {/*NavLineBranchText3*/}
                    <Link href="/Fiction">{TEXT_FICTION}</Link>
                  </div>
                </div>
              </div>
        </nav>
        </>
    )
}