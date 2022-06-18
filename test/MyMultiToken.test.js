const { expect } = require("chai");

describe("My MultiToken contract", function () {
    let ownerEthers;
    let owner;
    let MyIdentity;
    let hardhatMyIdentity;
    const uri = "https://linktr.ee/solarsailor";

    beforeEach(async () => {
        [ownerEthers] = await ethers.getSigners();
        MyIdentity = await ethers.getContractFactory("MyMultiToken");

        hardhatMyIdentity = await MyIdentity.deploy(uri);
        owner = await hardhatMyIdentity.owner();
    });


    describe("Run Tests", () => {
        it("Owner function should return same value as signer", async function () {
            expect(ownerEthers.address).to.equal(owner);
        });
    
        it("Output data called by key should match input data with delimiters", async function () {
            const dataString = name + "<CR>" + linktree + "<CR>" + photoHash;

            expect(ownerEthers.address).to.equal(owner);
            expect(await hardhatMyIdentity["getData(address)"](owner)).to.equal(dataString);
        });
    });

});