import React, { useState } from 'react'
import { Navbar, Card, Button, Input, Chart } from '@/components'
import { usePlatformStore } from '@/stores/platformStore'
import { useTokenStore } from '@/stores/tokenStore'
import { TrendingUp, Users, Zap } from 'lucide-react'

const DegenTerminal: React.FC = () => {
  const { mode, setMode } = usePlatformStore()
  const { tokens } = useTokenStore()
  const [menuOpen, setMenuOpen] = useState(false)

  const chartData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
  ]

  return (
    <div className="min-h-screen bg-degen-background text-degen-text">
      <Navbar
        mode="degen"
        onModeChange={setMode}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-degen-primary">
            🚀 The Meme Terminal
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Launch, trade, and moon-shot your favorite memes
          </p>
          <div className="flex gap-4 justify-center">
            <Button mode="degen" size="lg">
              Create Token
            </Button>
            <Button mode="degen" variant="outline" size="lg">
              Explore Tokens
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card mode="degen">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Tokens</p>
                <p className="text-3xl font-bold text-degen-primary mt-2">1,240</p>
              </div>
              <Zap size={40} className="text-degen-accent1" />
            </div>
          </Card>
          <Card mode="degen">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">24h Volume</p>
                <p className="text-3xl font-bold text-degen-accent1 mt-2">$2.4M</p>
              </div>
              <TrendingUp size={40} className="text-degen-accent2" />
            </div>
          </Card>
          <Card mode="degen">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Traders</p>
                <p className="text-3xl font-bold text-degen-accent2 mt-2">18.5K</p>
              </div>
              <Users size={40} className="text-degen-primary" />
            </div>
          </Card>
        </div>
      </section>

      {/* Chart Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card mode="degen" className="p-6">
          <Chart mode="degen" data={chartData} title="Trading Volume (24h)" />
        </Card>
      </section>

      {/* Featured Tokens */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Tokens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tokens.map((token) => (
            <Card key={token.id} mode="degen" className="hover:border-degen-primary transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{token.image}</div>
                <div>
                  <p className="font-bold text-lg">{token.name}</p>
                  <p className="text-gray-400 text-sm">{token.ticker}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">{token.description}</p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Price</span>
                  <span className="text-degen-accent1">${token.currentPrice.toFixed(3)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Holders</span>
                  <span className="text-degen-accent2">{token.holders.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">24h Volume</span>
                  <span className="text-degen-primary">${(token.volume24h / 1000).toFixed(1)}K</span>
                </div>
              </div>
              <div className="w-full h-1 bg-degen-surface rounded mb-3">
                <div
                  className="h-full bg-gradient-to-r from-degen-primary to-degen-accent1 rounded"
                  style={{ width: `${token.bondingCurveProgress}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mb-4">
                {token.bondingCurveProgress}% bonding curve
              </p>
              <Button mode="degen" className="w-full">
                Trade Now
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card mode="degen" className="bg-gradient-to-r from-degen-primary/20 to-degen-accent1/20 border-degen-primary/50">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Launch?</h2>
            <p className="text-gray-400 mb-8">Create your own meme token and start building community</p>
            <Button mode="degen" size="lg">
              Launch Token Now
            </Button>
          </div>
        </Card>
      </section>
    </div>
  )
}

export default DegenTerminal
