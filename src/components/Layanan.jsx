import { ClockIcon, ComputerDesktopIcon, TruckIcon } from "@heroicons/react/24/solid"
import { BriefcaseIcon, BeakerIcon, BookOpenIcon } from "@heroicons/react/24/outline"
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'

export default function Layanan() {

    const data = [
        {
            "title": "IGD 24 Jam",
            "subtitle": "Sebagai gerbang terdepan Unit Gawat Darurat kami siaga 24 jam dibawah pengawasan dokter ahli, dan fasilitas penunjang lengkap dengan layanan cepat.",
            "icon": ClockIcon
        },
        {
            "title": "Telemedicine",
            "subtitle": "Telemedicine adalah pemakaian telekomunikasi untuk memberikan informasi dan pelayanan medis jarak jauh.",
            "icon": ComputerDesktopIcon
        },
        {
            "title": "Laboratorium",
            "subtitle": "Laboratorium merupakan sarana penunjang dalam penata laksanaan penderita untuk membantu menegakkan diagnosis, memantau penyakit dan pengobatan.",
            "icon": BriefcaseIcon
        },
        {
            "title": "Ambulans",
            "subtitle": "RS Medika Dramaga menyediakan Unit Ambulan yang siap 24 Jam.",
            "icon": TruckIcon
        },
        {
            "title": "Apotik 24 Jam",
            "subtitle": "RS Medika Dramaga menyediakan Apotik yang buka 24 Jam.",
            "icon": BeakerIcon
        },
        {
            "title": "CT-Scan",
            "subtitle": "CT Scan menggabungkan serangkaian pemindaian Rontgen Kemudian komputer akan memroses hingga menghasilkan gambar tulang dan jaringan lunak.",
            "icon": BookOpenIcon
        }
    ]

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    console.log(data);

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-24">Layanan</h1>
                    <p className="text-sm md:text-base lg:text-lg xl:text-3xl font-medium mt-6">Layanan yang tersedia di RS Medika Dramaga</p>
                </div>

                <div className="mt-16 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 flex-wrap">

                    {data.map((layananCard, i) => (
                        <>
                            <div id={i} data-aos='zoom-in' className="layanan-card">
                                <div className="flex justify-center"><layananCard.icon className="w-10 h-10 md:w-16 md:h-16 xl:w-20 xl:h-20 text-white" /></div>
                                <h3 className="text-xl md:text-2xl xl:text-3xl font-bold text-white cursor-pointer">{layananCard.title}</h3>
                                <p className="text-base md:text-lg xl:text-xl text-left text-white">
                                    {layananCard.subtitle}
                                </p>
                            </div>
                        </>
                    ))}

                </div>
            </div>
        </>
    )
}
