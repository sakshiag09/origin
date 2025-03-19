'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, User, LogOut, X, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useSession, signIn, signOut } from 'next-auth/react'

export function Header() {
  const { data: session } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')

  // Sync search input with URL search parameter
  useEffect(() => {
    const search = searchParams.get('search')
    if (search) {
      setSearchQuery(search)
    }
  }, [searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const clearSearch = () => {
    setSearchQuery('')
    router.push('/products')
  }

  return (
    <header className='border-b'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link
              href='/'
              className='flex items-center gap-2 text-xl font-bold'
            >
              <ShoppingBag className='h-6 w-6' />
              <span>AI Amazona</span>
            </Link>
          </div>

          {/* Search */}
          <div className='hidden sm:block flex-1 max-w-2xl mx-8'>
            <form onSubmit={handleSearch} className='relative'>
              <Input
                type='search'
                placeholder='Search products...'
                className='w-full pl-10 pr-10'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400' />
              {searchQuery && (
                <Button
                  type='button'
                  variant='ghost'
                  size='icon'
                  className='absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-transparent'
                  onClick={clearSearch}
                >
                  <X className='h-4 w-4 text-gray-400' />
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}
