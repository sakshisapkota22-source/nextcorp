const team = [
  {
    name:"Sophia Carter",
    role:"Chief Executive Officer",
    image:"https://randomuser.me/api/portraits/women/44.jpg"
  },

  {
    name:"Michael Johnson",
    role:"Lead Software Architect",
    image:"https://randomuser.me/api/portraits/men/32.jpg"
  },

  {
    name:"Emily Brown",
    role:"Creative Director",
    image:"https://randomuser.me/api/portraits/women/68.jpg"
  },

  {
    name:"David Wilson",
    role:"Cloud Infrastructure Specialist",
    image:"https://randomuser.me/api/portraits/men/75.jpg"
  }
]

export default function TeamPage() {
  return (
    <main className="pt-40 max-w-7xl mx-auto px-6 pb-28">

      <div className="text-center mb-20">

        <p className="text-indigo-600 font-semibold mb-4">
          Our Experts
        </p>

        <h1 className="text-6xl font-black mb-8">
          Meet Our Leadership Team
        </h1>

      </div>

      <div className="grid md:grid-cols-4 gap-10">

        {team.map((member,index)=>(

          <div
            key={index}
            className="bg-white rounded-[35px] shadow-xl overflow-hidden hover:-translate-y-4 transition duration-300"
          >

            <img
              src={member.image}
              className="w-full h-80 object-cover"
            />

            <div className="p-8 text-center">

              <h2 className="text-2xl font-black mb-3">
                {member.name}
              </h2>

              <p className="text-indigo-600 font-semibold">
                {member.role}
              </p>

            </div>

          </div>

        ))}

      </div>

    </main>
  )
}