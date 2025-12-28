const ProductSkeleton = () => {
  return (
    <div className="rounded-xl p-4 flex flex-col gap-3 animate-pulse">
      {/* image */}
      <div className="h-40 w-full rounded-lg bg-neutral-200" />

      {/* title */}
      <div className="h-4 w-3/4 rounded bg-neutral-200" />
      <div className="h-4 w-1/2 rounded bg-neutral-200" />

      {/* price */}
      <div className="h-6 w-20 rounded bg-neutral-200" />
    </div>
  )
}

export default ProductSkeleton
