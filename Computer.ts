export class Computer {
    public cpu?: string;
    public ram?: string;
    public storage?: string;
    public gpu?: string;

    public describe(): string {
        return `Computer with CPU: ${this.cpu}, RAM: ${this.ram}, Storage: ${this.storage}, GPU: ${this.gpu}`;
    }
}
