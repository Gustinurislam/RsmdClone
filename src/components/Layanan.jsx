import { ClockIcon } from "@heroicons/react/24/outline"

export default function Layanan() {
    return (
        <>
            <div className="text-center">
                <h1 className=" text-5xl font-bold mt-24">Layanan</h1>
                <p className="text-lg font-medium mt-6">Layanan yang tersedia di RS Medika Dramaga</p>
            </div>

            <div className="pt-14 px-10">
                <div className="border border-black w-[300px] h-[300px]">
                    <div><ClockIcon className="w-10 h-10 text-primary" /></div>
                    <h3>IGD 24 Jam</h3>
                    <span>Sebagai gerbang terdepan Unit Gawat Darurat kami siaga 24 jam dibawah pengawasan dokter ahli, dan fasilitas penunjang lengkap dengan layanan cepat.
                    </span>
                </div>
            </div>
        </>
    )
}
