import Link from 'next/link';
import { useState, useEffect } from "react";

export default function Hero() {

  //const [loading, setLoading] = useState(true);
  const [dogeSound, setDogeSound] = useState([]);
  const [round, setcontestRound] = useState([]);
  const [winner, setContestWinner] = useState([]);

  const getContestResult = async () => {
  const json = await (await fetch(`https://api.dogesound.club/dogesoundwinner`)).json();
  setDogeSound(json.dogesound);
  setcontestRound(json.round+1);
  setContestWinner(json.winner);

  //setLoading(false);
  };

  useEffect(() => {
    getContestResult();
  }, []);

  const congratulation = "개소리경연 제" + round + "회 우승작 : " + dogeSound + " BY " + winner;
  const TEXT_DO_NOT_TOUCH = "!! DO NOT TOUCH !!";
  //console.log(dogeSound);

    return (
        <>
            <div className="flex w-full h-80">{/*hi*/}
                <div className="relative w-full h-full left-0 top-6 bg-[url('/img/welcome.png')] bg-contain"></div>
            </div>
            <div className="relative w-full h-10 left-0 top-9 bg-slate-800 border-solid border-4 border-red-700">{/*bestDogeSoundBox*/}
                        <div className="relative w-full top-1 m-auto overflow-x-scroll scrollbar-hide">{/*wrapperDogeSound*/}
                            <p className="dogesoundText w-full font-neodgm whitespace-nowrap text-white">{congratulation}</p>{/*targetDogeSound*/}
                    </div>
            </div>
            <div className='flex space-x-16'>
            <div>                
                <div className="relative w-48 h-48 left-0 top-12 bg-[url('/img/logodsc400400.jpg')] bg-cover"></div>{/*logoDsc*/}
                <div className="relative w-48 h-48 left-0 top-12 bg-[url('/img/gameBoyDscBigSize.gif')] bg-cover"></div>{/*gameboyDsc*/}
            </div>
            <div className='w-full'>
                <div className="relative w-full h-full let-0 top-12 bg-[url('https://storage.googleapis.com/dsc-engine/gif/8680.gif')] bg-cover"></div>{/*portalEngine*/}
                <div className="relative w-full h-8 top-4 bg-red-800">{/*portalEngineBox*/}
                    <p className="relative h-8 top-1 font-neodgm text-white text-xl text-center">{TEXT_DO_NOT_TOUCH}{/*portalEngineText*/}</p>
            </div>
            </div></div>
        </>
    )
}


