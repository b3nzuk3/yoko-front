import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import product1 from '@/assets/product-1.jpg'
import product2 from '@/assets/product-2.jpg'
import product3 from '@/assets/product-3.jpg'
import product4 from '@/assets/product-4.jpg'

const products = [
  {
    id: 1,
    title: 'Silk Harmony Scarf',
    price: 89,
    originalPrice: 120,
    image: product1,
    colors: ['#ff6ba6', '#ff9ccf', '#000000'],
  },
  {
    id: 2,
    title: 'Minimalist Leather Tote',
    price: 245,
    image: product2,
    colors: ['#fff5e6', '#ff6ba6', '#000000'],
  },
  {
    id: 3,
    title: 'Rose Gold Statement Ring',
    price: 156,
    image: product3,
    colors: ['#ffd700', '#ff6ba6'],
  },
  {
    id: 4,
    title: 'Contemporary Sunglasses',
    price: 128,
    originalPrice: 160,
    image: product4,
    colors: ['#000000', '#ff6ba6'],
  },
  {
    id: 5,
    title: 'Elegant Chain Necklace',
    price: 198,
    image: product3,
    colors: ['#ffd700', '#c0c0c0'],
  },
  {
    id: 6,
    title: 'Structured Crossbody',
    price: 189,
    image: product2,
    colors: ['#000000', '#fff5e6', '#ff6ba6'],
  },
]

const NewArrivals = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1">
        <div className="mb-8">
          <h1 className="font-serif font-bold mb-3">New Arrivals</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Fresh drops curated weekly. Explore the latest pieces designed to
            pair effortlessly with your wardrobe.
          </p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              image={p.image}
              title={p.title}
              price={p.price}
              originalPrice={p.originalPrice}
              colors={p.colors as string[]}
            />
          ))}
        </section>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            End of new arrivals. Check back next week for fresh drops.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NewArrivals
