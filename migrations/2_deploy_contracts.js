const WETH = artifacts.require("WETH");
const Blender = artifacts.require("ApeBlenderImpl");
module.exports = async function (deployer) {
  // await deployer.deploy(WETH); // deploy WETH
  const weth = "0xc778417E063141139Fce010982780140Aa0cD5Ab";
  const apeFeeBps = 50;
  const feeTreasury = "0x40d5250D1ce81fdD1F0E0FB4F471E57AA0c1FaD3";
  const exchangeRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; //uniswapv2 router in Ropsten
  const exchangeSwapFeeNumerator = 3;
  const exchangeSwapFeeDenominator = 1000;
  await deployer.deploy(
    Blender,
    apeFeeBps,
    feeTreasury,
    exchangeRouter,
    weth,
    exchangeSwapFeeNumerator,
    exchangeSwapFeeDenominator
  ); // deploy of contract
};
