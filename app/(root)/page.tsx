'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import ProductSkeleton from "@/components/ProductSkeletion"

type Product = {
  id: number
  title: string
  price: number
  images: string[]
}

// returing promise of product array
const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=4"
  )
  const json = await res.json()
  return json as Product[]
}

const Home = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(setData)
      .finally(() => setLoading(false))
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
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))
            : data.map((product) => (
              <div
                key={product.id}
                className="
                group rounded-2xl bg-white
                ring-1 ring-black/5
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
                "
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={product.images?.[0] || '/placeholder.png'}
                    alt={product.title}
                    className="
                    h-full w-full object-cover
                    transition-transform duration-300
                    group-hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-sm font-medium text-neutral-800 line-clamp-2">
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-semibold text-neutral-900">
                      ${product.price}
                    </span>

                    <button
                      className="
                      rounded-full px-3 py-1.5
                      text-xs font-semibold
                      bg-blue-600 text-white
                      hover:bg-blue-700
                      transition
                      "
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

    </div>
  )
}

export default Home

