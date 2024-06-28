// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract ManuToken is ERC20 {
    
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        // Lógica de inicialización si es necesario
    }

}