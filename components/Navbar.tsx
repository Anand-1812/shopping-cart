import Link from "next/link"
import { ShoppingCart } from "lucide-react"

const Navbar = () => {
  return (
    <div className="mx-auto fixed left-1/2 -translate-x-1/2 w-full max-w-4xl mt-4 px-4">
      <div
        className="
          flex items-center justify-between
          rounded-2xl px-6 py-3

          bg-white/30
          backdrop-blur-xl
          border border-white/20
          shadow-lg shadow-black/40
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-end gap-1">
          <h1 className="text-md md:text-3xl font-bold tracking-tight text-glass">
            Shopping
          </h1>
          <span className="text-sm font-medium text-black/60 mb-1 text-glass-muted">
            .cart
          </span>
        </Link>

        {/* Nav */}
        <nav>
          <ul className="flex items-center gap-6 text-lg font-medium">
            <li>
              <Link
                href="/products"
                className="
                  text-black/70 text-glass
                  hover:text-black
                  transition-colors
                "
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                href="/cart"
                className="
                  text-black/70 text-glass-muted
                  hover:text-black
                  transition-colors
                "
              >
                <ShoppingCart className="h-6 w-6" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

