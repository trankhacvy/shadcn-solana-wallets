"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { SolanaWalletProvider } from "@/registry/new-york/shadcn-solana-wallets/solana-wallet-provider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SolanaWalletProvider appName="shadcn-wallets" cluster="devnet" autoConnect>
        {children}
      </SolanaWalletProvider>
    </ThemeProvider>
  );
}
