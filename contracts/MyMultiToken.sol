// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

/**
* @author SolarSailor
*/

contract MyMultiToken is ERC1155 {

    constructor(uint units, string memory uri_) ERC1155(uri_) {
        uint256[] memory ids = new uint256[](units);
        uint256[] memory amounts = new uint256[](units);
        bytes memory data;

        for(uint i = 0; i < units; ++i)
        {
            ids[i] = i;
            amounts[i] = 1;
        }
        
        _mintBatch(msg.sender, ids, amounts, data);
    }
    

}