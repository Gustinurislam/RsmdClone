// Icon
import { PhoneIcon, PlusIcon, Bars3BottomRightIcon, Bars3BottomLeftIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
// Libs 
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup"
import { Link } from 'react-router-dom';
// State 
import { useState } from 'react';
// Data 
import tentangKami from '../../data/navbar/tentangKami.json'
import layanan from '../../data/navbar/layanan.json'
import jadwalDokter from '../../data/navbar/jadwalDokter.json'
import informasi from '../../data/navbar/informasi.json'
import daftarOnline from '../../data/navbar/daftarOnline.json'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className="2xl:flex overflow-hidden">
                <div className='flex-between w-full p-1 xl:p-3 2xl:w-60 2xl:inline-block 2xl:p-0 z-10'>
                    <div className='2xl:p-8 cursor-pointer'>
                        <Link to={'/'}>
                            <img src='/img/logo.png' className='h-12 xl:h-16' alt="logo" />
                        </Link>
                    </div>
                    <div className='2xl:hidden' onClick={(() => setOpen(!open))}>
                        {open ? (
                            <Bars3BottomLeftIcon className='w-12 h-12 xl:h-16 xl:w-16 text-red-500' />
                        ) : (
                            <Bars3BottomRightIcon className='w-12 h-12 xl:h-16 xl:w-16 text-red-500' />
                        )}
                    </div>
                </div>

                <div className='w-5 bg-primary -skew-x-[13deg] -mr-[3px] hidden 2xl:inline' />
                <div className={`flex flex-col flex-1 ${open ? 'inline-block opacity-100 transition-opacity duration-1000 ease-in-out' : '2xl:inline-flex absolute 2xl:static opacity-0 2xl:opacity-100 translate-y-10 2xl:translate-y-0'}`}>
                    <ul className='px-5 2xl:px-20 py-3 xl:py-6 xl:flex xl:justify-between xl:items-center bg-gradient-to-r from-primary to-[#439CC4] text-white '>
                        <li className=' flex items-center text-xs xl:text-base font-medium'><span><PhoneIcon className='w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 pr-1' /></span>Telp : (0101) 01010101 / Whatsapp : 01010101010</li>
                        <li className=' flex items-center text-xs xl:text-base font-medium'> <span><EnvelopeIcon className='w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 pr-1' /></span>Email : rsmdclone@gmail.com
                        </li>
                    </ul>

                    <ul className='py-3 space-y-3 xl:space-y-0 px-5 xl:py-6 xl:flex 2xl:items-center xl:justify-around 2xl:px-14 '>
                        <li className='cursor-pointer text-base font-medium'><Link to='/'>Beranda</Link></li>
                        {/* onClick  */}
                        <Popup trigger={<li className='2xl:hidden cursor-pointer flex items-center justify-between text-base font-medium'>Tentang Kami
                            <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span>
                        </li>} position={'bottom center'}>

                            <div className="space-y-4">
                                {tentangKami.map(({ id, namaLink, link }) => (
                                    <div key={id} className="border-b font-medium">
                                        <Link to={link} className='outline-none cursor-pointer'>{namaLink}</Link>
                                    </div>
                                ))}
                            </div>

                        </Popup>
                        {/* onClick  */}

                        {/* Hover */}
                        <Popup trigger={<li className='hidden cursor-pointer 2xl:flex items-center text-base font-medium'>Tentang Kami <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>}
                            position="bottom center"
                            on="hover"
                            closeOnDocumentClick
                            contentStyle={{ padding: '10px', border: 'solid', borderWidth: '2px', borderColor: '#2CB4AC', }}
                            arrow={false}
                        >
                            <div className="space-y-4">
                                {tentangKami.map(({ id, namaLink, link }) => (
                                    <div key={id} className="border-b font-medium">
                                        <Link to={link} className='outline-none cursor-pointer'>{namaLink}</Link>
                                    </div>
                                ))}
                            </div>
                        </Popup>
                        {/* Hover */}

                        {/* onClick  */}
                        <Popup trigger={<li className='2xl:hidden cursor-pointer flex items-center justify-between text-base font-medium'>Layanan <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>} position={'bottom center'}>
                            <div className="space-y-4">
                                {layanan.map(({ id, namaLink, link }) => (
                                    <div key={id} className="border-b font-medium">
                                        <Link to={link} className='outline-none cursor-pointer '>{namaLink}</Link>
                                    </div>
                                ))}
                            </div>
                        </Popup>
                        {/* onClick  */}

                        {/* Hover */}
                        <Popup trigger={<li className='hidden cursor-pointer 2xl:flex items-center text-base font-medium'>Layanan <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>}
                            position="bottom center"
                            on="hover"
                            closeOnDocumentClick
                            contentStyle={{ padding: '10px', border: 'solid', borderWidth: '2px', borderColor: '#2CB4AC', }}
                            arrow={false}
                        >
                            <div className="space-y-4">
                                {layanan.map(({ id, namaLink, link }) => (
                                    <div key={id} className="border-b font-medium">
                                        <Link to={link} className='outline-none cursor-pointer '>{namaLink}</Link>
                                    </div>
                                ))}
                            </div>
                        </Popup>
                        {/* Hover */}

                        {/* onClick  */}
                        <Popup trigger={<li className='2xl:hidden cursor-pointer flex items-center justify-between text-base font-medium' >Jadwal Dokter <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>} position={'bottom center'}>
                            <div className="space-y-4">
                                {jadwalDokter.map(({ id, namaLink, link }) => (
                                    <div key={id} className="border-b font-medium">
                                        <Link to={link} className='outline-none cursor-pointer '>{namaLink}</Link>
                                    </div>
                                ))}
                            </div>
                        </Popup>
                        {/* onClick  */}

                        {/* Hover */}
                        <Popup trigger={<li className='hidden cursor-pointer 2xl:flex items-center text-base font-medium' >Jadwal Dokter<span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>}
                            position="bottom center"
                            on="hover"
                            closeOnDocumentClick
                            contentStyle={{ padding: '10px', border: 'solid', borderWidth: '2px', borderColor: '#2CB4AC', }}
                            arrow={false}
                        >
                            <div className="space-y-4">
                                {jadwalDokter.map(({ id, namaLink, link }) => (
                                    <div key={id} className="border-b font-medium">
                                        <Link to={link} className='outline-none cursor-pointer '>{namaLink}</Link>
                                    </div>
                                ))}
                            </div>
                        </Popup>
                        {/* Hover */}

                        {/* onClick  */}
                        <Popup trigger={<li className='2xl:hidden cursor-pointer flex items-center justify-between text-base font-medium'>Informasi <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>} position={'bottom center'}>
                            <div className="space-y-4">
                                {informasi.map(({ id, namaLink, link }) => (
                                    <div key={id} className="border-b font-medium">
                                        <Link to={link} className='outline-none cursor-pointer '>{namaLink}</Link>
                                    </div>
                                ))}
                            </div>
                        </Popup>
                        {/* onClick  */}

                        {/* Hover */}
                        <Popup trigger={<li className='hidden cursor-pointer 2xl:flex items-center text-base font-medium'>Informasi <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>}
                            position="bottom center"
                            on="hover"
                            closeOnDocumentClick
                            contentStyle={{ padding: '10px', border: 'solid', borderWidth: '2px', borderColor: '#2CB4AC', }}
                            arrow={false}
                        >
                            <div className="space-y-4">
                                {informasi.map(({ id, namaLink, link }) => (
                                    <div key={id} className="border-b font-medium">
                                        <Link to={link} className='outline-none cursor-pointer'>{namaLink}</Link>
                                    </div>
                                ))}
                            </div>
                        </Popup>
                        {/* Hover */}

                        {/* onClick  */}
                        <Popup trigger={<li className='2xl:hidden cursor-pointer flex items-center justify-between text-base font-medium'>Daftar Online<span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>} position={'bottom center'}>
                            <div className="space-y-4">
                                {daftarOnline.map(({ id, namaLink, link }) => (
                                    <div key={id} className="border-b font-medium">
                                        <Link to={link} className='outline-none cursor-pointer '>{namaLink}</Link>
                                    </div>
                                ))}
                            </div>
                        </Popup>
                        {/* onClick  */}

                        {/* Hover */}
                        <Popup trigger={<li className='hidden cursor-pointer 2xl:flex items-center text-base font-medium'>Daftar Online <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>}
                            position="bottom center"
                            on="hover"
                            closeOnDocumentClick
                            contentStyle={{ padding: '10px', border: 'solid', borderWidth: '2px', borderColor: '#2CB4AC', }}
                            arrow={false}
                        >
                            <div className="space-y-4">
                                {daftarOnline.map(({ id, namaLink, link }) => (
                                    <div key={id} className="border-b font-medium">
                                        <Link to={link} className='outline-none cursor-pointer '> {namaLink}</Link>
                                    </div>
                                ))}
                            </div>
                        </Popup>
                        {/* Hover */}

                        <li className='cursor-pointer text-base font-medium'>Kontak </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}