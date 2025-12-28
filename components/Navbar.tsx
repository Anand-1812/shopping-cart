'use client'

import { useCart } from "@/context/CartContext"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

const Navbar = () => {
  const { cart } = useCart()

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-3 sm:px-4">
      <div
        className="
          flex items-center justify-between
          rounded-2xl px-4 sm:px-6 py-3 sm:py-4
          bg-white/70 backdrop-blur-xl
          border border-black/10
          shadow-lg
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-end gap-1">
          <h1 className="text-base sm:text-lg md:text-2xl font-semibold tracking-tight text-neutral-900">
            Shopping
          </h1>
          <span className="text-xs sm:text-sm font-medium text-neutral-500 mb-0.5">
            .cart
          </span>
        </Link>

        {/* Nav */}
        <nav>
          <ul className="flex items-center gap-4 sm:gap-6 text-sm md:text-base font-medium">
            <li className="hidden sm:block">
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
              {/* Cart icon wrapper MUST be relative */}
              <Link
                href="/cart"
                className="
                  relative flex items-center justify-center
                  h-9 w-9 sm:h-10 sm:w-10
                  rounded-full
                  hover:bg-black/5
                  transition
                "
              >
                <ShoppingCart className="h-5 w-5 text-neutral-700" />

                {cart.length > 0 && (
                  <span
                    className="
                      absolute -top-1 -right-1
                      flex h-4 w-4 sm:h-5 sm:w-5
                      items-center justify-center
                      rounded-full bg-blue-600
                      text-[10px] sm:text-xs
                      font-bold text-white
                    "
                  >
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

