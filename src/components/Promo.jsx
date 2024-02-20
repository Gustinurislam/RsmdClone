import { PhoneIcon } from "@heroicons/react/24/solid"

export default function Promo() {
    return (
        <>
            <div className="text-center mt-[200px] relative">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Promo Terbaru</h1>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold mt-8 mx-2 mb-[100px]">Kami menyediakan Promo - Promo terbaru untuk pelayanan yang lebih baik</p>

                <div className="bg-[url('/img/bg/bg2.jpg')] bg-no-repeat bg-cover bg-center w-full h-[500px]">
                    <div className="text-left text-primary space-y-4 pt-20 pl-5 2xl:pl-10">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold">IGD</h2>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">Buka 24 Jam</h2>
                        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">Unit Instalasi Gawat Darurat Kami buka 24 jam.</p>
                        <div className="flex cursor-pointer">
                            <PhoneIcon className="border-2 hover:bg-primary hover:text-white hover:border-primary rounded-md p-2 text-primary border-slate-300 w-10 h-10 md:w-14 md:h-14 mr-5" />
                            <span className="text-primary text-2xl md:text-3xl xl:text-4xl font-bold">(0101) 01010101</span>
                        </div>
                    </div>
                </div>

                <div className="w-full h-3 bg-white" />
            </div>
        </>
    )
}
