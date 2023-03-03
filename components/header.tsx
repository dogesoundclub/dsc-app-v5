import Link from 'next/link';

export default function Header() {
    const TEXT_HOME = "HOME";
    const TEXT_GREETING = "GREETING";
    const TEXT_FICTION = "FICTION";
    const TEXT_TERM = "TERM";

    return (
        <>
      <nav className='relative w-full h-10 left-0 top-3 bg-gradient-to-t from-black to-transparent opacity-90 overflow-x-scroll scrollbar-hide'>
              <div className='relative w-full left-0 top-1 border-t border-white'>
                <div className='relative w-0 h-2 left-0 top-0 border-l border-white'>
                  <div className='relative w-9 h-2 left-1 top-2 font-neodgm text-white'>
                    <Link href="/">{TEXT_HOME}</Link>
                  </div>
                </div>
                <div className='relative w-0 h-2 left-16 -top-2 border-l border-white'>
                  <div className="relative w-20 h-2 left-1 top-2 font-neodgm text-white">
                    <Link href="/Greeting">{TEXT_GREETING}</Link>
                  </div>
                </div>
                <div className='relative w-0 h-2 left-48 -top-4 border-l border-white'>
                  <div className="relative h-2 left-1 top-2 font-neodgm text-white text-right">
                    <Link href="/Fiction">{TEXT_FICTION}</Link>
                  </div>
                </div>
              </div>
        </nav>
        </>
    )
}