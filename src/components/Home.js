import '../css/home.css'

import home from '../imgs/home.png'

import { MdElectricBolt } from "react-icons/md";
import { RiTempColdLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";


function Home() {
    return (
        <section className="flex flex-col items-center justify-center bg-black w-full pt-32">
            <h1 className="text-white capitalize font-semibold text-4xl text-center">choose the best car</h1>
            <p className='capitalize text-white font-semibold text-lg mt-5 text-center'>porche mission e</p>
            <p className='text-white capitalize font-semibold flex flex-row elec_p text-center'>
                <MdElectricBolt className='text-sky-500 mt-1 mr-1' /> electric car
            </p>
            <img src={home} className='w-72 mt-12 home_img' />

            <div className='flex flex-row flex-wrap justify-evenly items-center mt-16 car_info'>

                <div className='flex flex-col text-white items-center cursor-default'>
                    <RiTempColdLine className='text-xl' />
                    <p className='flex flex-row mt-3 text-2xl font-bold'>
                        24
                        <FaRegCircle className='celisios' />
                    </p>
                    <p className='uppercase disc'>temperature</p>
                </div>


                <div className='flex flex-col text-white items-center cursor-default mil_cont'>
                    <IoIosTimer className='text-xl' />
                    <p className='flex flex-row mt-3 text-2xl font-bold'>873</p>
                    <p className='uppercase disc'>mileage</p>
                </div>

                <div className='flex flex-col text-white items-center cursor-default battery_cont'>
                    <MdElectricBolt className='text-xl' />
                    <p className='flex flex-row mt-3 text-2xl font-bold'>94 %</p>
                    <p className='uppercase disc'>battery</p>
                </div>

            </div>

            <div className='my-20 border-2 border-green-500 py-16 px-4 rounded-full start'>
                <a href='#about' className='text-white capitalize font-bold text-2xl border-2 border-green-500 py-12 px-10 rounded-full'>start</a>
            </div>

        </section >
    )
}

export default Home;