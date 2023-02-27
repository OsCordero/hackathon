import { config } from "@onflow/fcl";

config({
  "accessNode.api": "https://rest-testnet.onflow.org", // Mainnet: "https://rest-mainnet.onflow.org"
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // Mainnet: "https://fcl-discovery.onflow.org/authn"
  "app.detail.title": "Zingiber Hackathon App",
  "discovery.authn.include": ["0x9d2e44203cb13051", "0x82ec283f88a62e65"],
  "app.detail.icon": "https://i.imgur.com/9I6NRUm.png",
});
