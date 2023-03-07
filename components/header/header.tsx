import { useSession, signIn, signOut } from "next-auth/react"

export default function Header() {
    const { data: session } = useSession();
    if (session) {
      return (
        <>
          <div className="max-w-[465px] w-full relative -top-[876px] flex flex-col items-end text-white">
            <div className="relative max-w-[465px] w-full left-[180px] top-[8px] text-black"></div>
            <button 
                className="relative -top-[24px] bg-[#E1C500] text-black hover:bg-transparent text-white font-semibold hover:text-white py-2 px-4 border border-[#BFC500] hover:border-[#E1C500]"
                onClick={() => signOut()}>{session.user!.email}
            </button>
          </div>
        </>
    )
    }
    return (
      <>
        <div className="max-w-[465px] w-full relative -top-[876px] flex flex-col items-end text-white">
          <div className="relative w-[120px] -left-[75px] top-[8px] text-black"></div>
          <button 
              className="relative -top-[24px] bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent"
              onClick={() => signIn()}>LOGIN</button>
        </div>
      </>
    )
    
}