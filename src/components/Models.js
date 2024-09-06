import logo1 from '../imgs/logo1.png'
import logo2 from '../imgs/logo2.png'
import logo3 from '../imgs/logo3.png'
import logo4 from '../imgs/logo4.png'
import logo5 from '../imgs/logo5.png'
import logo6 from '../imgs/logo6.png'


function Models() {
    return (
        <section className="flex flex-row flex-wrap w-full justify-evenly items-center bg-black py-24">
            <img src={logo1} className='w-12 opacity-50 hover:opacity-100 duration-500' />
            <img src={logo2} className='w-12 opacity-50 hover:opacity-100 duration-500' />
            <img src={logo3} className='w-12 opacity-50 hover:opacity-100 duration-500' />
            <img src={logo4} className='w-12 opacity-50 hover:opacity-100 duration-500' />
            <img src={logo5} className='w-12 opacity-50 hover:opacity-100 duration-500' />
            <img src={logo6} className='w-12 opacity-50 hover:opacity-100 duration-500' />

        </section>
    )
}

export default Models;