import { PhoneIcon, PlusIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon, Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import logo from '../../data/logo.json'

export default function Navbar() {
    return (
        <>
            <nav className="flex overflow-hidden">
                {logo.map(({ uid, image }) => (
                    <img key={uid} src={image} className='py-8 pl-24 pr-8 cursor-pointer' alt="logo" />
                ))}
                <div className="-skew-x-[24deg] border-r border-[#2CB4AC]" />
                <div className='flex flex-col flex-1 border-l border-[#2CB4AC] -skew-x-[24deg] font-semibold'>
                    <ul className='px-10 flex justify-around items-center bg-gradient-to-r from-[#2CB4AC] to-[#439CC4] text-white py-1'>
                        <li className='flex items-center'><span><PhoneIcon className='w-6 h-6 pr-2' /></span>Telp : (0101) 01010101 / Whatsapp : 01010101010</li>
                        <li className='flex items-center'> <span><EnvelopeIcon className='w-6 h-6 pr-2' /></span>Email : rsmdclone@gmail.com
                        </li>
                        <li><span><Bars3BottomRightIcon className='w-10 h-10 text-white cursor-pointer' /></span></li>
                    </ul>
                    <ul className='flex items-center justify-around py-5 px-14'>
                        <li className='cursor-pointer '>Beranda</li>
                        <li className='cursor-pointer flex items-center'>Tentang Kami <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>
                        <li className='cursor-pointer flex items-center'>Layanan <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>
                        <li className='cursor-pointer flex items-center'>Jadwal Poliklinik <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>
                        <li className='cursor-pointer flex items-center'>Informasi <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>
                        <li className='cursor-pointer '>Kontak </li>
                        <li className='cursor-pointer '>Download Aplikasi </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
