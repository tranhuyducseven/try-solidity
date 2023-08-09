// Deploying 'Lottery'
// -------------------
// > transaction hash:    0xdb559e0858c0039b0017f208a9cf776b5c29751e28d0dd3c236c13780a0a78d4
// > Blocks: 2            Seconds: 17
// > contract address:    0x2192121C4813A6433Ba9ccEF9E3601f6A23FcFC3
// > block number:        4055614
// > block timestamp:     1691590224
// > account:             0xaE0e4b4d8dcF13eFc5B93636b3EAd79a3f2A82E9
// > balance:             0.493759543081559739
// > gas used:            778877 (0xbe27d)
// > gas price:           8.012121193 gwei
// > value sent:          0 ETH
// > total cost:          0.006240456918440261 ETH

import Lottery from "./Lottery.json";

export const lotteryAddress = "0x2192121C4813A6433Ba9ccEF9E3601f6A23FcFC3";

export const contractABI = Lottery.abi;

export const lotteryContract = (web3: any) =>
  new web3.eth.Contract(contractABI, lotteryAddress);
