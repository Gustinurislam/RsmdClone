import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from "framer-motion"
import { ViewfinderCircleIcon } from '@heroicons/react/24/outline';

export default function Hero() {
    return (
        <>
            <Swiper
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay,]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex items-center justify-between px-16 bg-[url('/img/hero.jpg')] bg-no-repeat bg-cover h-screen">
                        <div className="text-white space-y-10">
                            <motion.div initial={{ opacity: 0 }} animate={{ y: -30, opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className="text-4xl underline italic font-semibold">Pelayanan</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ y: -30, opacity: 1 }} transition={{ duration: 1.5 }} exit={{ opacity: 0 }} className="text-5xl font-bold">RS Medika Dramaga</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ y: -30, opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }} className="text-3xl font-bold">TERBAIK & TERPERCAYA</motion.div>
                        </div>

                        <div>
                            <img className="w-[680px] h-[680px]" src="/img/people1.png" alt="1" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="flex items-center justify-between px-16 bg-[url('/img/hero.jpg')] bg-no-repeat bg-cover h-screen">
                        <div className="text-white space-y-10">
                            <h3 className="text-4xl underline italic font-semibold">Pelayanan</h3>
                            <h2 className="text-5xl font-bold">RS Medika Dramaga</h2>
                            <h3 className="text-3xl font-bold">TERBAIK & TERPERCAYA</h3>
                            <button className="transition-all duration-1000 delay-100 outline-none hover:bg-white hover:text-red-600 px-12 py-4 rounded-full bg-red-600 font-semibold border border-red-600">Booking Online &#10095;</button>
                        </div>

                        <div>
                            <img className="w-[680px] h-[680px]" src="/img/people2.png" alt="2" />
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>

            <div className='h-[170px] bg-primary flex justify-between relative'>
                <div className="bg-[url('/img/bg/bg1.png')] bg-no-repeat bg-cover h-[140px] w-[550px] opacity-25 z-0" />
                <div className='cursor-pointer text-white border-slate-300 top-12 left-28 absolute flex items-center border py-3 px-10'>Pilih Spesialis Untuk Melihat Jadwal <span><ViewfinderCircleIcon className='w-5 h-5 ml-3' /></span></div>
                <div className='h-[170px] w-10 -skew-x-12 bg-primary absolute left-[530px] bg-gradient-to-t from-transparent to-red-500' />
                <div className='border w-[350px] h-[170px] bg-white flex items-center justify-center'><button className='px-12 py-4 border bg-red-600 text-white rounded-full text-lg font-semibold hover:bg-white hover:text-red-600 hover:border-red-600 transition-all duration-1000 delay-100 outline-none'>Cek Jadwal</button></div>
                <div className='h-[170px] w-10 -skew-x-12 bg-primary absolute right-[380px] bg-gradient-to-b from-transparent to-red-500' />
                <div className='w-[400px] h-[100px]'></div>
            </div >
        </>
    )
}
