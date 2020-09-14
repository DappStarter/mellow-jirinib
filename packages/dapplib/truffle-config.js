require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index release place essay hover enrich metal giggle'; 
let testAccounts = [
"0x4f3b56ca2e3ed099bbe7be3093725683252f2673022c2eacfa83bf2a9587d9b8",
"0x54d038f42a2dc4af26dd1d904a97d5ca0e3dbabc15a37f34858f647ce5115b36",
"0xe601f8b1d00fb3eac58ba428716e1f1411006b46441b4c57cde6ac9e7cf89f74",
"0xa13c88172236b93be3a853af7ed3064de3582864263b8eab97bc550f06d65cbd",
"0x9fd76b922eee94b6cff18e53a14ed7c2d36856f5466dc91c678762bf4ebfc5d2",
"0x035601eb301d88f20dadc9e1909ccc19784f8892dadcb1bd783ed7682fd4cda2",
"0x80dd4dc928bcdd29232801867f3a31ac8363be425695a680b391dac642c34246",
"0x83a29604f9da4d0b12811afc5b3494b4333aa97c539f0b0692cf658e07def3eb",
"0x262477e1a52d58393079a6829c61c8dfd18b86485203955cf306dc734a9782cc",
"0x6a77081abf13cdd1ab1ebcdf85d6774c69b3b173e3850e08e3651ab146788cdd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
