"use client"

import Link from "next/link"

const services = [
  {
    title:"Business Strategy",
    image:"https://images.unsplash.com/photo-1552664730-d307ca884978",
    desc:"Helping enterprises build scalable long-term business solutions."
  },

  {
    title:"Cloud Infrastructure",
    image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    desc:"Advanced cloud architecture and enterprise infrastructure systems."
  },

  {
    title:"Digital Innovation",
    image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    desc:"Modern digital transformation services for growing businesses."
  }
]

export default function HomePage() {

  return (
    <main className="pt-36">

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          <div>

            <div className="inline-block px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold mb-8">
              Leading Corporate Solutions
            </div>

            <h1 className="text-7xl font-black leading-tight text-[#0f172a] mb-8">
              Building Future Focused Businesses
            </h1>

            <p className="text-lg text-gray-600 leading-9 mb-10">
              NextCorp delivers premium business solutions, enterprise technologies, and strategic digital innovation for ambitious organizations worldwide.
            </p>

            <div className="flex gap-5">

              <Link
                href="/services"
                className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Explore Services
              </Link>

              <Link
                href="/projects"
                className="border-2 border-[#0f172a] px-8 py-4 rounded-full font-semibold hover:bg-[#0f172a] hover:text-white transition"
              >
                View Projects
              </Link>

            </div>

          </div>

          <div className="relative">

            <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-50"></div>

            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
              className="relative rounded-[40px] shadow-2xl"
            />

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28">

        <div className="flex justify-between items-center mb-14">

          <div>

            <p className="text-indigo-600 font-semibold mb-3">
              What We Offer
            </p>

            <h2 className="text-5xl font-black">
              Premium Services
            </h2>

          </div>

          <Link
            href="/services"
            className="text-indigo-600 font-semibold hover:underline"
          >
            View All
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service,index)=>(

            <div
              key={index}
              className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-4 transition duration-300"
            >

              <img
                src={service.image}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-black mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-8 mb-6">
                  {service.desc}
                </p>

                <Link
                  href="/services"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Learn More
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}