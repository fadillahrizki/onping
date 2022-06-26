import Link from "next/link";
import AppStore  from "../public/Appstore.svg";
import Playstore from "../public/Playstore.svg";
import Image from "next/image";

export default function Login() {
  return (
    <div className="card mt-20 ml-20 border border-2 rounded-lg bg-white text-black block h-[420px]">
        <div className="p-10 px-12">
            <h1 className="text-[30px] font-semibold text-red-600">Log in</h1>
            <form className="grid grid-rows-2 ">
                <div className="py-4">
                    <input type="text" placeholder="Email/Username" className="placeholder-style border border-3 rounded-lg py-3 w-[450px]"/>
                </div>
                <div className="py-4">
                    <input type="text" placeholder="Password" className="placeholder-style border border-3 rounded-lg py-3 w-[450px]"/>
                </div>
                <button className="bg-red-600 p-2 rounded-lg text-white font-bold mt-5">Login</button>
            </form>
            <p className="text-sm text-blue-700 text-center mt-12">Lupa Password?</p>
        </div>
        <div className="border bg-white rounded-lg text-center p-5 mt-10">
            <p>Belum Punya Akun? <span className="text-red-600 font-bold"><Link href='/'>Daftar Sekarang</Link></span></p>
        </div>
        <div className="ml-14 mt-5 w-[450px]">
            <p className="text-white font-semibold text-center">Download Aplikasinya Sekarang!</p>
            <div className="flex justify-between">
                <Image src={AppStore} width={200}/>
                <Image src={Playstore} width={200}/>
            </div>
        </div>
    </div>
  )
}