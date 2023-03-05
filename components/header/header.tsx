// import { cdnUrl, identify } from "@utils/discordAPI";
import { identify } from "@utils/discordAPI";
import { useUser } from "@hooks/useUser";
import { useRouter } from "next/router";
import HeaderItem from "./headerItem";
import { IoIosArrowDown } from "react-icons/io";

import { useSession, signIn, signOut } from "next-auth/react"

export default function Header() {
    // const hook = useUser();
    const router = useRouter();
    const { data: session } = useSession();
    if (session) {
      return (
        <>
            <div className="w-[465px] relative -top-[990px] flex flex-col items-end">
            Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>

            {/* {!hook.login ? (
              <HeaderItem
                title="로그인"
                onClick={() => {
                  location.href = identify;
                }}
                className="bg-[#0176ff]"
              />
            ) : (
              <div
                className="flex flex-row items-center cursor-pointer relative"
                id="profile"
              >
                <div className=" bg-slate-500 rounded-full w-[40px] h-[40px] mr-3 overflow-hidden ">
                  <img src={hook.userInfo?.avatar} alt="profile" />
                </div>
                <IoIosArrowDown size={25} />
                <div
                  className="absolute right-0 top-0 w-[300px] min-h-[120px]"
                  id="box"
                >
                  <div className="bg-[#181c24] w-full min-h-[120px] mt-[60px] rounded-lg px-7 py-5 gap-4 flex flex-col text-lg text-[#8e909c]">
                    <h1 className="text-white">DSC</h1>
                    <h1
                      className="hover:text-[#f7c922]"
                      onClick={() => router.push("dashboard")}
                    >
                      시작하기
                    </h1>
                    <div className="h-[1px] w-full bg-[#8e909c]" />
                    <h1
                      className="hover:text-[#f7c922]"
                      onClick={() => hook.logout()}
                    >
                      로그아웃
                    </h1>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </>
    )
    }
    return (
      <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      </>
    )
    
}