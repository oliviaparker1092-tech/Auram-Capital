import React from 'react'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  mode: 'degen' | 'vault'
  onModeChange?: (mode: 'degen' | 'vault') => void
  onMenuToggle?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ mode, onModeChange, onMenuToggle }) => {
  const isDegen = mode === 'degen'

  return (
    <nav
      className={`sticky top-0 z-50 border-b ${
        isDegen
          ? 'bg-degen-background border-degen-border'
          : 'bg-vault-background dark:bg-vault-dark border-vault-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className={`font-bold text-2xl ${isDegen ? 'text-degen-primary' : 'text-vault-accent'}`}>
            🚀 Auram
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8">
            <a
              href="/"
              className={`font-semibold transition-colors ${
                isDegen ? 'text-degen-text hover:text-degen-accent1' : 'text-vault-text hover:text-vault-accent'
              }`}
            >
              Home
            </a>
            {isDegen && (
              <>
                <a
                  href="/dex/create"
                  className="text-degen-text hover:text-degen-accent1 font-semibold transition-colors"
                >
                  Create Token
                </a>
                <a
                  href="/dex/explore"
                  className="text-degen-text hover:text-degen-accent1 font-semibold transition-colors"
                >
                  Explore
                </a>
              </>
            )}
            {mode === 'vault' && (
              <>
                <a
                  href="/vc/portfolio"
                  className="text-vault-text hover:text-vault-accent font-semibold transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="/vc/incubation"
                  className="text-vault-text hover:text-vault-accent font-semibold transition-colors"
                >
                  Incubation
                </a>
                <a
                  href="/vc/partners"
                  className="text-vault-text hover:text-vault-accent font-semibold transition-colors"
                >
                  Partners
                </a>
              </>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onModeChange?.(isDegen ? 'vault' : 'degen')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                isDegen
                  ? 'bg-degen-primary text-white hover:opacity-90'
                  : 'bg-vault-accent text-white hover:opacity-90'
              }`}
            >
              {isDegen ? 'Switch to VC' : 'Switch to Meme'}
            </button>
            <button onClick={onMenuToggle} className="md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
