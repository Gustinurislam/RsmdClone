import { PlayIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';


export default function Covid19() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div onClick={(() => setOpen(!open))} className="relative bg-[url('/img/bg/bg3.jpg')] bg-fixed bg-no-repeat bg-cover bg-center w-full h-[500px]">
                <div className="bg-primary w-full h-[500px] opacity-80 relative">
                    <h1 className="text-center pt-40 text-white text-xl md:text-2xl xl:text-4xl font-bold">Rsmd Menerapkan <br /> Protokol Pencegahan Covid-19</h1>
                    <div className="flex-center mt-20">
                        <button className="focus:outline-none">

                            <div className="flex-center space-x-5 relative">
                                <div className="z-[1] w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-white rounded-full flex-center"><PlayIcon className="w-5 h-5 md:w-7 md:h-7 xl:w-9 xl:h-9 text-primary" />
                                </div>
                                <div className="absolute -left-5 -z-[1] w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-white rounded-full flex-center animate-ping" />
                                <span className="text-xl md:text-2xl xl:text-3xl text-white font-semibold">Mulai Vidio</span>
                            </div>
                        </button>
                        <div className={`${open ? 'absolute -mt-40 md:-mt-44 xl:-mt-56 w-full flex justify-center items-center z-10' : 'hidden'}`}>
                            <iframe className='w-[320px] h-[300px] md:w-[375px] md:h-[350px] lg:w-[428px] lg:h-[400px] xl:w-[768px] 2xl:w-[1000px]' src="https://www.youtube.com/embed/sLGe8ITtZEc" title="RS Medika Dramaga Menerapkan Protokol Pencegahan Covid-19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

            </div >
            <div className="w-full h-3 bg-white" />
        </>
    )
}

