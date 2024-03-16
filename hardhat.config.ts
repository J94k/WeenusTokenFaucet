import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

const dotConfig = dotenv.config();

const {
  // @ts-ignore
  ACCOUNT_PRIVATE_KEY,
  // @ts-ignore
  ETHERSCAN_API_KEY,
  // @ts-ignore
  BSCSCAN_API_KEY,
  // @ts-ignore
  POLYGON_API_KEY,
} = dotConfig.parsed;

const optimizerConfig = {
  enabled: true,
  runs: 99999,
};

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.5.12",
        settings: {
          optimizer: optimizerConfig,
        },
      },
      {
        version: "0.5.4",
        settings: {
          optimizer: optimizerConfig,
        },
      },
    ],
  },
  networks: {
    ethereum: {
      chainId: 1,
      url: "https://mainnet.infura.io/v3/3cb031735f9a46a69f2babab4fae3e0d",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    sepolia: {
      chainId: 11155111,
      url: "https://rpc.sepolia.org",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    bsc: {
      chainId: 56,
      url: "https://bsc-dataseed.binance.org",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    bscTestnet: {
      chainId: 97,
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    polygon: {
      chainId: 137,
      url: "https://polygon-rpc.com/",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    polygonTestnet: {
      chainId: 80001,
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    cronos: {
      chainId: 25,
      url: "https://evm-cronos.crypto.org",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    cronosTestnet: {
      chainId: 338,
      url: "https://cronos-testnet-3.crypto.org:8545",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    avalanche: {
      chainId: 43114,
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    avalancheTestnet: {
      chainId: 43113,
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    fantom: {
      chainId: 250,
      url: "https://rpc.ftm.tools/",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    fantomTestnet: {
      chainId: 4002,
      url: "https://rpc.testnet.fantom.network/",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    fuse: {
      chainId: 122,
      url: "https://rpc.fuse.io/",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    fuseTestnet: {
      chainId: 123,
      url: "https://rpc.fusespark.io",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    harmony: {
      chainId: 1666600000,
      url: "https://api.harmony.one",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    aurora: {
      chainId: 1313161554,
      url: "https://mainnet.aurora.dev",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    auroraTestnet: {
      chainId: 1313161555,
      url: "https://testnet.aurora.dev/",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    godwokenTestnet: {
      chainId: 868455272153094,
      url: "https://godwoken-testnet-web3-v1-rpc.ckbapp.dev",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    ozonechain: {
      chainId: 4000,
      url: "https://node1.ozonechain.io",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    base: {
      chainId: 8453,
      url: "https://mainnet.base.org",
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
  },
  mocha: {
    timeout: 40_000,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: {
      mainnet: ETHERSCAN_API_KEY,
      rinkeby: ETHERSCAN_API_KEY,
      bsc: BSCSCAN_API_KEY,
      bscTestnet: BSCSCAN_API_KEY,
      polygon: POLYGON_API_KEY,
      polygonMumbai: POLYGON_API_KEY,
    },
  },
};

export default config;
