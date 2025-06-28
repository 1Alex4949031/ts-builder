import {Director} from "./Director";
import {GamingComputerBuilder} from "./GamingComputerBuilder";

const builder = new GamingComputerBuilder();
const director = new Director();

director.setBuilder(builder);

director.buildGamingPC();
const gamingPC = builder.getResult();

console.log(gamingPC.describe());
// Computer with CPU: Intel i9, RAM: 32GB, Storage: 1TB NVMe, GPU: NVIDIA RTX 4090

director.buildBasicPC();
const basicPC = builder.getResult();

console.log(basicPC.describe());
// Computer with CPU: Intel i3, RAM: 8GB, Storage: 256GB SSD, GPU: undefined
