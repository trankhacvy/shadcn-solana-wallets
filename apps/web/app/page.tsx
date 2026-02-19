"use client";

import { ConnectButton } from "@/registry/new-york/shadcn-solana-wallets/connect-button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center p-8">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">shadcn-wallets</h1>
          <p className="text-muted-foreground max-w-lg text-lg">
            Beautiful Solana wallet components for your shadcn/ui project. Connect, manage, and
            switch wallets with a polished UI.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <ConnectButton />

          <div className="bg-muted/50 text-muted-foreground rounded-lg border px-4 py-2.5 font-mono text-sm">
            npx shadcn add https://shadcn-solana-wallets-web.vercel.app/r/wallet.json
          </div>
        </div>

        <div className="text-muted-foreground mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
          <div className="flex flex-col items-center gap-1 rounded-lg border p-4">
            <span className="text-foreground font-medium">Desktop & Mobile</span>
            <span className="text-center text-xs">Two-panel dialog + bottom sheet</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg border p-4">
            <span className="text-foreground font-medium">shadcn Native</span>
            <span className="text-center text-xs">Follows your theme out of the box</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg border p-4">
            <span className="text-foreground font-medium">Fully Composable</span>
            <span className="text-center text-xs">Use individual components or all-in-one</span>
          </div>
        </div>
      </div>

      <div className="text-muted-foreground mt-12 flex items-center gap-4 text-sm">
        <a
          href="https://github.com/trankhacvy/shadcn-solana-wallets"
          className="hover:text-foreground underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <span className="text-border">|</span>
        <span>
          Built on{" "}
          <a
            href="https://github.com/solana-foundation/connectorkit"
            className="hover:text-foreground underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            ConnectorKit
          </a>{" "}
          +{" "}
          <a
            href="https://ui.shadcn.com"
            className="hover:text-foreground underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            shadcn/ui
          </a>
        </span>
      </div>
    </div>
  );
}
