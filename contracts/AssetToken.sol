pragma solidity 0.4.24;

import 'openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol';


contract AssetToken is StandardToken {
	string public name = "AssetToken";
	string public symbol = "AT";
	uint8 public decimals = 2;
	uint public INITIAL_SUPPLY=1000;

	constructor() public {
		totalSupply_ = INITIAL_SUPPLY;
		balances[msg.sender] = INITIAL_SUPPLY;
	}

}

