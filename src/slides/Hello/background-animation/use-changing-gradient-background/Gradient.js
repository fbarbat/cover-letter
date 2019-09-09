class Gradient {

    constructor(from, to, degrees) {
        this.from = from;
        this.to = to;
        this.degrees = degrees;
    }

    add(gradient) {
        return new Gradient(
            this.from.add(gradient.from),
            this.to.add(gradient.to),
            this.degrees + gradient.degrees
        );
    }

    subtract(gradient) {
        return new Gradient(
            this.from.subtract(gradient.from),
            this.to.subtract(gradient.to),
            this.degrees - gradient.degrees
        );
    }

    divide(scalar) {
        return new Gradient(
            this.from.divide(scalar),
            this.to.divide(scalar),
            this.degrees / scalar
        );
    }

}

export default Gradient;