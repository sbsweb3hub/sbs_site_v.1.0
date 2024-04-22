const abiGetFundForProject = [
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "_projectId",
				"type": "uint32"
			}
		],
		"name": "getAllProjectTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_createProject_contract",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_ordering_contract",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "onwerProject",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "allProjectTokens",
				"type": "uint256"
			}
		],
		"name": "GetAllProjectTokens",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "_projectId",
				"type": "uint32"
			}
		],
		"name": "getNextFund",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "allProjectTokens",
				"type": "uint256"
			}
		],
		"name": "sendAllProjectTokensToSBS",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "setNewOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_sbsFee",
				"type": "uint8"
			}
		],
		"name": "setSBSFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sbsFee",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export default abiGetFundForProject;