import { FACTORY_ADDRESS, INIT_CODE_HASH } from "@uniswap/sdk";
import { getCreate2Address } from "@ethersproject/address";
import { pack, keccak256 } from "@ethersproject/solidity";

const token0 = "0x309138aCA968Dce99FF1677eE1672d9187b57cCa";
const token1 = "0x2706791DbBb09b4449Cc7A79b4fF39efAFfb8c82";

const pair = getCreate2Address(FACTORY_ADDRESS, keccak256(["bytes"], [pack(["address", "address"], [token0, token1])]), INIT_CODE_HASH);



export const logPair = () => {
    console.log(pair);
}
