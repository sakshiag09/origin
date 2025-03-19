'use client'

import Link from 'next/link'
import { Search, ShoppingCart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useSession } from 'next-auth/react'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            AI Amazona
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            
            {session ? (
              <Link href="/dashboard">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <Link href="/auth/signin">
                <Button>Sign In</Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
} 