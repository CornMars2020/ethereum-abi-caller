/// Standard
import AuthereumAccount from "./Std/AuthereumAccount.json";
import ERC1271 from "./Std/ERC1271.json";
import ERC20 from "./Std/ERC20.json";
import ERC721 from "./Std/ERC721.json";
import WETH from "./Std/WETH.json";
import EnsEthRegistrarController from "./Std/EnsEthRegistrarController.json";
import EnsPublicResolver from "./Std/EnsPublicResolver.json";

// Defi
import BalancerVault from "./Defi/BalancerVault.json";
import SaddleSwap from "./Defi/SaddleSwap.json";
import yVault from "./Defi/yVault.json";

// UniSwap
import UniswapV2Factory from "./UniSwap/UniswapV2Factory.json";
import UniswapV2Pair from "./UniSwap/UniswapV2Pair.json";
import UniswapV2Router02 from "./UniSwap/UniswapV2Router02.json";
import UniswapV3Factory from "./UniSwap/UniswapV3Factory.json";
import UniswapV3Pool from "./UniSwap/UniswapV3Pool.json";
import UniswapV3SwapRouter from "./UniSwap/UniswapV3SwapRouter.json";

// Universe Finance
import BlitzarMulticall from "./Universe/Multicall2.json";
import BlitzarUtil from "./Universe/Util.json";
import BlitzarTimeLockController from "./Universe/TimelockController.json";
import BlitzarPositionNFTManager from "./Universe/PositionNFTManager.json";
import BlitzarTokenDistributor from "./Universe/TokenDistributor.json";
import BlitzarPairVaultConfig from "./Universe/UniversePairVaultConfig.json";
import BlitzarPairVaultDelegate from "./Universe/UniversePairVaultDelegate.json";
import BlitzarPairVaultV2 from "./Universe/UniversePairVaultV2.json";
import BlitzarUToken from "./Universe/UToken.json";

const abis = {
  AuthereumAccount,
  ERC1271,
  ERC20,
  ERC721,
  WETH,
  EnsEthRegistrarController,
  EnsPublicResolver,

  BlitzarMulticall,
  BlitzarUtil,
  BlitzarTimeLockController,
  BlitzarPositionNFTManager,
  BlitzarTokenDistributor,
  BlitzarPairVaultConfig,
  BlitzarPairVaultDelegate,
  BlitzarPairVaultV2,
  BlitzarUToken,

  UniswapV2Factory,
  UniswapV2Pair,
  UniswapV2Router02,
  UniswapV3Factory,
  UniswapV3Pool,
  UniswapV3SwapRouter,

  BalancerVault,
  SaddleSwap,
  yVault,
};

export default abis;
