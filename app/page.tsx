import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { MiniCart } from "@/components/mini-cart"
import { products } from "@/lib/products"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MiniCart />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Our Products</h2>
          <p className="text-muted-foreground">Discover our curated collection of quality items</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}
