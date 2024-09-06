import '../css/popular.css'

import car1 from '../imgs/popular1.png'
import car2 from '../imgs/popular2.png'
import car3 from '../imgs/popular3.png'
import car4 from '../imgs/popular4.png'
import car5 from '../imgs/popular5.png'


import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import Car from './Car';


function Popular() {
    return (
        <section id="popular" className="bg-black pt-36 flex flex-col">

            <h1 className="capitalize text-white font-bold text-center text-2xl">choose your electric car <br /> of the porche brand</h1>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper bigScreen_swipper"
            >
                <SwiperSlide><Car type='porche' model='turbo 5' CarImg={car1} p1='3.7 sec' p2='356 km/h' p3='battery' price='$175.900' /></SwiperSlide>
                <SwiperSlide><Car type='porche' model='taycan' CarImg={car2} p1='3.7 sec' p2='356 km/h' p3='battery' price='$114.900' /></SwiperSlide>
                <SwiperSlide><Car type='porche' model='turbo 5 cross' CarImg={car3} p1='3.7 sec' p2='356 km/h' p3='battery' price='$150.900' /></SwiperSlide>
                <SwiperSlide><Car type='porche' model='boxster 718' CarImg={car4} p1='3.7 sec' p2='356 km/h' p3='battery' price='$125.900' /></SwiperSlide>
                <SwiperSlide><Car type='porche' model='cayman' CarImg={car5} p1='3.7 sec' p2='356 km/h' p3='battery' price='$128.900' /></SwiperSlide>
            </Swiper>





            <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper smallScreen_swipper mt-16"
            >

                <SwiperSlide><Car type='porche' model='turbo 5' CarImg={car1} p1='3.7 sec' p2='356 km/h' p3='battery' price='$175.900' /></SwiperSlide>
                <SwiperSlide><Car type='porche' model='taycan' CarImg={car2} p1='3.7 sec' p2='356 km/h' p3='battery' price='$114.900' /></SwiperSlide>
                <SwiperSlide><Car type='porche' model='turbo 5 cross' CarImg={car3} p1='3.7 sec' p2='356 km/h' p3='battery' price='$150.900' /></SwiperSlide>
                <SwiperSlide><Car type='porche' model='boxster 718' CarImg={car4} p1='3.7 sec' p2='356 km/h' p3='battery' price='$125.900' /></SwiperSlide>
                <SwiperSlide><Car type='porche' model='cayman' CarImg={car5} p1='3.7 sec' p2='356 km/h' p3='battery' price='$128.900' /></SwiperSlide>
            </Swiper>

        </section>
    )
}

export default Popular;