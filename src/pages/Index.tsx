import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedCollections from '@/components/FeaturedCollections'
import TrendingProducts from '@/components/TrendingProducts'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedCollections />
        <TrendingProducts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default Index
