import logo from '../imgs/favicon.png'

import '../css/footer.css'


import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Footer() {
    return (
        <footer className="flex flex-row flex-wrap justify-evenly w-full bg-black py-24">

            <div className="flex flex-col">
                <h1 className='flex flex-row items-center capitalize font-bold text-white cursor-default text-2xl'>
                    <img className='mr-1 w-8' src={logo} />
                    elecar
                </h1>

                <p className='logo_p mt-5'>we offer the best electric cars of<br />the most recognised brands in <br /> the world.</p>
            </div>

            <div className="flex flex-col company_links">
                <h1 className='flex flex-row items-center capitalize font-bold text-white text-2xl cursor-default mb-5'>company</h1>
                <a className='capitalize hover:text-white duration-300' href=''>about</a>
                <a className='capitalize mt-4 hover:text-white duration-300' href=''>cars</a>
                <a className='capitalize mt-4 hover:text-white duration-300' href=''>history</a>
                <a className='capitalize mt-4 hover:text-white duration-300' href=''>shop</a>
            </div>


            <div className="flex flex-col company_links">
                <h1 className='flex flex-row items-center capitalize font-bold text-white text-2xl cursor-default mb-5'>information</h1>
                <a className='capitalize hover:text-white duration-300' href=''>request a quote</a>
                <a className='capitalize mt-4 hover:text-white duration-300' href=''>find a dealer</a>
                <a className='capitalize mt-4 hover:text-white duration-300' href=''>contact us</a>
                <a className='capitalize mt-4 hover:text-white duration-300' href=''>services</a>
            </div>


            <div className="flex flex-col">
                <h1 className='flex flex-row items-center capitalize font-bold text-white text-2xl cursor-default mb-5'>follow us</h1>
                <div className='flex flex-row justify-between w-full'>
                    <a className='capitalize text-2xl text-white' href=''><FaFacebookF /></a>
                    <a className='capitalize text-2xl text-white' href=''><FaInstagram /></a>
                    <a className='capitalize text-2xl text-white' href=''><FaTwitter /></a>
                </div>
            </div>

        </footer>
    )
}

export default Footer;