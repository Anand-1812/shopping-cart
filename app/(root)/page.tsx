'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

type Product = {
  id: number
  title: string
  price: number
  images: string[]
}

// so, this is returing promise of product array
const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=4"
  )
  const json = await res.json()
  return json as Product[]
}

const Home = () => {
  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    getProducts().then(setData)
  }, [])

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto flex flex-col">

      {/* HERO */}
      <section className="pt-36 pb-28 md:pb-28 flex flex-col items-center">
        <h1 className="font-medium text-4xl md:text-7xl text-center tracking-tight">
          Fast shopping, fair prices
        </h1>

        <p className="mt-4 md:max-w-2xl text-center text-md md:text-xl text-neutral-500">
          Browse quality products with a smooth, lightning-fast experience.
        </p>

        <div className="flex items-center mt-8">
          <Link
            href="/products"
            className="
            bg-[#2579f4] text-white px-6 py-3 rounded-xl font-semibold
            shadow-lg tracking-wide
            hover:bg-[#1f6fe0] transition-colors
            "
          >
            Start shopping →
          </Link>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="pb-32">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-medium">Our products</h2>
          <p className="mt-2 text-neutral-500">
            A quick look at what we offer
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {data.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border p-4 flex flex-col gap-3"
            >
              <img
                src={product.images?.[0]}
                alt={product.title}
                className="h-40 w-full object-cover rounded-lg"
              />

              <h3 className="font-medium line-clamp-2">
                {product.title}
              </h3>

              <p className="text-sm font-semibold text-blue-600 bg-blue-500/10 px-2 py-1 rounded-lg w-fit">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home

