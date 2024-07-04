import Color from "./Color";

class Gradient {
    readonly from: Color
    readonly to: Color
    readonly degrees: number

    constructor(from: Color, to: Color, degrees: number) {
        this.from = from;
        this.to = to;
        this.degrees = degrees;
    }

    add(gradient: Gradient) {
        return new Gradient(
            this.from.add(gradient.from),
            this.to.add(gradient.to),
            this.degrees + gradient.degrees
        );
    }

    subtract(gradient: Gradient) {
        return new Gradient(
            this.from.subtract(gradient.from),
            this.to.subtract(gradient.to),
            this.degrees - gradient.degrees
        );
    }

    divide(scalar: number) {
        return new Gradient(
            this.from.divide(scalar),
            this.to.divide(scalar),
            this.degrees / scalar
        );
    }

}

export default Gradient;