import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { base } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'MaxxHash',
  projectId: 'bd862cc7fc2cf0e98555a1e561118b4d',
  chains: [base],
  ssr: true
})
