"use client"

import Link from "next/link"

const services = [
  {
    id:1,
    title:"Business Strategy",
    image:"https://images.unsplash.com/photo-1552664730-d307ca884978",
    desc:"Strategic consulting and long-term growth planning for enterprises."
  },

  {
    id:2,
    title:"Cloud Infrastructure",
    image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    desc:"Scalable cloud systems and enterprise-level infrastructure management."
  },

  {
    id:3,
    title:"Digital Innovation",
    image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    desc:"Modern digital transformation services for future-ready businesses."
  },

  {
    id:4,
    title:"Cyber Security",
    image:"https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
    desc:"Advanced protection systems and secure enterprise architectures."
  },

  {
    id:5,
    title:"UI/UX Design",
    image:"https://images.unsplash.com/photo-1559028012-481c04fa702d",
    desc:"Premium user experiences and modern digital product interfaces."
  },

  {
    id:6,
    title:"Data Analytics",
    image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    desc:"Intelligent data-driven insights for enterprise decision making."
  }
]

export default function ServicesPage() {
  return (
    <main className="pt-40 max-w-7xl mx-auto px-6 pb-28">

      <div className="text-center mb-20">

        <p className="text-indigo-600 font-semibold mb-4">
          Our Expertise
        </p>

        <h1 className="text-6xl font-black mb-8">
          Enterprise Solutions & Services
        </h1>

        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-9">
          We provide innovative business technologies, enterprise infrastructure, and scalable corporate systems for modern organizations worldwide.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-10">

        {services.map((service)=>(

          <Link
            key={service.id}
            href={`/services/${service.id}`}
          >

            <div className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-4 transition duration-300 cursor-pointer">

              <img
                src={service.image}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <h2 className="text-3xl font-black mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-600 leading-8 mb-5">
                  {service.desc}
                </p>

                <span className="text-indigo-600 font-semibold">
                  Learn More →
                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </main>
  )
}