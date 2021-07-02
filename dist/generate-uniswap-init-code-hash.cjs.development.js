'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdk = require('@uniswap/sdk');
var address = require('@ethersproject/address');
var solidity = require('@ethersproject/solidity');

var token0 = "0x309138aCA968Dce99FF1677eE1672d9187b57cCa";
var token1 = "0x2706791DbBb09b4449Cc7A79b4fF39efAFfb8c82";
var pair = /*#__PURE__*/address.getCreate2Address(sdk.FACTORY_ADDRESS, /*#__PURE__*/solidity.keccak256(["bytes"], [/*#__PURE__*/solidity.pack(["address", "address"], [token0, token1])]), sdk.INIT_CODE_HASH);
var logPair = function logPair() {
  console.log(pair);
};

exports.logPair = logPair;
//# sourceMappingURL=generate-uniswap-init-code-hash.cjs.development.js.map
