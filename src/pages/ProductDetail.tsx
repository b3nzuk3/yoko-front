import { useState } from 'react'
import {
  Heart,
  Share2,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
  RotateCcw,
  Shield,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import product1 from '@/assets/product-1.jpg'
import product2 from '@/assets/product-2.jpg'
import product3 from '@/assets/product-3.jpg'
import product4 from '@/assets/product-4.jpg'

const relatedProducts = [
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
]

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('#ff6ba6')
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = {
    id: 1,
    title: 'Silk Harmony Scarf',
    price: 89,
    originalPrice: 120,
    images: [product1, product2, product3, product4],
    colors: [
      { name: 'Pink Blush', value: '#ff6ba6' },
      { name: 'Soft Rose', value: '#ff9ccf' },
      { name: 'Classic Black', value: '#000000' },
    ],
    sizes: ['One Size'],
    description:
      'Crafted from the finest mulberry silk, this harmony scarf embodies effortless elegance. Each piece tells a story of timeless sophistication, perfect for the modern woman who appreciates both comfort and style.',
    details: [
      '100% Mulberry Silk',
      'Hand-finished edges',
      'Dry clean only',
      'Made in Italy',
      'Dimensions: 70cm x 200cm',
    ],
    inStock: true,
    rating: 4.8,
    reviews: 127,
  }

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Added to cart:', {
      product: product.id,
      size: selectedSize,
      color: selectedColor,
      quantity,
    })
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-primary smooth-transition">
            Home
          </a>
          <span className="mx-2">/</span>
          <a
            href="/collection"
            className="hover:text-primary smooth-transition"
          >
            Collection
          </a>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-2xl bg-card">
              <img
                src={product.images[currentImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden ${
                    currentImageIndex === index ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} view ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 smooth-transition"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-serif font-bold mb-2">
                {product.title}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    Save ${product.originalPrice - product.price}
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex text-yellow-500">{'★'.repeat(5)}</div>
                <span>{product.rating}</span>
                <span>•</span>
                <span>{product.reviews} reviews</span>
              </div>
            </div>

            <Separator />

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color.value
                        ? 'border-foreground scale-110'
                        : 'border-border'
                    } smooth-transition`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {product.colors.find((c) => c.value === selectedColor)?.name}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-medium w-8 text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart - ${product.price * quantity}
              </Button>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart
                    className={`h-5 w-5 mr-2 ${
                      isWishlisted ? 'fill-current text-primary' : ''
                    }`}
                  />
                  {isWishlisted ? 'Saved' : 'Save'}
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-4 w-4 text-muted-foreground" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="h-4 w-4 text-muted-foreground" />
                <span>30-day free returns</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-4 w-4 text-muted-foreground" />
                <span>Secure payment protection</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">
                Reviews ({product.reviews})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </TabsContent>

            <TabsContent value="details" className="mt-6">
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {detail}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="text-center py-8">
                <p className="text-muted-foreground">Reviews coming soon</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">
            Complete the Look
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
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
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ProductDetail
