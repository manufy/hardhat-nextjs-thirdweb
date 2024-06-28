import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ManuTokenModule = buildModule("ManuTokenModule", (m) => {



  const token = m.contract("ManuToken", ["ManuToken", "MTK"], {
    
  });

  return { token };
});

export default ManuTokenModule;