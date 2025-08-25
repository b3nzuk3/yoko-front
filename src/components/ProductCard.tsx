import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

interface ProductCardProps {
  id?: number
  image: string
  title: string
  price: number
  originalPrice?: number
  colors?: string[]
}

const ProductCard = ({
  id = 1,
  image,
  title,
  price,
  originalPrice,
  colors = [],
}: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group cursor-pointer block">
      <div className="relative overflow-hidden rounded-[12px] bg-card fashion-shadow hover:card-shadow smooth-transition">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 slow-transition"
          />
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background/90 opacity-0 group-hover:opacity-100 smooth-transition"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick View Button */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 smooth-transition">
          <Button variant="secondary" className="w-full">
            Quick View
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-2">
        <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary smooth-transition">
          {title}
        </h3>

        {/* Color Swatches */}
        {colors.length > 0 && (
          <div className="flex gap-1">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-foreground">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
