import Link from "next/link"
import { ShoppingCart } from "lucide-react"

const Navbar = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div
        className="
        flex items-center justify-between
        rounded-2xl px-6 py-4
        bg-white/60 backdrop-blur-xl
        border border-black/10
        shadow-lg
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-end gap-1">
          <h1 className="text-lg md:text-2xl font-semibold tracking-tight text-neutral-900">
            Shopping
          </h1>
          <span className="text-sm font-medium text-neutral-500 mb-0.5">
            .cart
          </span>
        </Link>

        {/* Nav */}
        <nav>
          <ul className="flex items-center gap-6 text-sm md:text-base font-medium">
            <li>
              <Link
                href="/products"
                className="
                text-neutral-600
                hover:text-neutral-900
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
                text-neutral-600
                hover:text-neutral-900
                transition-colors
                "
              >
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

