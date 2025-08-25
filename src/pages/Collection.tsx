import { useState } from 'react'
import { Search, Filter, Grid, List, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import ProductCard from '@/components/ProductCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
    category: 'accessories',
    sizes: ['One Size'],
  },
  {
    id: 2,
    title: 'Minimalist Leather Tote',
    price: 245,
    image: product2,
    colors: ['#fff5e6', '#ff6ba6', '#000000'],
    category: 'bags',
    sizes: ['Small', 'Medium', 'Large'],
  },
  {
    id: 3,
    title: 'Rose Gold Statement Ring',
    price: 156,
    image: product3,
    colors: ['#ffd700', '#ff6ba6'],
    category: 'jewelry',
    sizes: ['5', '6', '7', '8', '9'],
  },
  {
    id: 4,
    title: 'Contemporary Sunglasses',
    price: 128,
    originalPrice: 160,
    image: product4,
    colors: ['#000000', '#ff6ba6'],
    category: 'accessories',
    sizes: ['One Size'],
  },
  {
    id: 5,
    title: 'Elegant Chain Necklace',
    price: 198,
    image: product3,
    colors: ['#ffd700', '#c0c0c0'],
    category: 'jewelry',
    sizes: ['16in', '18in', '20in'],
  },
  {
    id: 6,
    title: 'Structured Crossbody',
    price: 189,
    image: product2,
    colors: ['#000000', '#fff5e6', '#ff6ba6'],
    category: 'bags',
    sizes: ['Small', 'Medium'],
  },
  {
    id: 7,
    title: 'Delicate Stud Earrings',
    price: 78,
    image: product3,
    colors: ['#ffd700', '#ff6ba6'],
    category: 'jewelry',
    sizes: ['One Size'],
  },
  {
    id: 8,
    title: 'Canvas Weekend Bag',
    price: 156,
    image: product2,
    colors: ['#fff5e6', '#000000'],
    category: 'bags',
    sizes: ['Large'],
  },
]

const Collection = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 500])

  const filteredProducts = products.filter((product) => {
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(product.category)
    ) {
      return false
    }
    if (
      selectedColors.length > 0 &&
      !product.colors.some((color) => selectedColors.includes(color))
    ) {
      return false
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false
    }
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-3">
          {['accessories', 'bags', 'jewelry'].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedCategories([...selectedCategories, category])
                  } else {
                    setSelectedCategories(
                      selectedCategories.filter((c) => c !== category)
                    )
                  }
                }}
              />
              <label htmlFor={category} className="text-sm capitalize">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Colors</h3>
        <div className="grid grid-cols-4 gap-2">
          {['#ff6ba6', '#000000', '#fff5e6', '#ffd700'].map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColors.includes(color)
                  ? 'border-foreground'
                  : 'border-border'
              }`}
              style={{ backgroundColor: color }}
              onClick={() => {
                if (selectedColors.includes(color)) {
                  setSelectedColors(selectedColors.filter((c) => c !== color))
                } else {
                  setSelectedColors([...selectedColors, color])
                }
              }}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
            className="w-full"
          />
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold mb-4">New Collection</h1>
          <p className="text-xl text-muted-foreground">
            Discover our latest pieces crafted for the modern, confident you
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>
          </div>

          <div className="flex gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Filter Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your search with these filters
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <FilterSidebar />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4 text-sm text-muted-foreground">
              Showing {sortedProducts.length} of {products.length} products
            </div>

            <div
              className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  colors={product.colors}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Collection
