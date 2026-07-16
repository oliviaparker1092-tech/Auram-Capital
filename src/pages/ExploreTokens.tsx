import React, { useState } from 'react'
import { Card, Button, Input, ProgressBar } from '@/components'
import { usePlatformStore } from '@/stores/platformStore'
import { Search, Filter, TrendingUp } from 'lucide-react'
import { useTokenStore } from '@/stores/tokenStore'

const ExploreTokens: React.FC = () => {
  const { mode } = usePlatformStore()
  const { tokens } = useTokenStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('trending')

  const filteredTokens = tokens.filter((token) =>
    token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    token.ticker.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-degen-background text-degen-text py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">🔍 Explore Tokens</h1>
          <p className="text-gray-400">Discover and invest in the latest meme tokens</p>
        </div>

        {/* Search & Filter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" />
              <Input
                mode="degen"
                placeholder="Search tokens..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select
              className="flex-1 px-4 py-2 bg-degen-surface border border-degen-border text-degen-text rounded-lg focus:outline-none focus:ring-2 focus:ring-degen-primary"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="trending">Trending</option>
              <option value="new">New</option>
              <option value="volume">Volume</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>

        {/* Tokens Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTokens.map((token) => (
            <Card key={token.id} mode="degen" className="hover:border-degen-primary transition-all hover:shadow-lg hover:shadow-degen-primary/20">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{token.image}</div>
                  <div>
                    <p className="font-bold">{token.name}</p>
                    <p className="text-xs text-gray-400">{token.ticker}</p>
                  </div>
                </div>
                <TrendingUp className="text-degen-accent1" />
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-4">{token.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                <div>
                  <p className="text-gray-400">Price</p>
                  <p className="font-bold text-degen-accent1">${token.currentPrice.toFixed(3)}</p>
                </div>
                <div>
                  <p className="text-gray-400">Holders</p>
                  <p className="font-bold text-degen-accent2">{token.holders}</p>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <ProgressBar
                  mode="degen"
                  progress={token.bondingCurveProgress}
                  label={`${token.bondingCurveProgress}% Bonding Curve`}
                  showPercentage={false}
                />
              </div>

              {/* Raised */}
              <div className="mb-4 text-sm">
                <p className="text-gray-400">
                  ${token.totalRaised.toLocaleString()} / ${token.targetRaise.toLocaleString()}
                </p>
              </div>

              {/* Action */}
              <Button mode="degen" className="w-full">
                Invest Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExploreTokens
