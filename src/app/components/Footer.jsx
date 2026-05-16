"use client"

import { useState } from "react"

export default function Footer() {

  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  const subscribe = () => {

    if(email.includes("@")){
      setMessage("Subscribed Successfully!")
      setEmail("")
    }

    else{
      setMessage("Please enter valid email")
    }
  }

  return (
    <footer className="mt-28 bg-[#0f172a] text-white rounded-t-[60px] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-16">

          <div>

            <div className="flex items-center gap-4 mb-6">

              <img
                src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
                alt="Vertexis Logo"
                className="w-14 h-14"
              />

              <h2 className="text-5xl font-black">
                Vertexis
              </h2>

            </div>

            <p className="text-gray-300 leading-8">
              Helping ambitious businesses scale through innovative technology, modern digital systems, and strategic transformation. Vertexis delivers future-ready enterprise solutions for organizations worldwide.
            </p>

          </div>

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Newsletter
            </h3>

            <p className="text-gray-300 mb-6 leading-8">
              Subscribe to receive the latest updates, insights, enterprise trends, and business innovation news from Vertexis.
            </p>

            <div className="bg-white/10 border border-white/20 rounded-[28px] p-4 backdrop-blur-md shadow-xl">

              <div className="flex flex-col sm:flex-row gap-3">

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="flex-1 min-w-0 bg-white text-black px-5 py-4 rounded-2xl outline-none border-2 border-transparent focus:border-cyan-400 shadow-lg"
                />

                <button
                  onClick={subscribe}
                  className="whitespace-nowrap bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-6 py-4 rounded-2xl font-semibold hover:scale-[1.02] hover:shadow-2xl transition duration-300"
                >
                  Subscribe
                </button>

              </div>

            </div>

            <p className="mt-4 text-cyan-400 font-medium">
              {message}
            </p>

          </div>

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="bg-white/10 border border-white/10 rounded-2xl p-5">

                <p className="text-sm uppercase tracking-widest text-cyan-400 mb-2">
                  Location
                </p>

                <p>
                  Kathmandu, Nepal
                </p>

              </div>

              <div className="bg-white/10 border border-white/10 rounded-2xl p-5">

                <p className="text-sm uppercase tracking-widest text-cyan-400 mb-2">
                  Email
                </p>

                <p>
                  contact@vertexis.com
                </p>

              </div>

              <div className="bg-white/10 border border-white/10 rounded-2xl p-5">

                <p className="text-sm uppercase tracking-widest text-cyan-400 mb-2">
                  Phone
                </p>

                <p>
                  +977 9800000000
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 py-6 text-center text-gray-400 bg-[#0b1120]">
        © 2026 Vertexis. All rights reserved.
      </div>

    </footer>
  )
}