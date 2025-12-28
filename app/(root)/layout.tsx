import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto w-full px-4">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default RootLayout
