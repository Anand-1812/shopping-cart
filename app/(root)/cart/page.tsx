'use client'

import { useCart } from "@/context/CartContext"
import { toast } from "sonner"

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart()

  // Empty cart state
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <h1 className="text-3xl font-semibold text-neutral-700">
          Your cart is empty
        </h1>
      </div>
    )
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleBuy = () => {
    toast.success("Order placed successfully 🎉", {
      description: "Thanks for shopping with us!",
    })

    clearCart()
  }

  const handleRemove = (id: number) => {
    removeFromCart(id)
    toast.info("Item removed from cart")
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 pt-32 pb-20">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight">
          Your Cart
        </h1>
        <p className="mt-1 text-neutral-500">
          Review your items before checkout
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        {/* LEFT: Cart Items */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="
                flex items-center justify-between
                rounded-2xl bg-white
                ring-1 ring-black/5
                px-5 py-4
                transition hover:shadow-md
              "
            >
              <div className="flex flex-col gap-1">
                <h2 className="font-medium text-neutral-900">
                  {item.title}
                </h2>
                <p className="text-sm text-neutral-500">
                  ${item.price} × {item.quantity}
                </p>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="
                  text-sm font-medium text-red-500
                  hover:text-red-600
                  transition
                "
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT: Order Summary */}
        <div
          className="
            sticky top-36
            rounded-2xl bg-white
            ring-1 ring-black/5
            p-6 flex flex-col gap-6
          "
        >
          <h2 className="text-xl font-semibold">
            Order Summary
          </h2>

          <div className="flex justify-between text-sm text-neutral-600">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <button
            onClick={handleBuy}
            className="
              mt-4 w-full rounded-xl
              bg-blue-600 py-3
              text-white font-semibold
              hover:bg-blue-700
              transition
            "
          >
            Buy items
          </button>

          <p className="text-xs text-neutral-400 text-center">
            Demo checkout · No real payments
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cart

