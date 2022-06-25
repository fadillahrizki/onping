import React from 'react';
import { FaShoppingCart, FaBell, FaHistory, FaEnvelope, FaUserCircle, FaArrowAltCircleDown } from 'react-icons/fa';
import Link from 'next/link';

export default function Header(){
    return(
        <header className='w-full border text-white bg-red-600 p-0'>
            <nav className='flex mt-2'>
                <ul className='flex gap-[50px] ml-24 text-[13px] grow'>
                    <li>Tentang OnPing</li>
                    <li>Menjadi Mitra</li>
                    <li>Buka OnShop</li>
                    <li>Bantuan</li>
                </ul>
                <p className='text-[13px] mr-5 flex gap-[7px]'><span>{<FaArrowAltCircleDown size={20}/>}</span>Download Aplikasi</p>
            </nav>
            <div className='ml-24 mt-3 flex gap-5'>
                <h1 className='text-[50px]'>
                    <Link href='/'>ONP!NG</Link>
                </h1>
                <form className='mt-4'>   
                    <input type="search" id="default-search" className="p-3 bg-zinc-200 w-[500px] rounded-lg" placeholder="Cari..." required />
                </form>
                <div className='flex mt-6 gap-[70px] ml-20'>
                    {<FaShoppingCart size={30} />}
                    {<FaBell size={30} />}
                    {<FaHistory size={30} />}
                    {<FaEnvelope size={30} />}
                    <span className='flex gap-[10px]'>
                        {<FaUserCircle size={30} />}
                        <p>John_doe</p>
                    </span>     
                </div>
            </div>
        </header>
    )
}