import Link from 'next/link';
import { useState, useEffect } from "react";
import Maskman from "@img/himaskman660660.png";


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
        <div className='relative w-80 h-80 left-0 -top-30'>{/*hi*/}
            {/* <div className="relative w-80 h-20 left-0 top-100 bg-himaskman660660">aldskjflaksjdfljasldkfj</div> */}
            <div className="relative w-80 h-20 left-0 top-100 bg-himaskman660660">aldskjflaksjdfljasldkfj</div>
                <div className=""></div>{/*sloganBox*/}
                
                <div className=""></div>{/*logoDsc*/}
                <div className=""></div>{/*gameboyDsc*/}
                <div className="">{/*portalEngine*/}
                    <div className="">{/*portalEngineBox*/}
                        <div className="">{TEXT_DO_NOT_TOUCH}</div>{/*portalEngineText*/}
                    </div>
                </div>
            
                <div className="">{/*bestDogeSoundBox*/}
                    <div className=""><div className=""><p className="">{congratulation}</p></div></div>{/*bestDogeSoundText*/}{/*wrapperDogeSound*/}{/*targetDogeSound*/}
                </div>
        </div>
        </>
    )
}


