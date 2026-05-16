export default function AboutPage() {
  return (
    <main className="pt-40 max-w-6xl mx-auto px-6 pb-24">

      <div className="text-center mb-20">

        <p className="text-indigo-600 font-semibold mb-4">
          About Us
        </p>

        <h1 className="text-6xl font-black mb-8">
          Driving Innovation For Modern Enterprises
        </h1>

        <p className="text-lg text-gray-600 leading-9 max-w-4xl mx-auto">
          NextCorp is a global corporate solutions company specializing in digital transformation, enterprise systems, and innovative business technologies. We partner with organizations worldwide to create scalable, efficient, and future-ready solutions.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-10">

        <div className="bg-white rounded-[35px] shadow-xl p-10">

          <h2 className="text-4xl font-black mb-5 text-indigo-600">
            10+
          </h2>

          <p className="text-gray-600 leading-8">
            Years delivering premium corporate and enterprise solutions.
          </p>

        </div>

        <div className="bg-white rounded-[35px] shadow-xl p-10">

          <h2 className="text-4xl font-black mb-5 text-indigo-600">
            250+
          </h2>

          <p className="text-gray-600 leading-8">
            Successful projects completed for global clients and organizations.
          </p>

        </div>

        <div className="bg-white rounded-[35px] shadow-xl p-10">

          <h2 className="text-4xl font-black mb-5 text-indigo-600">
            95%
          </h2>

          <p className="text-gray-600 leading-8">
            Client satisfaction rate across all delivered business solutions.
          </p>

        </div>

      </div>

    </main>
  )
}