let global: any = typeof window !== 'undefined' ? window : self;
global.config = {
	nodeList: [
		{ owner: "Lomelicus", node: ""},
		{ owner: "ExploShot", node: ""}
	],
	nodeUrl: "https://api.cybersecuresix.com/",
	mainnetExplorerUrl: "https://explorer.cybersecuresix.com/",
	mainnetExplorerUrlHash: "https://explorer.cybersecuresix.com/?hash={ID}#blockchain_transaction",
	mainnetExplorerUrlBlock: "https://explorer.cybersecuresix.com/?hash={ID}#blockchain_block",
	testnet: false,
	coinUnitPlaces: 2,
	coinDisplayUnitPlaces: 2,
	txMinConfirms: 6,
	txCoinbaseMinConfirms: 10,
	addressPrefix: 0x96,
	integratedAddressPrefix: 0x97,
	subAddressPrefix: 0x98,
	subAddressPrefixTestnet: 0x98,
	coinFee: new JSBigInt('1'),
	feePerKB: new JSBigInt('100'),
	dustThreshold: new JSBigInt('1'), //used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 0, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'SSIX',
	openAliasPrefix: "ssix",
	coinName: 'SSIX',
	coinUriPrefix: 'ssix:',
	avgBlockTime: 60,
	maxBlockNumber: 500000000,
	remoteNodeFee: 0,
	devFee: 0,
	devAddress: ""
};
