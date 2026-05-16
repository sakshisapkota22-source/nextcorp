"use client"

import Link from "next/link"
import { useParams } from "next/navigation"

const services = [
  {
    id:1,
    title:"Business Strategy",
    image:"https://images.unsplash.com/photo-1552664730-d307ca884978",
    content:"Our Business Strategy solutions help organizations develop long-term growth plans, improve operational efficiency, and build competitive market advantages. We work closely with enterprises to identify opportunities, streamline workflows, and implement scalable strategies tailored to evolving business demands. Through market research, organizational analysis, and digital transformation planning, we help companies strengthen their leadership position while maintaining sustainable growth across global industries."
  },

  {
    id:2,
    title:"Cloud Infrastructure",
    image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    content:"Vertexis delivers secure and scalable cloud infrastructure services designed for modern enterprise environments. Our cloud solutions improve performance, enhance data accessibility, and ensure reliable system operations across business networks. From migration and deployment to monitoring and optimization, we provide complete cloud architecture management that supports flexibility, efficiency, and long-term digital scalability for organizations worldwide."
  },

  {
    id:3,
    title:"Digital Innovation",
    image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    content:"Digital Innovation services at Vertexis focus on transforming traditional business models into modern digital ecosystems. We integrate advanced technologies, automation systems, and intelligent business processes to improve customer experiences and organizational productivity. Our team develops innovative solutions that help enterprises adapt to changing market trends while maintaining efficiency, scalability, and future-readiness in competitive industries."
  },

  {
    id:4,
    title:"Cyber Security",
    image:"https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
    content:"Our Cyber Security solutions are designed to protect enterprise systems, digital infrastructure, and sensitive organizational data from modern cyber threats. We implement advanced protection strategies, threat monitoring systems, and secure architecture frameworks to ensure business continuity and operational safety. Vertexis helps organizations strengthen security standards while maintaining compliance, risk management, and long-term digital protection."
  },

  {
    id:5,
    title:"UI/UX Design",
    image:"https://images.unsplash.com/photo-1559028012-481c04fa702d",
    content:"Vertexis creates modern UI/UX experiences focused on usability, aesthetics, and customer engagement. Our design approach combines visual creativity with user-centered functionality to deliver intuitive and impactful digital experiences. From enterprise platforms to customer-facing applications, we design interfaces that improve accessibility, enhance user satisfaction, and strengthen overall digital brand identity."
  },

  {
    id:6,
    title:"Data Analytics",
    image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    content:"Our Data Analytics services enable businesses to transform raw information into actionable insights that support strategic decision-making. Through advanced reporting systems, performance visualization, and intelligent data processing, Vertexis helps organizations improve operational efficiency and identify growth opportunities. We develop scalable analytics frameworks that empower enterprises to make accurate, data-driven business decisions in real time."
  }
]

export default function ServiceDetailsPage() {

  const params = useParams()

  const service = services.find(
    item => item.id === Number(params.id)
  )

  if(!service){
    return (
      <main className="pt-40 text-center min-h-screen">

        <h1 className="text-5xl font-black mb-8">
          Service Not Found
        </h1>

        <Link
          href="/services"
          className="bg-indigo-600 text-white px-8 py-4 rounded-full"
        >
          Back To Services
        </Link>

      </main>
    )
  }

  return (
    <main className="pt-40 max-w-5xl mx-auto px-6 pb-28">

      <img
        src={service.image}
        className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl mb-12"
      />

      <h1 className="text-6xl font-black mb-10">
        {service.title}
      </h1>

      <p className="text-lg text-gray-600 leading-9 mb-12">
        {service.content}
      </p>

      <Link
        href="/services"
        className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
      >
        Back To Services
      </Link>

    </main>
  )
}