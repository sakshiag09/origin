import { Carousel } from '@/components/ui/carousel'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

// Temporary banner data - will be replaced with CMS data later
const banners = [
  {
    id: 1,
    title: 'Summer Collection',
    description: 'Get ready for summer with our latest collection',
    image: '/images/banner1.jpg',
    link: '/category/summer',
  },
  {
    id: 2,
    title: 'New Arrivals',
    description: 'Check out our newest products',
    image: '/images/banner2.jpg',
    link: '/new-arrivals',
  },
  {
    id: 3,
    title: 'Special Offers',
    description: 'Limited time deals on selected items',
    image: '/images/banner3.jpg',
    link: '/special-offers',
  },
]

// Temporary product data - will be replaced with database data later
const latestProducts = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: '/images/c-tshirt.jpg',
    category: 'T-Shirts',
  },
  {
    id: 2,
    name: 'Blue Denim Jeans',
    price: 79.99,
    image: '/images/c-jeans.jpg',
    category: 'Jeans',
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 119.99,
    image: '/images/c-shoes.jpg',
    category: 'Shoes',
  },
  // Add more products as needed
]

export default function HomePage() {
  return (
    <div className="space-y-12 py-8">
      {/* Banner Carousel */}
      <section className="container mx-auto px-4">
        <Carousel className="w-full">
          {banners.map((banner) => (
            <div key={banner.id} className="relative h-[400px] w-full">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover rounded-lg"
                priority={banner.id === 1}
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                <p className="text-lg mb-6">{banner.description}</p>
                <Link href={banner.link}>
                  <Button size="lg" variant="secondary">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Latest Products */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Latest Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <p className="font-bold">${product.price.toFixed(2)}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
} 