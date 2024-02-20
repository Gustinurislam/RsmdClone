import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className="flex flex-col min-h-screen">

                <div className="h-20 xl:h-28 mt-auto bg-gradient-to-r from-primary to-[#439CC4] flex items-center justify-between  text-white text-sm md:text-base lg:text-lg xl:text-2xl font-medium px-2 md:px-4 2xl:px-16">
                    <p>&copy; 2024 - {new Date().getFullYear()} Rsmd Clone.</p>

                    <div className="flex items-center space-x-3">
                        <div className="cursor-pointer"><FaFacebookF /></div>
                        <div className="h-4 border" />
                        <div className="cursor-pointer"><FaInstagram /></div>
                        <div className="h-4 border" />
                        <div className="cursor-pointer"><FaYoutube /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
