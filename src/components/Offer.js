import '../css/offer.css'

import offer from '../imgs/offer.png'
import { motion } from "framer-motion";


function Offer() {
    return (
        <section className="flex flex-row flex-wrap justify-evenly items-center w-full offer_cont py-28">

            <div className='flex flex-col offer_text'>
                <h1 className='capitalize font-bold text-white text-xl'>do you want to recieve<br />special offers?</h1>
                <p className='offer_p first-letter:capitalize mt-8'>be the first to recieve all informations about our <br /> products and new cars by email by subscribing to <br />our mailing list.</p>
                <motion.a
                    className="box offer_box text-center text-white font-bold capitalize flex items-center justify-center text-xl"
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={e => { }}
                    onHoverEnd={e => { }}
                    href=''
                >subscribe now</motion.a>
            </div>

            <img className='w-96 offer_img' src={offer} />

        </section>
    )
}

export default Offer;