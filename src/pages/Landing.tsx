import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button } from '@/components'
import { usePlatformStore } from '@/stores/platformStore'
import { ArrowRight, Rocket, Zap, Users } from 'lucide-react'

const Landing: React.FC = () => {
  const navigate = useNavigate()
  const { setMode } = usePlatformStore()

  return (
    <div className="min-h-screen bg-gradient-to-b from-degen-background via-degen-surface to-vault-background">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Degen */}
          <div className="text-degen-text">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4 text-degen-primary">🚀 The Meme Terminal</h2>
              <p className="text-xl text-gray-400 mb-6">
                Launch, trade, and pump your favorite meme tokens with structured capital backing
              </p>
              <Button
                mode="degen"
                size="lg"
                onClick={() => {
                  setMode('degen')
                  navigate('/dex')
                }}
                className="flex items-center gap-2"
              >
                Enter Degen Terminal <ArrowRight size={20} />
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Zap className="text-degen-accent1 flex-shrink-0" />
                <p className="text-gray-400">Launch tokens in seconds</p>
              </div>
              <div className="flex gap-3">
                <Rocket className="text-degen-accent2 flex-shrink-0" />
                <p className="text-gray-400">Moon-shot potential with backing</p>
              </div>
              <div className="flex gap-3">
                <Users className="text-degen-primary flex-shrink-0" />
                <p className="text-gray-400">Community-driven governance</p>
              </div>
            </div>
          </div>

          {/* Right side - VC */}
          <div className="text-vault-text">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4 text-vault-accent">💼 Venture Vault</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                Structured venture capital investing with transparent returns and portfolio management
              </p>
              <Button
                mode="vault"
                size="lg"
                onClick={() => {
                  setMode('vault')
                  navigate('/vc')
                }}
                className="flex items-center gap-2"
              >
                Enter Venture Vault <ArrowRight size={20} />
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Rocket className="text-vault-accent flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-400">Curated startup portfolio</p>
              </div>
              <div className="flex gap-3">
                <Zap className="text-vault-accent flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-400">Real-time deal flow</p>
              </div>
              <div className="flex gap-3">
                <Users className="text-vault-accent flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-400">Institutional-grade reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-degen-text">Why Auram Capital?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: '🔐 Security First',
              description: 'Enterprise-grade security with multi-signature wallets and audit trails',
              mode: 'degen' as const,
            },
            {
              title: '📊 Real-Time Analytics',
              description: 'Advanced charting, portfolio tracking, and market intelligence',
              mode: 'degen' as const,
            },
            {
              title: '🤝 Community Driven',
              description: 'Governance tokens and community voting on major decisions',
              mode: 'degen' as const,
            },
          ].map((feature, i) => (
            <Card key={i} mode={feature.mode} className="hover:border-degen-primary transition-colors">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card mode="degen" className="bg-gradient-to-r from-degen-primary/20 to-degen-accent1/20 border-degen-primary/50 text-center py-12">
          <h2 className="text-3xl font-bold mb-4 text-degen-text">Ready to Invest?</h2>
          <p className="text-gray-400 mb-8">Choose your adventure and start building wealth today</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button mode="degen" size="lg">Connect Wallet</Button>
            <Button mode="degen" variant="outline" size="lg">Learn More</Button>
          </div>
        </Card>
      </section>
    </div>
  )
}

export default Landing
