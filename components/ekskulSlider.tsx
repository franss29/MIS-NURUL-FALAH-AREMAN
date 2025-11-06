"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function EkskulSlider() {
  const ekskulList = [
    {
      id: 1,
      image: "/ekskul/2.png",
      alt: "Alka Devdan",
      name: "Alka Devdan",
      kelas: "Kelas 4A",
      desc: "Juara 1 Gaya Dada • Juara 1 Gaya Bebas • Juara 2 Gaya Punggung • Juara 3 Gaya Kupu • Kejuaraan Renang Terbuka GOR Senen, 26-27 April 2025"
    },
    {
      id: 2,
      image: "/ekskul/1.png",
      alt: "Arkhan Evano",
      name: "Arkhan Evano Alfarezel Timor",
      kelas: "Kelas 6G",
      desc: "Juara 2 Poomsae • Kejuaraan Dankor Brimob Taekwondo Championship Cup 2025 • 8–10 Agustus 2025 • Gor Ciracas – Jakarta Timur"
    },
    {
      id: 3,
      image: "/ekskul/5.png",
      alt: "Muhammad Ezra",
      name: "Muhammad Ezra Roosto",
      kelas: "Kelas 6D",
      desc: "Mendapatkan Juara 3 & Best Player • Liga Mandiri 2024 U-11 • Japres PSSI Askot Jaktim"
    },
    {
      id: 4,
      image: "/ekskul/3.png",
      alt: "Khairunnisa Zakiyya",
      name: "Khairunnisa Zakiyya",
      kelas: "Kelas 5F",
      desc: "Mendapatkan Juara 2 Kategori SD Sanggar Kelas 1-3 Pada Lomba Tari Kreasi Daerah Nusantara 22 Februari 2025"
    },
    {
      id: 5,
      image: "/ekskul/4.png",
      alt: "Abqori Gilam Ramadhan",
      name: "Abqori Gilam Ramadhan",
      kelas: "Kelas 3F",
      desc: "Mendapatkan Juara 3 Pidato (Putra) Aksioama 2024 Tingkat Madrasah Ibtidaiyah Sekecamatan Cimanggis"
    },
  ]

  return (
    <section className="bg-[#1D8143] py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
          Ekstra Kulikuler Sekolah
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {ekskulList.map((e) => (
            <SwiperSlide key={e.id}>
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer">
                <img
                  src={e.image}
                  alt={e.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay yang muncul saat hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 text-white">
                  <h3 className="font-bold text-lg">{e.name}</h3>
                  <p className="text-sm mb-1 font-medium">{e.kelas}</p>
                  <p className="text-xs leading-snug">{e.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
