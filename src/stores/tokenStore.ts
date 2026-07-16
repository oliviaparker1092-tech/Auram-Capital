import { create } from 'zustand'

export interface Token {
  id: string
  name: string
  ticker: string
  description: string
  image: string
  creator: string
  createdAt: Date
  bondingCurveProgress: number
  currentPrice: number
  totalRaised: number
  targetRaise: number
  holders: number
  volume24h: number
}

interface TokenStore {
  tokens: Token[]
  addToken: (token: Token) => void
  updateToken: (id: string, updates: Partial<Token>) => void
  getTokens: () => Token[]
}

export const useTokenStore = create<TokenStore>((set, get) => ({
  tokens: [
    {
      id: '1',
      name: 'VentureDog',
      ticker: 'VDOG',
      description: 'The future of venture-backed memes',
      image: '🐕',
      creator: '0x1234...5678',
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      bondingCurveProgress: 72,
      currentPrice: 0.145,
      totalRaised: 36000,
      targetRaise: 50000,
      holders: 1240,
      volume24h: 125000,
    },
    {
      id: '2',
      name: 'LaunchMoon',
      ticker: 'LMOON',
      description: 'Going to the moon with structured capital',
      image: '🚀',
      creator: '0x9876...5432',
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      bondingCurveProgress: 45,
      currentPrice: 0.087,
      totalRaised: 22500,
      targetRaise: 50000,
      holders: 856,
      volume24h: 89500,
    },
  ],
  addToken: (token) => set((state) => ({ tokens: [...state.tokens, token] })),
  updateToken: (id, updates) =>
    set((state) => ({
      tokens: state.tokens.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    })),
  getTokens: () => get().tokens,
}))
