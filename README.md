# shadcn-solana-wallets

Beautiful, polished Solana wallet components for your [shadcn/ui](https://ui.shadcn.com) project. Built on [ConnectorKit](https://github.com/solana-foundation/connectorkit) (`@solana/connector`).

Two-panel desktop modal, mobile bottom sheet, wallet install prompts, connection states, and more — all designed to feel native in any shadcn app.

## Installation

```bash
npx shadcn add https://shadcn-solana-wallets-web.vercel.app/r/wallet.json
```

This installs all components, hooks, and primitives into your project.

### Peer dependencies

```bash
npm install @solana/connector @tanstack/react-query
```

## Quick start

Wrap your app with the provider:

```tsx
import { SolanaWalletProvider } from "@/components/shadcn-wallets/solana-wallet-provider";

export default function App({ children }) {
  return (
    <SolanaWalletProvider appName="My App" cluster="mainnet-beta">
      {children}
    </SolanaWalletProvider>
  );
}
```

Then use the connect button:

```tsx
import { ConnectButton } from "@/components/shadcn-wallets/connect-button";

export default function Page() {
  return <ConnectButton />;
}
```

That's it. You get a full wallet connection flow — modal, account dropdown, cluster selector — with zero configuration.

## Components

| Component              | Description                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------- |
| `ConnectButton`        | All-in-one button: connect, account dropdown, cluster selector                                          |
| `WalletModal`          | Two-panel desktop dialog + mobile bottom sheet with wallet list, install prompts, and connection states |
| `AccountDropdown`      | Connected account info, balance, explorer link, disconnect                                              |
| `ClusterSelector`      | Network switcher (mainnet, devnet, testnet, localnet)                                                   |
| `SolanaWalletProvider` | Top-level provider wrapping ConnectorKit + React Query                                                  |

### Primitives

| Component             | Description                                                                     |
| --------------------- | ------------------------------------------------------------------------------- |
| `WalletIcon`          | Wallet avatar with fallback                                                     |
| `WalletListItem`      | Single wallet row with selected/recent/installed states                         |
| `WalletListPanel`     | Scrollable wallet list with Popular/More grouping                               |
| `WalletDetailPanel`   | Right panel: "What is a Wallet?", connecting, error, install, get-started views |
| `AddressLabel`        | Truncated address with copy                                                     |
| `BalanceDisplay`      | SOL balance display                                                             |
| `ConnectingAnimation` | Wallet icon + spinner                                                           |

### Hooks

| Hook               | Description                                 |
| ------------------ | ------------------------------------------- |
| `useWalletModal`   | Control modal open/close state              |
| `useRecentWallets` | Track recently used wallets in localStorage |
| `useMediaQuery`    | Responsive breakpoint detection             |

## Props

### `SolanaWalletProvider`

| Prop                     | Type                  | Default          | Description                          |
| ------------------------ | --------------------- | ---------------- | ------------------------------------ |
| `appName`                | `string`              | `"My App"`       | App name shown in wallet prompts     |
| `cluster`                | `string`              | `"mainnet-beta"` | Solana cluster                       |
| `autoConnect`            | `boolean`             | `true`           | Auto-reconnect on page load          |
| `walletConnectProjectId` | `string`              | -                | WalletConnect project ID             |
| `walletInstallInfo`      | `WalletInstallInfo[]` | -                | Custom wallet install link overrides |

### `ConnectButton`

| Prop           | Type      | Default            | Description                          |
| -------------- | --------- | ------------------ | ------------------------------------ |
| `connectLabel` | `string`  | `"Connect Wallet"` | Button text when disconnected        |
| `showBalance`  | `boolean` | `true`             | Show SOL balance in dropdown         |
| `showCluster`  | `boolean` | `true`             | Show cluster selector next to button |
| `showExplorer` | `boolean` | `true`             | Show explorer link in dropdown       |

## Custom wallet install info

Override or extend the built-in install links for Phantom, Backpack, and Solflare:

```tsx
<SolanaWalletProvider
  appName="My App"
  walletInstallInfo={[
    {
      match: "phantom",
      name: "Phantom",
      installLinks: [
        { label: "Chrome", url: "https://chrome.google.com/..." },
        { label: "Firefox", url: "https://addons.mozilla.org/..." },
      ],
      description: "Custom description for your users.",
      gettingStartedSteps: [
        "Install the extension.",
        "Create a wallet.",
        "Connect here.",
      ],
    },
  ]}
>
```

## Tech stack

- [shadcn/ui](https://ui.shadcn.com) — UI components (Dialog, Sheet, ScrollArea, Button, Avatar, etc.)
- [ConnectorKit](https://github.com/solana-foundation/connectorkit) (`@solana/connector`) — Solana wallet logic
- [React Query](https://tanstack.com/query) — Async state management
- [Tailwind CSS v4](https://tailwindcss.com) — Styling
- [Radix UI](https://www.radix-ui.com) — Accessible primitives

## Development

```bash
pnpm install
pnpm dev
```

Build the registry:

```bash
pnpm --filter web registry:build
```

## License

MIT
