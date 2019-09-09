class FloatingLinesBackgroundController {

    constructor(camera, scene, composer) {
        this.camera = camera;
        this.scene = scene;
        this.composer = composer;

        this.canvas = this.composer.renderer.domElement;

        this.mousePosition = {
            x: 0,
            y: 0
        };

        this.lastRequestAnimationFrameId = null;

        this.bind = this.bind.bind(this);
        this.animate = this.animate.bind(this);
        this.release = this.release.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
    }

    animate() {
        const now = Date.now();
        const position = this.camera.position;
        position.x += ((Math.sin(now * 0.0001) * this.halfWidth * 0.05) + this.mousePosition.x - position.x) * 0.05;
        position.y += ((Math.cos(now * 0.0001) * this.halfHeight * 0.05) + this.mousePosition.y - position.y) * 0.05;
        this.camera.lookAt(this.scene.position);
        this.composer.render();
        this.lastRequestAnimationFrameId = requestAnimationFrame(this.animate);
    }

    bind(container) {
        this.canvas.addEventListener('mousemove', this.onMouseMove, true);
        this.canvas.addEventListener('touchstart', this.onTouchStart, true);
        this.canvas.addEventListener('touchmove', this.onTouchMove, true);
        this.canvas.addEventListener('resize', this.onResize, true);

        container.appendChild(this.canvas);
        this.onResize();

        this.running = true;
        this.animate();
    }

    release() {
        cancelAnimationFrame(this.lastRequestAnimationFrameId);

        this.canvas.parentElement.removeChild(this.canvas);

        this.canvas.removeEventListener('mousemove', this.onMouseMove, true);
        this.canvas.removeEventListener('touchstart', this.onTouchStart, true);
        this.canvas.removeEventListener('touchmove', this.onTouchMove, true);
        this.canvas.removeEventListener('resize', this.onResize, true);
    }

    onResize() {
        this.width = this.canvas.parentElement.offsetWidth;
        this.height = this.canvas.parentElement.offsetHeight;

        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();

        this.composer.renderer.setSize(this.width, this.height);

        const pixelRatio = this.composer.renderer.getPixelRatio();
        const fxaaPass = this.composer.passes[this.composer.passes.length - 1];
        fxaaPass.material.uniforms['resolution'].value.x = 1 / (this.width * pixelRatio);
        fxaaPass.material.uniforms['resolution'].value.y = 1 / (this.height * pixelRatio);

        this.composer.setSize(this.width, this.height);
    }

    onMouseMove(event) {
        this.mousePosition.x = (event.clientX - this.halfWidth) * 0.05;
        this.mousePosition.y = (event.clientY - this.halfHeight) * 0.05;
    }

    onTouchStart(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
            this.mousePosition.x = (event.touches[0].pageX - this.halfWidth) * 0.05;
            this.mousePosition.y = (event.touches[0].pageY - this.halfHeight) * 0.05;
        }
    }

    onTouchMove(event) {
        if (event.touches.length === 1) {
            event.preventDefault();
            this.mousePosition.x = (event.touches[0].pageX - this.halfWidth) * 0.05;
            this.mousePosition.y = (event.touches[0].pageY - this.halfHeight) * 0.05;
        }
    }

}

export default FloatingLinesBackgroundController;