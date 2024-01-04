import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export default function Hero() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}

                navigation={true}
                modules={[Autoplay,]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex items-center justify-between px-16 bg-[url('https://rsmedikadramaga.com/assets/images/main-slider/1.jpg')] bg-no-repeat bg-cover h-screen">
                        <div className="text-white space-y-10">
                            <h3 className="text-4xl underline italic font-semibold">Pelayanan</h3>
                            <h2 className="text-5xl font-bold">RS Medika Dramaga</h2>
                            <h3 className="text-3xl font-bold">TERBAIK & TERPERCAYA</h3>
                        </div>

                        <div>
                            <img className="w-[680px] h-[680px]" src="https://rsmedikadramaga.com/assets/images/main-slider/content-image.png" alt="1" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="flex items-center justify-between px-16 bg-[url('https://rsmedikadramaga.com/assets/images/main-slider/1.jpg')] bg-no-repeat bg-cover h-screen">
                        <div className="text-white space-y-10">
                            <h3 className="text-4xl underline italic font-semibold">Pelayanan</h3>
                            <h2 className="text-5xl font-bold">RS Medika Dramaga</h2>
                            <h3 className="text-3xl font-bold">TERBAIK & TERPERCAYA</h3>
                            <button className="transition-all duration-1000 delay-100 outline-none hover:bg-white hover:text-red-700 px-12 py-4 rounded-full bg-red-700 font-semibold">Booking Online &#10095;</button>
                        </div>

                        <div>
                            <img className="w-[680px] h-[680px]" src="https://rsmedikadramaga.com/assets/images/main-slider/content-image-2.png" alt="2" />
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>

            <div>
                hello dok
            </div>
        </>
    )
}
