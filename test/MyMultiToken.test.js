const { expect } = require("chai");

describe("My MultiToken contract", function () {
    let deployingWallet;
    let MyMultiToken;
    let hardhatMyMultiToken;
    const uri = "https://linktr.ee/solarsailor";
    const units = 10;

    beforeEach(async () => {
        [deployingWallet] = await ethers.getSigners();
        MyMultiToken = await ethers.getContractFactory("MyMultiToken");

        hardhatMyMultiToken = await MyMultiToken.deploy(units, uri);
    });


    describe("Run Tests", () => {
        it("Minted correct amount of units", async function () {
            const accounts = [units];
            const ids = [units];
            for(let i = 0; i < units; i++)
            {
                accounts[i] = deployingWallet.address;
                ids[i] = i;
            }

            const balanceOfBatch = await hardhatMyMultiToken.balanceOfBatch(accounts, ids);
            expect(balanceOfBatch.reduce((partialSum, a) => parseInt(partialSum) + parseInt(a), 0)).to.equal(units);
        });
    });

});