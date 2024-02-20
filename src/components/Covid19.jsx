import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';
import { PlayIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/solid';


export default function Covid19() {
    return (
        <>
            <div className="relative bg-[url('/img/bg/bg3.jpg')] bg-fixed bg-no-repeat bg-cover bg-center w-full h-[500px]">
                <div className="bg-primary w-full h-[500px] opacity-80 relative">
                    <h1 className="text-center pt-40 text-white text-xl md:text-2xl xl:text-4xl font-bold">Rsmd Menerapkan <br /> Protokol Pencegahan Covid-19</h1>
                    <div className="flex justify-center mt-20">
                        <Popup trigger={<button className="focus:outline-none">
                            <div className="flex items-center space-x-5 relative">
                                <div className="z-[1] w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-white rounded-full flex items-center justify-center"><PlayIcon className="w-5 h-5 md:w-7 md:h-7 xl:w-9 xl:h-9 text-primary" />
                                </div>
                                <div className="absolute -left-5 -z-[1] w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-white rounded-full flex items-center justify-center animate-ping" />
                                <span className="text-xl md:text-2xl xl:text-3xl text-white font-semibold">Mulai Vidio</span>
                            </div>
                        </button>} modal >
                            <div className="w-full">
                                <iframe className="w-full xl:h-[500px]" src="https://www.youtube.com/embed/sLGe8ITtZEc" title="RS Medika Dramaga Menerapkan Protokol Pencegahan Covid-19" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                        </Popup>

                    </div>
                </div>

            </div>
            <div className="w-full h-3 bg-white" />

            <div className="flex flex-col 2xl:flex-row">

                <div className="relative w-full h-[400px] bg-[url('/img/bg/bg4.jpg')] bg-fixed bg-no-repeat bg-cover bg-center">
                    <div className="bg-primary w-full h-[400px] opacity-80 flex flex-col items-center justify-center">
                        <p className="text-xl md:text-2xl xl:text-4xl font-bold text-white pb-5 text-center">
                            Subscribe Untuk Berlangganan <br />
                            Informasi & Penawaran
                        </p>
                        <div className="flex items-center">
                            <input placeholder="Enter your mail here" type="email" className="placeholder-white font-semibold text-sm md:text-base xl:text-2xl bg-transparent border w-[200px] md:w-[240px] xl:w-[500px] 2xl:w-[400px] h-12 xl:h-16 px-5 text-white focus:outline-none" />
                            <button className="px-1 border w-[95px] md:w-[110px] xl:w-[140px] h-12 xl:h-16 flex items-center bg-white text-primary font-semibold text-sm md:text-base xl:text-xl focus:outline-none">
                                <span><EnvelopeIcon className="w-5 h-5 md:w-6 md:h-6 xl:w-9 xl:h-9 text-primary pr-1" /></span>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full 2xl:w-7 h-3 2xl:h-0 bg-white" />

                <div className="w-full h-[400px] bg-[url('/img/bg/bg5.jpg')] bg-fixed bg-no-repeat bg-cover bg-center">
                    <div className="bg-primary w-full h-[400px] opacity-80 text-white flex flex-col justify-center">
                        <div className='text-center'>
                            <p className="text-3xl md:text-4xl font-bold mb-5">Customer Services</p>
                            <div className=' flex flex-col items-center justify-center space-y-3'>
                                <ClockIcon className="w-12 h-12 md:w-16 md:h-16" />
                                <p className="text-2xl md:text-3xl font-bold">Chat WA : </p>
                                <p className="text-2xl md:text-3xl font-bold">010101010101</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

