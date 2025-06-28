import {ComputerBuilder} from "./ComputerBuilder";

export class Director {
    private builder!: ComputerBuilder;

    setBuilder(builder: ComputerBuilder): void {
        this.builder = builder;
    }

    buildBasicPC(): void {
        this.builder.reset();
        this.builder.setCPU("Intel i3");
        this.builder.setRAM("8GB");
        this.builder.setStorage("256GB SSD");
    }

    buildGamingPC(): void {
        this.builder.reset();
        this.builder.setCPU("Intel i9");
        this.builder.setRAM("32GB");
        this.builder.setStorage("1TB NVMe");
        this.builder.setGPU("NVIDIA RTX 4090");
    }
}
