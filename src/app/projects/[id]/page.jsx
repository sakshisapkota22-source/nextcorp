"use client"

import Link from "next/link"
import { useParams } from "next/navigation"

const projects = [
  {
    id:1,
    title:"Fintech Dashboard",
    image:"https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    content:"The Fintech Dashboard project was developed to modernize enterprise financial management systems through a centralized digital platform designed for scalability, automation, and real-time analytics. The solution enables organizations to manage transactions, monitor financial performance, and generate intelligent reports through a secure and highly responsive infrastructure. Advanced visualization tools, automated workflow integrations, and enterprise-grade security systems were implemented to improve operational efficiency while reducing manual administrative processes. The platform also supports cloud synchronization, multi-user access management, and intelligent reporting systems that help financial teams make accurate strategic decisions based on real-time business data and performance metrics."
  },

  {
    id:2,
    title:"Corporate Analytics Platform",
    image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    content:"The Corporate Analytics Platform was designed to help enterprises transform complex business data into actionable insights through advanced reporting and intelligent visualization systems. The project integrated large-scale data processing capabilities, customizable dashboards, and AI-powered analytics tools that allow organizations to monitor performance indicators efficiently across multiple departments. By combining automation technologies with scalable infrastructure, the platform improved decision-making speed, optimized operational processes, and enhanced overall business intelligence capabilities. The system was developed with enterprise scalability in mind, ensuring long-term adaptability, security, and integration support for evolving corporate environments and future business expansion."
  },

  {
    id:3,
    title:"Cloud Management System",
    image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    content:"The Cloud Management System project focused on creating a secure, scalable, and high-performance infrastructure environment capable of supporting enterprise-level digital operations. The platform streamlined deployment pipelines, optimized server performance, and introduced centralized infrastructure monitoring systems that significantly improved operational efficiency. Through advanced cloud architecture and automation technologies, businesses were able to reduce downtime, enhance scalability, and improve overall resource management across distributed systems. The project also incorporated security monitoring, backup management, and intelligent infrastructure optimization strategies to ensure long-term reliability and performance for enterprise organizations operating in modern cloud ecosystems."
  },

  {
    id:4,
    title:"Enterprise CRM",
    image:"https://images.unsplash.com/photo-1552664730-d307ca884978",
    content:"The Enterprise CRM solution was developed to improve customer relationship management, streamline communication workflows, and strengthen organizational productivity through centralized business management systems. The platform introduced advanced automation features, customer interaction tracking, and integrated reporting tools that enabled businesses to manage client relationships more effectively while improving operational transparency. By combining scalable architecture with intuitive user experiences, the CRM system enhanced collaboration between departments, improved sales performance, and optimized customer engagement strategies. The project also supported cloud accessibility, secure enterprise integrations, and customizable workflows tailored to the operational requirements of growing organizations and global business environments."
  }
]

export default function ProjectDetailsPage() {

  const params = useParams()

  const project = projects.find(
    item => item.id === Number(params.id)
  )

  if(!project){
    return (
      <main className="pt-40 text-center min-h-screen">

        <h1 className="text-5xl font-black mb-8">
          Project Not Found
        </h1>

        <Link
          href="/projects"
          className="bg-indigo-600 text-white px-8 py-4 rounded-full"
        >
          Back To Projects
        </Link>

      </main>
    )
  }

  return (
    <main className="pt-40 max-w-5xl mx-auto px-6 pb-28">

      <img
        src={project.image}
        className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl mb-12"
      />

      <h1 className="text-6xl font-black mb-10">
        {project.title}
      </h1>

      <p className="text-lg text-gray-600 leading-9 mb-12">
        {project.content}
      </p>

      <Link
        href="/projects"
        className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
      >
        Back To Projects
      </Link>

    </main>
  )
}