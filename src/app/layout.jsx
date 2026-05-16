import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata = {
  title: "Vertexis",
  description: "Modern Corporate Business Website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f3f6fb] text-[#0f172a]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}