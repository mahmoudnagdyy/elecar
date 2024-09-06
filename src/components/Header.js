import { useEffect, useState } from 'react';
import '../css/header.css'

import logo from '../imgs/favicon.png'

import { PiListBold } from "react-icons/pi";
import { RiCloseLargeFill } from "react-icons/ri";

function Header() {

    const [listState, setListState] = useState(false)
    const [activeLink, setActiveLink] = useState(1);

    const headerLink = [
        { name: 'home', href: '#', key: 1 },
        { name: 'about', href: '#about', key: 2 },
        { name: 'popular', href: '#popular', key: 3 },
        { name: 'featured', href: '#featured', key: 4 },
    ]

    return (
        <header className='bg-black flex flex-row items-center justify-around w-full h-24 fixed top-0 left-0 z-50'>
            <h1 className='flex flex-row items-center justify-center capitalize font-bold text-white cursor-default'>
                <img className='mr-1 w-5' src={logo} />
                elecar
            </h1>

            <div className='flex flex-row header_links'>
                {
                    headerLink.map((link) => {
                        return <a id={link.id} className='text-white mr-16 capitalize font-semibold hover:text-sky-600 duration-500 header_link' key={link.key} href={link.href}>{link.name}</a>
                    })
                }
            </div>



            <button className='text-white text-3xl list_icon' onClick={() => setListState(!listState)}>
                {
                    listState ? <RiCloseLargeFill /> : <PiListBold />
                }
            </button>
            <div className={listState ? 'flex flex-col fixed links_list pt-5 pl-3 show_list duration-500 z-50' : 'flex flex-col fixed z-50 links_list pt-5 pl-3 hide_list duration-500'}>
                {
                    headerLink.map((link) => {
                        return <a className='text-white mr-16 py-4 px-1 capitalize font-semibold hover:bg-sky-600 hover:px-2 duration-500' key={link.key} href={link.href}>{link.name}</a>
                    })
                }
            </div>

        </header>
    )
}

export default Header;