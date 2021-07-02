import { FACTORY_ADDRESS, INIT_CODE_HASH } from '@uniswap/sdk';
import { getCreate2Address } from '@ethersproject/address';
import { keccak256, pack } from '@ethersproject/solidity';

var token0 = "0x309138aCA968Dce99FF1677eE1672d9187b57cCa";
var token1 = "0x2706791DbBb09b4449Cc7A79b4fF39efAFfb8c82";
var pair = /*#__PURE__*/getCreate2Address(FACTORY_ADDRESS, /*#__PURE__*/keccak256(["bytes"], [/*#__PURE__*/pack(["address", "address"], [token0, token1])]), INIT_CODE_HASH);
var logPair = function logPair() {
  console.log(pair);
};

export { logPair };
//# sourceMappingURL=generate-uniswap-init-code-hash.esm.js.map
