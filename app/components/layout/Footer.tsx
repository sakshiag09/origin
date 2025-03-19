import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold mb-4">AI Amazona</h3>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for all your shopping needs. Quality products at competitive prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:underline">Contact</Link></li>
              <li><Link href="/faq" className="text-sm hover:underline">FAQ</Link></li>
              <li><Link href="/shipping" className="text-sm hover:underline">Shipping Info</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/t-shirts" className="text-sm hover:underline">T-Shirts</Link></li>
              <li><Link href="/category/jeans" className="text-sm hover:underline">Jeans</Link></li>
              <li><Link href="/category/shoes" className="text-sm hover:underline">Shoes</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AI Amazona. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 