import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ViewfinderCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const text = 'Klinik'

const jadwals = [
    {
        "id": 1,
        'jadwal': 'Lihat Semua Jadwal'
    },
    {
        "id": 2,
        'jadwal': `${text} Kandungan`
    },
    {
        "id": 3,
        'jadwal': `${text} Anak`
    },
    {
        "id": 4,
        'jadwal': `${text} Penyakit Dalam`
    },
    {
        "id": 5,
        'jadwal': `${text} Bedah`
    },
    {
        "id": 6,
        'jadwal': `${text} Ortopedi`
    },
    {
        "id": 7,
        'jadwal': `${text} Urologi`
    },
    {
        "id": 8,
        'jadwal': `${text} Saraf`
    },
    {
        "id": 9,
        'jadwal': `${text} Mata`
    },
    {
        "id": 10,
        'jadwal': `${text} THT`
    },
    {
        "id": 11,
        'jadwal': `${text} Paru`
    },
    {
        "id": 12,
        'jadwal': `${text} Psikatri`
    },
    {
        "id": 13,
        'jadwal': `${text} Rehabilitasi Medik`
    },
    {
        "id": 14,
        'jadwal': `${text} Konversi Medik`
    },
    {
        "id": 15,
        'jadwal': `${text} Konversi Gigi`
    },
    {
        "id": 16,
        'jadwal': `${text} Gigi`
    },
    {
        "id": 17,
        'jadwal': `${text} Umum`
    },
    {
        "id": 18,
        'jadwal': `Radiologi`
    },
    {
        "id": 19,
        'jadwal': `Medical Chech Up`
    },
    {
        "id": 20,
        'jadwal': `${text} Estetika`
    },
    {
        "id": 21,
        'jadwal': `${text} Psikologi`
    },
    {
        "id": 22,
        'jadwal': `${text} Eksekutif Kandungan`
    },
    {
        "id": 23,
        'jadwal': `${text} Eksekutif Anak`
    },
    {
        "id": 24,
        'jadwal': `${text} Eksekutif Penyakit Dalam`
    },
    {
        "id": 25,
        'jadwal': `${text} Eksekutif Bedah`
    },
    {
        "id": 26,
        'jadwal': `${text} Eksekutif Saraf`
    },
    {
        "id": 27,
        'jadwal': `${text} Eksekutif Paru`
    },
    {
        "id": 28,
        'jadwal': `${text} Jantung`
    },
    {
        "id": 29,
        'jadwal': `${text} Kulit dan Kelamiin`
    },
    {
        "id": 30,
        'jadwal': `${text} Gigi Anak`
    },
    {
        "id": 31,
        'jadwal': `Laboratorium`
    },
    {
        "id": 32,
        'jadwal': `${text} Eksekutif Jantung`
    },
    {
        "id": 33,
        'jadwal': `${text} Eksekutif Mata`
    }
]

export default function Hero() {
    const [open, setOpen] = useState(false)

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
                    <div className="flex-between px-3 xl:px-8 2xl:px-16 bg-[url('/img/hero.jpg')] bg-no-repeat bg-cover bg-center h-[50vh] 2xl:h-screen ">
                        <div className="text-white drop-shadow-[0_3px_3px_rgba(255,0,0,3)] space-y-2 md:space-y-3 xl:space-y-5 2xl:space-y-10">
                            <div className="text-lg md:text-xl lg:text-2xl xl:text-5xl font-bold">Pelayanan</div>
                            <div className="text-sm md:text-base lg:text-xl xl:text-4xl 2xl:text-5xl font-bold">RS Medika Dramaga</div>
                            <div className="text-xs md:text-sm lg:text-base xl:text-3xl font-bold">TERBAIK & TERPERCAYA</div>
                        </div>

                        <div className=''>
                            <img className="w-[150px] h-[150px] md:w-[175px] md:h-[175px] lg:w-[200px] lg:h-[200px] xl:w-[330px] xl:h-[330px] 2xl:w-[680px] 2xl:h-[680px]" src="/img/people1.png" alt="1" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex-between px-3 xl:px-8 2xl:px-16 bg-[url('/img/hero.jpg')] bg-no-repeat bg-cover bg-center h-[50vh] 2xl:h-screen">
                        <div className="text-white  space-y-2 md:space-y-3 xl:space-y-5 py-3 2xl:py-0 2xl:space-y-10 ">
                            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-5xl font-bold drop-shadow-[0_3px_3px_rgba(255,0,0,3)]">Pelayanan</h3>
                            <h2 className="text-sm md:text-base lg:text-xl xl:text-4xl 2xl:text-5xl font-bold drop-shadow-[0_3px_3px_rgba(255,0,0,3)]">RS Medika Dramaga</h2>
                            <h3 className="text-xs md:text-sm lg:text-base xl:text-3xl font-bold drop-shadow-[0_3px_3px_rgba(255,0,0,3)]">TERBAIK & TERPERCAYA</h3>
                            <button className="transition-all duration-1000 delay-100 outline-none hover:bg-white  border border-red-600 hover:text-red-600 rounded-full bg-red-600 px-4 py-2 md:px-5 lg:py-3 xl:px-10 xl:py-4 2xl:px-12 font-medium xl:font-semibold text-[10px] md:text-xs lg:text-sm xl:text-lg">Booking Online &#10095;</button>
                        </div>

                        <div className=''>
                            <img className="w-[150px] h-[150px] md:w-[175px] md:h-[175px] lg:w-[200px] lg:h-[200px] xl:w-[330px] xl:h-[330px] 2xl:w-[680px] 2xl:h-[680px]" src="/img/people2.png" alt="2" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='relative 2xl:space-y-0 space-y-3 xl:space-y-5 xl:px-6 2xl:px-0 px-3 xl:h-[250px] 2xl:h-[170px] h-[150px] bg-primary flex flex-col 2xl:flex-row items-center 2xl:items-start justify-between 2xl:relative'>
                <div className="bg-[url('/img/bg/bg1.png')] bg-no-repeat bg-cover 2xl:inline hidden 2xl:h-[140px] 2xl:w-[550px] opacity-25 z-0" />

                <div onClick={(() => setOpen(!open))} className='cursor-pointer text-white border-slate-300 2xl:top-12 2xl:left-28 2xl:absolute flex items-center justify-center 2xl:justify-normal border text-sm md:text-base xl:text-3xl 2xl:text-base w-full h-[40%] 2xl:w-[350px] 2xl:h-[50px] 2xl:px-3'>Pilih Spesialis Untuk Melihat Jadwal
                    <span><ViewfinderCircleIcon className='xl:w-9 xl:h-9 2xl:w-6 2xl:h-6 h-4 w-4 ml-3' /></span>
                </div>

                <div className={`z-10 w-[298px] md:w-[352px] mds:w-[367px] mdm:w-[390px] lg:w-[405px] xl:w-[720px] xls:w-[753px] xlm:w-[773px] xll:w-[786px] 2xl:w-[350px] top-14 xl:top-[97px] 2xl:top-[110px] 2xl:left-28 bg-white absolute xl:text-2xl 2xl:text-base ${open ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`}>
                    <ul className='p-3'>
                        {jadwals.map(({ id, jadwal }) => (
                            <li className='p-2 border-b hover:bg-primary hover:text-white cursor-pointer' key={id}>{jadwal}</li>
                        ))}
                    </ul>
                </div>

                <div className='2xl:h-[170px] 2xl:w-10 -skew-x-12 bg-primary -mr-5 bg-gradient-to-t from-transparent to-red-500 hidden 2xl:inline-block' />

                <div className='w-full h-[60%] 2xl:w-[350px] 2xl:h-[170px] bg-white flex items-center justify-center'>

                    <button className='px-6 py-2 xl:px-16 xl:py-5 border bg-red-600 text-white rounded-full 2xl:text-lg font-semibold hover:bg-white hover:text-red-600 hover:border-red-600 transition-all duration-1000 delay-100 outline-none text-sm xl:text-3xl'>Cek Jadwal
                    </button>

                </div>

                <div className='2xl:h-[170px] 2xl:w-10 -skew-x-12 bg-primary -ml-5 bg-gradient-to-b from-transparent to-red-500 hidden 2xl:inline-block' />

                <div className='2xl:w-[400px] 2xl:h-[100px]' />
            </div >
        </>
    )
}
