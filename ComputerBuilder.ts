import {Computer} from "./Computer";

export interface ComputerBuilder {
    reset(): void;
    setCPU(cpu: string): void;
    setRAM(ram: string): void;
    setStorage(storage: string): void;
    setGPU(gpu: string): void;
    getResult(): Computer;
}