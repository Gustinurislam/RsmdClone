import { ClockIcon, ComputerDesktopIcon, TruckIcon } from "@heroicons/react/24/solid"
import { BriefcaseIcon, BeakerIcon, BookOpenIcon } from "@heroicons/react/24/outline"
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'

export default function Layanan() {

    const layananCard = [
        {
            "id": 1,
            "title": "IGD 24 Jam",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at, perferendis minima, autem ratione deleniti inventore magnam nisi beatae, nobis eveniet.",
            "icon": ClockIcon
        },
        {

            "id": 2,
            "title": "Telemedicine",
            "subtitle": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam asperiores iste nam.",
            "icon": ComputerDesktopIcon
        },
        {

            "id": 3,
            "title": "Laboratorium",
            "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, amet! Doloribus et quia quod iusto dicta!.",
            "icon": BriefcaseIcon
        },
        {

            "id": 4,
            "title": "Ambulans",
            "subtitle": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae.",
            "icon": TruckIcon
        },
        {
            "id": 5,
            "title": "Apotik 24 Jam",
            "subtitle": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima!.",
            "icon": BeakerIcon
        },
        {
            "id": 6,
            "title": "CT-Scan",
            "subtitle": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat architecto quisquam libero quae quas iure magnam nulla.",
            "icon": BookOpenIcon
        }
    ]

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-24">Layanan</h1>
                    <p className="text-sm md:text-base lg:text-lg xl:text-3xl font-medium mt-6">
                        Layanan yang tersedia di RS Medika Dramaga
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 flex-wrap">

                    {layananCard.map((item) => (
                        <>
                            <div key={item.id} data-aos='zoom-in' className="layanan-card">
                                <div className="flex-center">
                                    <item.icon className="w-10 h-10 md:w-16 md:h-16 xl:w-20 xl:h-20 text-white" />
                                </div>
                                <h3 className="text-xl md:text-2xl xl:text-3xl font-bold text-white cursor-pointer">{item.title}</h3>
                                <p className="text-base md:text-lg xl:text-xl text-left text-white">
                                    {item.subtitle}
                                </p>
                            </div>
                        </>
                    ))}

                </div>
            </div>
        </>
    )
}
