'use client'

import { useEffect, useState } from "react"
import ProductSkeleton from "@/components/ProductSkeletion"

type Product = {
  id: number
  title: string
  price: number
  images: string[]
}

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=14&limit=20"
  )

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto px-4 pt-32">
      {/* HEADER */}
      <section className="pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Products
        </h1>
        <p className="mt-3 text-neutral-500">
          Explore our collection of quality items
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section className="pb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))
            : products.map((product) => {
              const image =
                product.images?.find(
                  (img) => img && img.startsWith("http")
                ) || "/placeholder.png"

              return (
                <div
                  key={product.id}
                  className="
                  group relative overflow-hidden
                  rounded-2xl bg-white
                  ring-1 ring-black/5
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                  "
                >
                  {/* IMAGE */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={image}
                      alt={product.title}
                      className="
                      h-full w-full object-cover
                      transition-transform duration-500
                      sm:group-hover:scale-105
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 flex flex-col gap-3">
                    <h3 className="text-sm sm:text-base font-medium text-neutral-800 line-clamp-2">
                      {product.title}
                    </h3>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-base sm:text-lg font-semibold text-neutral-900">
                        ${product.price}
                      </span>

                      <button
                        className="cursor-pointer
                        rounded-full px-4 py-1.5
                        text-xs sm:text-sm font-semibold
                        bg-blue-600 text-white
                        hover:bg-blue-700
                        transition
                        sm:opacity-0 sm:group-hover:opacity-100
                        sm:translate-y-2 sm:group-hover:translate-y-0
                        "
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </section>
    </div>
  )
}

export default Products

