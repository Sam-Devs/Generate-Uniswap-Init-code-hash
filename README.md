# Generate-Uniswap-Init-code-hash

This repo helps generate uniswap's init hash code use to to create a new contract with create2 function. It can also be used for Sushiswap, Pancake etc.

### What is Init-hash-code?

`INIT_CODE_HASH` is a hash of the initcode of a contract. The initcode is the code that creates the bytecode that is stored on-chain. You can read more about the types of bytecode here.

Most dapps, including Sushiswap, uses this variable to create a new contract with create2. When a dapp wants to create a contract with a known address, they will use the create2 opcode, which uses the hashed initcode as a parameter.
You can see that Uniswapswap uses it in the [pairFor](https://uniswap.org/docs/v2/smart-contracts/library/#pairfor) function:

`function pairFor(address factory, address tokenA, address tokenB) internal pure returns (address pair) { (address token0, address token1) = sortTokens(tokenA, tokenB); pair = address(uint(keccak256(abi.encodePacked( hex'ff', factory, keccak256(abi.encodePacked(token0, token1)), hex'0xdd5305e118eb253f752509c7e9c7a970cdda7aaa' // init code hash )))); }`

### Change the Token Addresses
You can change the the token0 and token1 addresses in the `src/index.ts` file.

`yarn`
## Install Dependencies

`yarn`
## Build

`yarn build`
## Generate Init-hash-code

`node test/index.js`
