"use client"

import { useState } from "react"

export default function ContactPage() {

  const [form,setForm] = useState({
    name:"",
    email:"",
    company:"",
    message:""
  })

  const [success,setSuccess] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    if(
      form.name &&
      form.email.includes("@") &&
      form.company &&
      form.message
    ){
      setSuccess("Message Sent Successfully!")

      setForm({
        name:"",
        email:"",
        company:"",
        message:""
      })
    }

    else{
      setSuccess("Please fill all fields correctly.")
    }
  }

  return (
    <main className="pt-40 max-w-5xl mx-auto px-6 pb-28">

      <div className="text-center mb-20">

        <p className="text-indigo-600 font-semibold mb-4">
          Get In Touch
        </p>

        <h1 className="text-6xl font-black mb-8">
          Contact Our Team
        </h1>

      </div>

      <div className="bg-white rounded-[40px] shadow-2xl p-12">

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          <div className="grid md:grid-cols-2 gap-8">

            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e)=>setForm({...form,name:e.target.value})}
              className="w-full border border-gray-300 px-6 py-5 rounded-2xl outline-none focus:border-indigo-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e)=>setForm({...form,email:e.target.value})}
              className="w-full border border-gray-300 px-6 py-5 rounded-2xl outline-none focus:border-indigo-600"
            />

          </div>

          <input
            type="text"
            placeholder="Company Name"
            value={form.company}
            onChange={(e)=>setForm({...form,company:e.target.value})}
            className="w-full border border-gray-300 px-6 py-5 rounded-2xl outline-none focus:border-indigo-600"
          />

          <textarea
            rows="6"
            placeholder="Message"
            value={form.message}
            onChange={(e)=>setForm({...form,message:e.target.value})}
            className="w-full border border-gray-300 px-6 py-5 rounded-2xl outline-none focus:border-indigo-600"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-10 py-5 rounded-full font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>

          <p className="text-indigo-600 font-semibold text-lg">
            {success}
          </p>

        </form>

      </div>

    </main>
  )
}