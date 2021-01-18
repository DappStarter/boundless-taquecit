require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile purse gesture merry flock shoe'; 
let testAccounts = [
"0xcf307d74599af8770bf5bd00a3f4a034ec52a6899a0287a4b59c8ee1e12ad77f",
"0xa7d891691af1efd3f331147c68a014b1e977c8d34fe9aeeddd27b2427d539e5a",
"0x62bcd3d2b46b45617b67edb8900c2c37fabda56c95559a8d47caf286e9c48011",
"0xadc3ede717f40883c951384d35f2a20e674e4c05cf4049819bdbd74a06d6f8c1",
"0x37d61b5c7cc9e5f5af390a984e84f6d6e01502280e9cc44cee9d395f531d37e8",
"0xdfb8f205b0b128f39e47f57eb297243ca016511777a98381cf930b3bc78318d5",
"0x4b0d81e1eb6b591ba2a49f4c5518e5d47106a73ee1f8ca09d726d6f1fbab3c84",
"0x6cbcfcc55587f740b71a1acda7de5f92f9db11d6989d8a224322f37ea6ab6034",
"0x16da4fbc2d797f4fd39e3e23da1f3bfaeaa304c3c1874ed6929894e1d70948be",
"0xe2cd566322723a0bdda357e5eab3c557448e119ce38e4bec1b99953aad6b79a0"
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
