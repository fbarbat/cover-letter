class Color {
    readonly r: number
    readonly g: number
    readonly b: number

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    add(delta: Color) {
        return new Color(this.r + delta.r, this.g + delta.g, this.b + delta.b);
    }

    subtract(delta: Color) {
        return new Color(this.r - delta.r, this.g - delta.g, this.b - delta.b);
    }

    divide(scalar: number) {
        return new Color(this.r / scalar, this.g / scalar, this.b / scalar);
    }

    toRgbString() {
        return `rgb(${this.r},${this.g},${this.b})`;
    }

}

export default Color;