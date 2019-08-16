export class ColorSize {

    private colorName: string;
    private size: string;

    public constructor(colorName: string, size: string) {
        this.colorName = colorName;
        this.size = size;
    }

    public equals(anotherColorSize: ColorSize): boolean {
        return this.toString() == anotherColorSize.toString();
    }

    private toString(): string {
        return `${this.colorName}_${this.size}`;
    }
}
