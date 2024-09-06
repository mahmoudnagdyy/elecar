import '../css/featured.css'

import tesla from '../imgs/logo3.png'
import aoudi from '../imgs/logo2.png'
import porche from '../imgs/logo1.png'
import { useState } from 'react'
import Feature from './Feature'


import f1 from '../imgs/featured1.png'
import f2 from '../imgs/featured2.png'
import f3 from '../imgs/featured3.png'
import f4 from '../imgs/featured4.png'
import f5 from '../imgs/featured5.png'


function Featured() {

    const [active, setActive] = useState(1);


    return (
        <section id="featured" className="flex flex-col bg-black justify-center items-center pt-36">

            <h1 className="text-white capitalize font-bold text-3xl">Featured luxury cars</h1>

            <div className="flex flex-row mt-10 buttons_container">

                <button onClick={() => setActive(1)} className={active == 1 ? 'text-white capitalize font-bold  py-3 px-4 rounded-lg active_button mr-5' : 'text-white capitalize font-bold  py-3 px-4 mr-5 rounded-lg darkButton'}>all</button>
                <button onClick={() => setActive(2)} className={active == 2 ? 'p-3 rounded-lg mr-5 active_button ' : 'p-3 rounded-lg mr-5 darkButton'}>
                    <img className='w-8' src={tesla} />
                </button>

                <button onClick={() => setActive(3)} className={active == 3 ? 'p-3 rounded-lg mr-5 active_button' : 'p-3 rounded-lg mr-5 darkButton'}>
                    <img className='w-8' src={aoudi} />
                </button>

                <button onClick={() => setActive(4)} className={active == 4 ? 'p-3 rounded-lg mr-5 active_button' : 'p-3 rounded-lg mr-5 darkButton'}>
                    <img className='w-8' src={porche} />
                </button>

            </div>
            {
                active == 1 ?
                    <div className='flex flex-row flex-wrap w-full justify-evenly items-center'>
                        <Feature type='tesla' model='model x' price='$98,900' CarImg={f1} />
                        <Feature type='tesla' model='model 3' price='$45,900' CarImg={f2} />
                        <Feature type='audi' model='e-tron' price='$175,900' CarImg={f3} />
                        <Feature type='porche' model='boxster 987' price='$126,900' CarImg={f4} />
                        <Feature type='porche' model='panamera' price='$126,900' CarImg={f5} />
                    </div> : null
            }

            {
                active == 2 ?
                    <div className='flex flex-row flex-wrap w-full justify-evenly items-center'>
                        <Feature type='tesla' model='model x' price='$98,900' CarImg={f1} />
                        <Feature type='tesla' model='model 3' price='$45,900' CarImg={f2} />
                    </div> : null
            }

            {
                active == 3 ?
                    <div className='flex flex-row flex-wrap w-full justify-evenly items-center'>
                        <Feature type='audi' model='e-tron' price='$175,900' CarImg={f3} />
                    </div> : null
            }

            {
                active == 4 ?
                    <div className='flex flex-row flex-wrap w-full justify-evenly items-center'>
                        <Feature type='porche' model='boxster 987' price='$126,900' CarImg={f4} />
                        <Feature type='porche' model='panamera' price='$126,900' CarImg={f5} />
                    </div> : null
            }



        </section >
    )
}

export default Featured;