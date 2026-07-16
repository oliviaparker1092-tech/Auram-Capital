import { create } from 'zustand'

export interface Portfolio {
  id: string
  name: string
  symbol: string
  equity: number
  allocation: number
  roi: number
  status: 'seed' | 'profitable' | 'scaling' | 'exited'
  image: string
  description: string
}

export interface PortfolioStore {
  portfolios: Portfolio[]
  totalValueLocked: number
  treasuryRevenue: number
  activeStartups: number
  addPortfolio: (portfolio: Portfolio) => void
  getPortfolios: () => Portfolio[]
}

export const usePortfolioStore = create<PortfolioStore>((set, get) => ({
  portfolios: [
    {
      id: '1',
      name: 'TechStartup A',
      symbol: 'TECH-A',
      equity: 8,
      allocation: 24,
      roi: 240,
      status: 'profitable',
      image: '💻',
      description: 'AI-powered data analytics platform',
    },
    {
      id: '2',
      name: 'FintechStartup B',
      symbol: 'FIN-B',
      equity: 12,
      allocation: 10,
      roi: 0,
      status: 'seed',
      image: '💰',
      description: 'Blockchain-based payment infrastructure',
    },
  ],
  totalValueLocked: 14800000,
  treasuryRevenue: 2400000,
  activeStartups: 14,
  addPortfolio: (portfolio) =>
    set((state) => ({ portfolios: [...state.portfolios, portfolio] })),
  getPortfolios: () => get().portfolios,
}))
