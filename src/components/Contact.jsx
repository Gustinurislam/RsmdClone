import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

const contact = [{
  "title": "Lorem ipsum dolor sit amet consectetur",
  "icon": MapPinIcon
},
{
  "title": "Lorem ipsum dolor sit amet.",
  "icon": PhoneIcon
},
{
  "title": "Lorem ipsum dolor sit amet consectetur.",
  "icon": EnvelopeIcon
}
]

const layanan = [{
  "title": "Instalasi Gawat Darurat (IGD)"
},
{
  "title": "Medical Chech Up (MCU)"
},
{
  "title": "Rawat Jalan / Poliklinik"
},
{
  "title": "Rawat Inap"
},
{
  "title": "Penunjang Medis"
},
{
  "title": "Fasilitas Lain"
}
]


export default function Contact() {
  return (
    <>

      <div className="bg-white/80 w-full h-[350px] md:h-[150px] lg:h-0 flex flex-col xl:flex-row p-5 xl:p-14 xl:justify-between">

        <div className="w-full xl:w-3/5 space-y-5">
          <img src="/img/logo.png" alt="logo.png" className="cursor-pointer" />
          <p className="text-justify xl:text-left text-sm md:text-base capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, repudiandae quia. Aperiam in nostrum necessitatibus iste repudiandae velit quia, magnam ut qui cum vel distinctio corrupti quam quos, numquam commodi assumenda. Earum quod deserunt laboriosam perspiciatis accusantium! Facere temporibus dicta sit modi pariatur, ad tempora est eius, magni saepe repellat aliquid sunt vero corporis esse!</p>

          {
            contact.map((a, i) => (
              <>
                <div id={i} className="flex"> <span className="pr-3"><a.icon className="w-5 h-5 md:w-7 md:h-7 hover:text-primary cursor-pointer" /></span><p className="text-base font-semibold hover:text-primary cursor-pointer capitalize">{a.title}
                </p>
                </div>
              </>
            ))
          }
        </div>

        <div className="xl:w-2/5 xl:pl-16">
          <h3 className="text-2xl md:text-3xl my-5 xl:mb-5 font-bold">Layanan</h3>

          <ul className="space-y-3 text-base md:text-lg font-semibold capitalize">
            {layanan.map((a, i) => (
              <>
                <li id={i} className="cursor-pointer hover:text-primary">{a.title}</li>
              </>
            ))}
          </ul>

        </div>
      </div>
    </>
  )
}
