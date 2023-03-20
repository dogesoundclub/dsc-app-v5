import Link from 'next/link';
import { useState, useEffect } from "react";
// import { prefix } from "../config/config";

export default function Hero() {

  //const [loading, setLoading] = useState(true);
  const [dogeSound, setDogeSound] = useState([]);
  const [round, setcontestRound] = useState([]);
  const [winner, setContestWinner] = useState([]);
  const prefix = "";

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
            <div className="flex max-w-[465px] w-full">{/*hi*/}
                <div className="relative w-[300px] h-[300px] left-0 top-[120px] bg-cover" 
                     style={{backgroundImage : `url(${prefix}/img/himaskman660660.png`}}>
                </div>
                <div className="relative w-[150px] h-[300px] left-[15px] top-[120px] bg-cover"
                     style={{backgroundImage : `url(${prefix}/img/dscSlogan.png)`}}>
                </div>
            </div>
            <div className="relative top-[96px]">
            <div className="relative  max-w-[465px] w-full h-10 left-0 top-9 bg-slate-800 border-solid border-4 border-red-700">{/*bestDogeSoundBox*/}
                        <div className="relative w-full top-1 m-auto overflow-x-scroll scrollbar-hide">{/*wrapperDogeSound*/}
                            <p className="dogesoundText w-[1000px] font-neodgm whitespace-nowrap text-white">{congratulation}</p>{/*targetDogeSound*/}
                    </div>
            </div>
            <div className="flex space-x-4">
            <div>                
                <div className="relative w-[150px] h-[150px] left-0 top-12 bg-cover"
                     style={{backgroundImage : `url(${prefix}/img/logodsc400400.jpg)`}}>
                </div>{/*logoDsc*/}
                <div className="relative w-[150px] h-[150px] left-0 top-12 bg-cover"
                     style={{backgroundImage : `url(${prefix}/img/gameBoyDscBigSize.gif)`}}>
                </div>{/*gameboyDsc*/}
            </div>
            <div>
                <a href="https://opensea.io/collection/portal-engine" target='_blank'><div className="relative w-[300px] h-[300px] left-0 top-12 bg-[url('https://storage.googleapis.com/dsc-engine/gif/8680.gif')] bg-cover"></div></a>{/*portalEngine*/}
                <div className="relative w-[300px] h-8 top-4 bg-red-800">{/*portalEngineBox*/}
                    <p className="relative w-[300px] h-8 top-[3px] font-neodgm text-white text-xl text-center">{TEXT_DO_NOT_TOUCH}{/*portalEngineText*/}</p>
            </div>
            </div></div>
            </div>
        </>
    )
}


