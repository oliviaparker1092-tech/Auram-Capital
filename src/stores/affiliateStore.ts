import { create } from 'zustand'

export interface AffiliateStats {
  referredVolume: number
  earnedRebates: number
  totalEarnings: number
  conversionRate: number
  activeReferrals: number
}

export interface AffiliateStore {
  stats: AffiliateStats
  affiliateLink: string
  generateLink: () => string
  updateStats: (updates: Partial<AffiliateStats>) => void
}

export const useAffiliateStore = create<AffiliateStore>((set) => ({
  stats: {
    referredVolume: 545000,
    earnedRebates: 2725,
    totalEarnings: 8500,
    conversionRate: 3.2,
    activeReferrals: 42,
  },
  affiliateLink: 'https://auram.capital/ref/affiliate-code-12345',
  generateLink: () => {
    const code = Math.random().toString(36).substr(2, 9).toUpperCase()
    return `https://auram.capital/ref/${code}`
  },
  updateStats: (updates) =>
    set((state) => ({
      stats: { ...state.stats, ...updates },
    })),
}))
