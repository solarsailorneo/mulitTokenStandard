# Multi Token Standard
ERC-1155 Token that stores a set number of discrete units with a common URI (E.g. A single picture stored in IPFS). `SafeBatchTransferFrom()`, `safeTransferFrom()`, `balanceOf` and other standard functions are inherited via the standard. A test has been done to verify the correct amount of units are minted.

## Run hardhat test
`npx hardhat test`

## Run mythril
The following is a mock-test that only runs for 2 minutes. Remove the `--execution-timeout` flag if you don't need the constraint.
`myth a contracts/MyMultiToken.sol --solc-json testfile.json -o jsonv2 --execution-timeout 120`

## Tests and Gas Analysis
The test tells us we only spend gas when deploying the contract, as I have not tested other functions yet.

![multitokenFirstTest](https://user-images.githubusercontent.com/104654584/174671130-77b64e1d-a143-4776-8fa2-9287cad6ec04.png)

## Next Steps
1. Use internal states to optimize for gas where pertinent (Check for redundant storage and mappings that can be done internally).
3. Use batch construction with different URIs to change the behavior and value of certain tokens.


