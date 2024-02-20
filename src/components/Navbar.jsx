import { PhoneIcon, PlusIcon, Bars3BottomRightIcon, Bars3BottomLeftIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className="2xl:flex overflow-hidden">
                <div className='flex justify-between items-center w-full p-1 xl:p-3 2xl:w-60 2xl:inline-block 2xl:p-0'>
                    <div className='2xl:p-8 cursor-pointer'>
                        <img src='/img/logo.png' className='h-12 xl:h-16' alt="logo" />
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

                <div className={`flex flex-col flex-1 ${open ? 'inline-block' : 'hidden 2xl:inline-flex'}`}>
                    <ul className='px-5 2xl:px-20 py-3 xl:py-6 xl:flex xl:justify-between xl:items-center bg-gradient-to-r from-primary to-[#439CC4] text-white '>
                        <li className=' flex items-center text-xs xl:text-base font-medium'><span><PhoneIcon className='w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 pr-1' /></span>Telp : (0101) 01010101 / Whatsapp : 01010101010</li>
                        <li className=' flex items-center text-xs xl:text-base font-medium'> <span><EnvelopeIcon className='w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 pr-1' /></span>Email : rsmdclone@gmail.com
                        </li>
                    </ul>

                    <ul className='py-3 px-5 xl:py-6 xl:flex 2xl:items-center xl:justify-around 2xl:px-14 '>
                        <li className='cursor-pointer text-base font-medium'>Beranda</li>
                        {/* onClick  */}
                        <Popup trigger={<li className='2xl:hidden cursor-pointer flex items-center text-base font-medium'>Tentang Kami <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>} position={'bottom center'}>
                            <div className="space-y-3">
                                <div className="cursor-pointer border-b border-primary font-medium">Sejarah
                                </div>
                                <div className="cursor-pointer border-b border-primary font-medium">Visi - Misi</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Latar Belakang</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Capaian Indikator Mutu</div>
                            </div>
                        </Popup>
                        {/* onClick  */}

                        {/* Hover */}
                        <Popup trigger={<li className='hidden cursor-pointer 2xl:flex items-center text-base font-medium'>Tentang Kami <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>}
                            position="bottom center"
                            on="hover"
                            closeOnDocumentClick
                            mouseLeaveDelay={300}
                            mouseEnterDelay={0}
                            contentStyle={{ padding: '10px', border: 'solid', borderWidth: '2px', borderColor: '#2CB4AC', }}
                            arrow={false}
                        >
                            <div className="space-y-3">
                                <div className="cursor-pointer border-b border-primary font-medium">Sejarah</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Visi - Misi</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Latar Belakang</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Capaian Indikator Mutu</div>
                            </div>
                        </Popup>
                        {/* Hover */}

                        {/* onClick  */}
                        <Popup trigger={<li className='2xl:hidden cursor-pointer flex items-center text-base font-medium'>Layanan <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>} position={'bottom center'}>
                            <div className="space-y-3">
                                <div className="cursor-pointer border-b border-primary font-medium">Instalasi Gawat Darurat (IGD)</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Medical Chech Up (MCU)</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Rawat Jalan / Poliklinik</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Rawat Inap</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Penunjang Medis</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Fasilitas Lain</div>
                            </div>
                        </Popup>
                        {/* onClick  */}

                        {/* Hover */}
                        <Popup trigger={<li className='hidden cursor-pointer 2xl:flex items-center text-base font-medium'>Layanan <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>}
                            position="bottom center"
                            on="hover"
                            closeOnDocumentClick
                            mouseLeaveDelay={100}
                            mouseEnterDelay={0}
                            contentStyle={{ padding: '10px', border: 'solid', borderWidth: '2px', borderColor: '#2CB4AC', }}
                            arrow={false}
                        >
                            <div className="space-y-3">
                                <div className="cursor-pointer border-b border-primary font-medium">Instalasi Gawat Darurat (IGD)</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Medical Chech Up (MCU)</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Rawat Jalan / Poliklinik</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Rawat Inap</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Penunjang Medis</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Fasilitas Lain</div>
                            </div>
                        </Popup>
                        {/* Hover */}

                        {/* onClick  */}
                        <Popup trigger={<li className='2xl:hidden cursor-pointer flex items-center text-base font-medium' >Jadwal Poliklinik <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>} position={'bottom center'}>
                            <div className="space-y-3">
                                <div className="cursor-pointer border-b border-primary font-medium">Poliklinik Reguler</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Poliklinik Eksekutif</div>
                            </div>
                        </Popup>
                        {/* onClick  */}

                        {/* Hover */}
                        <Popup trigger={<li className='hidden cursor-pointer 2xl:flex items-center text-base font-medium' >Jadwal Poliklinik <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>}
                            position="bottom center"
                            on="hover"
                            closeOnDocumentClick
                            mouseLeaveDelay={300}
                            mouseEnterDelay={0}
                            contentStyle={{ padding: '10px', border: 'solid', borderWidth: '2px', borderColor: '#2CB4AC', }}
                            arrow={false}
                        >
                            <div className="space-y-3">
                                <div className="cursor-pointer border-b border-primary font-medium">Poliklinik Reguler</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Poliklinik Eksekutif</div>
                            </div>
                        </Popup>
                        {/* Hover */}

                        {/* onClick  */}
                        <Popup trigger={<li className='2xl:hidden cursor-pointer flex items-center text-base font-medium'>Informasi <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>} position={'bottom center'}>
                            <div className="space-y-3">
                                <div className="cursor-pointer border-b border-primary font-medium">Asuransi Rekanan</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Alur Pendaftaran Pasien</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Hak Dan Kewajiban Pasien</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Lowongan Kerja RSMD</div>
                            </div>
                        </Popup>
                        {/* onClick  */}

                        {/* Hover */}
                        <Popup trigger={<li className='hidden cursor-pointer 2xl:flex items-center text-base font-medium'>Informasi <span><PlusIcon className='w-5 h-5 pl-1 text-[#2CB4AC]' /></span></li>}
                            position="bottom center"
                            on="hover"
                            closeOnDocumentClick
                            mouseLeaveDelay={50}
                            mouseEnterDelay={0}
                            contentStyle={{ padding: '10px', border: 'solid', borderWidth: '2px', borderColor: '#2CB4AC', }}
                            arrow={false}
                        >
                            <div className="space-y-3">
                                <div className="cursor-pointer border-b border-primary font-medium">Asuransi Rekanan</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Alur Pendaftaran Pasien</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Hak Dan Kewajiban Pasien</div>
                                <div className="cursor-pointer border-b border-primary font-medium">Lowongan Kerja RSMD</div>
                            </div>
                        </Popup>
                        {/* Hover */}

                        <li className='cursor-pointer text-base font-medium'>Kontak </li>
                        <li className='cursor-pointer text-base font-medium'>Download Aplikasi </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}