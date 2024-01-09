// import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// const WagmiProvider = dynamic(
//   import("wagmi").then((mod) => mod.WagmiProvider),
//   { ssr: false }
// );
import { WagmiProvider } from "wagmi";
import { config } from "../wagmi";
import Layout from "../components/Layout";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
