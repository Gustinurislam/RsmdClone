import { ClockIcon,ComputerDesktopIcon, TruckIcon } from "@heroicons/react/24/solid"
import { BriefcaseIcon, BeakerIcon, BookOpenIcon } from "@heroicons/react/24/outline"

export default function Layanan() {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <h1 className=" text-5xl font-bold mt-24">Layanan</h1>
                    <p className="text-lg font-medium mt-6">Layanan yang tersedia di RS Medika Dramaga</p>
                </div>

                <div className="mt-16 grid grid-cols-3 gap-6 flex-wrap">

                    <div className="border border-black w-[350px] h-[350px] space-y-3 p-5 text-center">
                        <div className="flex justify-center"><ClockIcon className="w-14 h-14 text-primary" /></div>
                        <h3 className="text-2xl font-bold">IGD 24 Jam</h3>
                        <p className="text-lg text-left text-gray-700">Sebagai gerbang terdepan Unit Gawat Darurat kami siaga 24 jam dibawah pengawasan dokter ahli, dan fasilitas penunjang lengkap dengan layanan cepat.
                        </p>
                    </div>
                    <div className="border border-black w-[350px] h-[350px] space-y-3 p-5 text-center">
                        <div className="flex justify-center"><ComputerDesktopIcon className="w-14 h-14 text-primary" /></div>
                        <h3 className="text-2xl font-bold">Telemedicine</h3>
                        <p className="text-lg text-left text-gray-700">Telemedicine adalah pemakaian telekomunikasi untuk memberikan informasi dan pelayanan medis jarak jauh.
                        </p>
                    </div>
                    <div className="border border-black w-[350px] h-[350px] space-y-3 p-5 text-center">
                        <div className="flex justify-center"><BriefcaseIcon className="w-14 h-14 text-primary" /></div>
                        <h3 className="text-2xl font-bold">Laboratorium</h3>
                        <p className="text-lg text-left text-gray-700">Laboratorium merupakan sarana penunjang dalam penata laksanaan penderita untuk membantu menegakkan diagnosis, memantau penyakit dan pengobatan.
                        </p>
                    </div>

                    <div className="border border-black w-[350px] h-[350px] space-y-3 p-5 text-center">
                        <div className="flex justify-center"><TruckIcon className="w-14 h-14 text-primary" /></div>
                        <h3 className="text-2xl font-bold">Ambulans</h3>
                        <p className="text-lg text-left text-gray-700">RS Medika Dramaga menyediakan Unit Ambulan yang siap 24 Jam.
                        </p>
                    </div>
                    <div className="border border-black w-[350px] h-[350px] space-y-3 p-5 text-center">
                        <div className="flex justify-center"><BeakerIcon className="w-14 h-14 text-primary" /></div>
                        <h3 className="text-2xl font-bold">Apotik 24 Jam</h3>
                        <p className="text-lg text-left text-gray-700">RS Medika Dramaga menyediakan Apotik yang buka 24 Jam.
                        </p>
                    </div>
                    <div className="border border-black w-[350px] h-[350px] space-y-3 p-5 text-center">
                        <div className="flex justify-center"><BookOpenIcon className="w-14 h-14 text-primary" /></div>
                        <h3 className="text-2xl font-bold">CT-Scan</h3>
                        <p className="text-lg text-left text-gray-700">CT Scan menggabungkan serangkaian pemindaian Rontgen Kemudian komputer akan memroses hingga menghasilkan gambar tulang dan jaringan lunak.
                        </p>
                    </div>


                </div>
            </div>
        </>
    )
}
