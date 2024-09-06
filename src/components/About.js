import '../css/about.css'

import about from '../imgs/about.png'
import { motion } from "framer-motion";


function About() {

    return (
        <section id='about' className="bg-black w-full flex flex-row flex-wrap justify-evenly pt-24">

            <img className='aboutImg m-auto rounded-lg' src={about} />

            <div className='flex flex-col m-auto'>
                <h2 className='capitalize text-white font-bold text-2xl m'>machines with <br />future technology</h2>
                <p className='about_p first-letter:capitalize mt-8 m'>see the future with high performance electric cars<br />preduced by the renowned brands. they feature<br /> futuristic builds and designs with new and<br /> innovative platforms that last a long time.</p>
                <motion.a
                    className="box text-center text-white font-bold capitalize flex items-center justify-center mt-12 text-xl"
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={e => { }}
                    onHoverEnd={e => { }}
                    href=''
                >know more</motion.a>
            </div>

        </section>
    )
}

export default About;