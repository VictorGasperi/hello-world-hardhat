// SPDX-License-Identifier: MIT

pragma solidity ^0.8.28;

import "hardhat/console.sol";

contract HelloWorld {

    string private message;

    constructor(string memory _message) {
        message = _message;
        console.log(message);
    }

}