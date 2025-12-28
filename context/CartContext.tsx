'use client'

import { createContext, useContext, useState } from "react"

// create a cart item similar to product items
type CartItem = {
  id: number
  title: string
  price: number
  quantity: number
}

// card context of consist of cart item and add to cart function
type CartContextType = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}

