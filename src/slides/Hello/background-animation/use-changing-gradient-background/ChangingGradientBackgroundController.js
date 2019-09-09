class ChangingGradientBackgroundController {

    constructor(element, gradientGenerator, cycleDurationSeconds, updatesPerSecond) {
        this.element = element;
        this.gradientGenerator = gradientGenerator;
        this.steps = cycleDurationSeconds * updatesPerSecond;
        this.delay = (cycleDurationSeconds / this.steps) * 1000;

        this.current = this.gradientGenerator();
        this.updateTargetColor();
    }

    updateTargetColor() {
        this.target = this.gradientGenerator();
        this.delta = this.target.subtract(this.current).divide(this.steps);
        this.remainingSteps = this.steps;
    }

    bind() {
        this.render();
        const processId = setInterval(() => this.tick(), this.delay);
        return () => clearInterval(processId);
    }

    tick() {
        if (this.remainingSteps === 0) {
            this.updateTargetColor();
        }

        this.current = this.current.add(this.delta);
        this.render();

        this.remainingSteps--;
    }

    render() {
        const gradient = this.current;
        this.element.style.background =
            `linear-gradient(${gradient.degrees}deg, ${gradient.from.toRgbString()} 0%, ${gradient.to.toRgbString()} 100%)`;
    }
}

export default ChangingGradientBackgroundController;