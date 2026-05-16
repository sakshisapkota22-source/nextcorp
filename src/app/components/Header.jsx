"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto mt-5 px-6">

        <div className="bg-white/75 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-full px-8 py-5 flex justify-between items-center">

          <Link
            href="/"
            className="flex items-center gap-4 group"
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
              alt="Vertexis Logo"
              className="w-12 h-12 group-hover:rotate-6 transition duration-300"
            />

            <span className="text-3xl font-black text-[#0f172a] tracking-tight">
              Vertexis
            </span>

          </Link>

          <nav className="flex items-center gap-3">

            <Link
              href="/"
              className="px-5 py-3 rounded-full text-[#334155] font-semibold hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-md transition-all duration-300"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="px-5 py-3 rounded-full text-[#334155] font-semibold hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-md transition-all duration-300"
            >
              About
            </Link>

            <Link
              href="/services"
              className="px-5 py-3 rounded-full text-[#334155] font-semibold hover:bg-purple-50 hover:text-purple-700 hover:shadow-md transition-all duration-300"
            >
              Services
            </Link>

            <Link
              href="/projects"
              className="px-5 py-3 rounded-full text-[#334155] font-semibold hover:bg-pink-50 hover:text-pink-700 hover:shadow-md transition-all duration-300"
            >
              Projects
            </Link>

            <Link
              href="/team"
              className="px-5 py-3 rounded-full text-[#334155] font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-md transition-all duration-300"
            >
              Team
            </Link>

            <Link
              href="/contact"
              className="ml-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Contact
            </Link>

          </nav>

        </div>

      </div>

    </header>
  )
}