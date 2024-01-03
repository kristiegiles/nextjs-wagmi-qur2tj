import { http, createConfig } from 'wagmi';
import { base, mainnet, optimism } from 'wagmi/chains';
import {
  injected,
  ledger,
  metaMask,
  safe,
  walletConnect,
} from 'wagmi/connectors';

const projectId = '3fbb6bba6f1de962d911bb5b5c9dba88';

export const config = createConfig({
  ssr: true,
  chains: [mainnet, optimism, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    ledger({ projectId }),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [optimism.id]: http(),
    [base.id]: http(),
  },
});
