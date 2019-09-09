class Color {

    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    add(delta) {
        return new Color(this.r + delta.r, this.g + delta.g, this.b + delta.b);
    }

    subtract(delta) {
        return new Color(this.r - delta.r, this.g - delta.g, this.b - delta.b);
    }

    divide(scalar) {
        return new Color(this.r / scalar, this.g / scalar, this.b / scalar);
    }

    toRgbString() {
        return `rgb(${this.r},${this.g},${this.b})`;
    }

}

export default Color;