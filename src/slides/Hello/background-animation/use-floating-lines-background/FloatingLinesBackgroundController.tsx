import { PerspectiveCamera, Scene } from "three";
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';


class FloatingLinesBackgroundController {
    private camera: PerspectiveCamera
    private scene: Scene
    private composer: EffectComposer
    private canvas: HTMLCanvasElement
    
    private mousePosition = {
        x: 0,
        y: 0
    }

    private lastRequestAnimationFrameId: number | undefined

    private width: number = 0
    private height: number = 0

    private halfWidth: number = 0
    private halfHeight: number = 0

    private running: boolean = false

    constructor(camera: PerspectiveCamera, scene: Scene, composer: EffectComposer) {
        this.camera = camera;
        this.scene = scene;
        this.composer = composer;

        this.canvas = this.composer.renderer.domElement;

        this.lastRequestAnimationFrameId = undefined;

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

    bind(container: HTMLElement) {
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
        if (this.lastRequestAnimationFrameId){
            cancelAnimationFrame(this.lastRequestAnimationFrameId);
        }
        
        this.canvas.parentElement?.removeChild(this.canvas);

        this.canvas.removeEventListener('mousemove', this.onMouseMove, true);
        this.canvas.removeEventListener('touchstart', this.onTouchStart, true);
        this.canvas.removeEventListener('touchmove', this.onTouchMove, true);
        this.canvas.removeEventListener('resize', this.onResize, true);
    }

    onResize() {
        this.width = this.canvas.parentElement?.offsetWidth ?? 0;
        this.height = this.canvas.parentElement?.offsetHeight ?? 0;

        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();

        this.composer.renderer.setSize(this.width, this.height);

        // const pixelRatio = this.composer.renderer.getPixelRatio();
        // const fxaaPass = this.composer.passes[this.composer.passes.length - 1];
        // fxaaPass.material.uniforms['resolution'].value.x = 1 / (this.width * pixelRatio);
        // fxaaPass.material.uniforms['resolution'].value.y = 1 / (this.height * pixelRatio);

        this.composer.setSize(this.width, this.height);
    }

    onMouseMove(event: MouseEvent) {
        this.mousePosition.x = (event.clientX - this.halfWidth) * 0.05;
        this.mousePosition.y = (event.clientY - this.halfHeight) * 0.05;
    }

    onTouchStart(event: TouchEvent) {
        if (event.touches.length > 1) {
            event.preventDefault();
            this.mousePosition.x = (event.touches[0].pageX - this.halfWidth) * 0.05;
            this.mousePosition.y = (event.touches[0].pageY - this.halfHeight) * 0.05;
        }
    }

    onTouchMove(event: TouchEvent) {
        if (event.touches.length === 1) {
            event.preventDefault();
            this.mousePosition.x = (event.touches[0].pageX - this.halfWidth) * 0.05;
            this.mousePosition.y = (event.touches[0].pageY - this.halfHeight) * 0.05;
        }
    }

}

export default FloatingLinesBackgroundController;