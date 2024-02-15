import { create } from 'zustand'

export const useAppStore = create((set) => ({
  token: '',
  username: '',
  isLoggedIn: false,
  setUsername: (value) => set(() => ({ username: value })),
  setToken: (value) => set(() => ({ token: value })),
  setIsLoggedIn: (value) => set(() => ({ isLoggedIn: value })),
}))
