const abiClaiming = [
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "_projectId",
				"type": "uint32"
			}
		],
		"name": "claimTokens",
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
		"inputs": [
			{
				"internalType": "uint32",
				"name": "_projectId",
				"type": "uint32"
			},
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "earned",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export default abiClaiming;