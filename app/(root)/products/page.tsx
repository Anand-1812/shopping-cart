'use client';

import { useEffect, useState } from "react";

type Product = {
  id: number
  title: string
  price: number
  images: string[]
}

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=30")

  if (!res)
    throw new Error("Data fetching error.")

  const data = await res.json();

  return data as Product[]
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
  })

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto">

    </div>
  )
}

export default Products
