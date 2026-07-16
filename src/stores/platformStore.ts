import { create } from 'zustand'

export type Platform = 'degen' | 'vault'

interface PlatformStore {
  mode: Platform
  setMode: (mode: Platform) => void
  isDarkMode: boolean
  setDarkMode: (dark: boolean) => void
  selectedToken: string | null
  setSelectedToken: (token: string | null) => void
}

export const usePlatformStore = create<PlatformStore>((set) => ({
  mode: 'degen',
  setMode: (mode) => set({ mode }),
  isDarkMode: true,
  setDarkMode: (dark) => set({ isDarkMode: dark }),
  selectedToken: null,
  setSelectedToken: (token) => set({ selectedToken: token }),
}))
