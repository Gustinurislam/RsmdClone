import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import layanan from '../../data/contacts/layanan.json'

const contact = [
  {
    "id": 1,
    "title": "Lorem ipsum dolor sit amet consectetur",
    "icon": MapPinIcon
  },
  {
    "id": 2,
    "title": "Lorem ipsum dolor sit amet.",
    "icon": PhoneIcon
  },
  {
    "id": 3,
    "title": "Lorem ipsum dolor sit amet consectetur.",
    "icon": EnvelopeIcon
  }
]

export default function Contact() {
  return (
    <>
      <div className="bg-white w-full h-full flex flex-col xl:flex-row p-5 xl:p-14 xl:justify-between">

        <div className="w-full xl:w-3/5 space-y-5">
          <img src="/img/logo.png" alt="logo.png" className="cursor-pointer" />
          <p className="text-justify xl:text-left text-sm md:text-base xl:text-lg capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, repudiandae quia. Aperiam in nostrum necessitatibus iste repudiandae velit quia, magnam ut qui cum vel distinctio corrupti quam quos, numquam commodi assumenda. Earum quod deserunt laboriosam perspiciatis accusantium! Facere temporibus dicta sit modi pariatur, ad tempora est eius, magni saepe repellat aliquid sunt vero corporis esse!</p>

          {
            contact.map((item) => (
              <>
                <div key={item.id} className="flex">
                  <span className="pr-3">
                    <item.icon className="w-5 h-5 md:w-7 md:h-7 hover:text-primary cursor-pointer" />
                  </span>
                  <p className="text-base font-semibold hover:text-primary cursor-pointer capitalize">
                    {item.title}
                  </p>
                </div>
              </>
            ))
          }
        </div>

        <div className="xl:w-2/5 xl:pl-16">
          <h3 className="text-2xl md:text-3xl my-5 xl:mb-5 font-bold">Layanan</h3>
          <ul className="space-y-3 text-base md:text-lg font-semibold capitalize">
            {layanan.map(({ id, title }) => (
              <>
                <li key={id} className="cursor-pointer hover:text-primary">{title}</li>
              </>
            ))}
          </ul>
        </div>

      </div>
    </>
  )
}
