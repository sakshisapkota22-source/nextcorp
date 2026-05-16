"use client"

import Link from "next/link"

const projects = [
  {
    id:1,
    title:"Fintech Dashboard",
    image:"https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    desc:"Modern enterprise finance management system."
  },

  {
    id:2,
    title:"Corporate Analytics Platform",
    image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    desc:"Advanced analytics and reporting platform."
  },

  {
    id:3,
    title:"Cloud Management System",
    image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    desc:"Scalable cloud infrastructure management."
  },

  {
    id:4,
    title:"Enterprise CRM",
    image:"https://images.unsplash.com/photo-1552664730-d307ca884978",
    desc:"Business relationship and customer management."
  }
]

export default function ProjectsPage() {
  return (
    <main className="pt-40 max-w-7xl mx-auto px-6 pb-28">

      <div className="text-center mb-20">

        <p className="text-indigo-600 font-semibold mb-4">
          Portfolio
        </p>

        <h1 className="text-6xl font-black mb-8">
          Featured Projects
        </h1>

      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {projects.map(project=>(

          <Link
            key={project.id}
            href={`/projects/${project.id}`}
          >

            <div className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-4 transition duration-300 cursor-pointer">

              <img
                src={project.image}
                className="w-full h-80 object-cover"
              />

              <div className="p-8">

                <h2 className="text-4xl font-black mb-4">
                  {project.title}
                </h2>

                <p className="text-gray-600 leading-8">
                  {project.desc}
                </p>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </main>
  )
}