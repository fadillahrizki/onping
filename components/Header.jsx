import React, { Fragment } from 'react';
import { FaShoppingCart, FaBell, FaHistory, FaEnvelope, FaUserCircle, FaArrowAltCircleDown } from 'react-icons/fa';
import Head from 'next/head'
import Link from 'next/link';

export default function Header({title}){
    return(
        <Fragment>
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Girassol&display=swap" rel="stylesheet" />
            <title>{title}</title>
            </Head>
                <header className='w-full text-white bg-red-600 py-2 px-24'>
                    <nav className='flex'>
                        <ul className='flex gap-[50px] text-[13px] grow'>
                            <li>Tentang OnPing</li>
                            <li>Menjadi Mitra</li>
                            <li>Buka OnShop</li>
                            <li>Bantuan</li>
                        </ul>
                        <p className='text-[13px] flex gap-[7px]'><span>{<FaArrowAltCircleDown size={20}/>}</span>Download Aplikasi</p>
                    </nav>
                    <div className='mt-3 flex justify-between gap-5'>
                        <h1 className='title text-[50px] font-Girassol'>
                            <Link href='/'>ONP!NG</Link>
                        </h1>
                        <form className='mt-4'>   
                            <input type="search" id="default-search" className="p-3 bg-zinc-200 w-[500px] rounded-lg text-black" placeholder="Cari..." required />
                        </form>
                        <div className='flex mt-6 gap-[70px] ml-10'>
                            <FaShoppingCart size={30} />
                            <FaBell size={30} />
                            <FaHistory size={30} />
                            <FaEnvelope size={30} />
                            <span className='flex gap-[10px]'>
                                <FaUserCircle size={30} />
                                <p>John_doe</p>
                            </span>     
                        </div>
                    </div>
                </header>
          
            </Fragment>
    )
}
