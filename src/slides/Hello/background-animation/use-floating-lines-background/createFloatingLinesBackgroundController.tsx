import {
    BufferGeometry,
    BufferAttribute,
    Line,
    LineBasicMaterial,
    PerspectiveCamera,
    Scene,
    Sprite,
    SpriteMaterial,
    WebGLRenderer
} from 'three';

import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass';
import {FXAAShader} from 'three/examples/jsm/shaders/FXAAShader';

import FloatingLinesBackgroundController from "./FloatingLinesBackgroundController";

function createCamera() {
    const camera = new PerspectiveCamera(75, 1, 1, 10000);
    camera.position.z = 100;
    return camera;
}

function createScene() {
    const scene = new Scene();
    const material = createSpriteMaterial();
    const particlesSprites = createParticleSprites(material);

    const geometry = new BufferGeometry();
    const vertices: number[] = []

    particlesSprites.forEach((particleSprite) => {
        scene.add(particleSprite);

        vertices.push(particleSprite.position.x);
        vertices.push(particleSprite.position.y);
        vertices.push(particleSprite.position.z);
    });

    geometry.setAttribute( 'position', new BufferAttribute(new Float32Array(vertices), 3 ) );

    geometry.computeVertexNormals();

    const lineMaterial = new LineBasicMaterial();

    const line = new Line(geometry, lineMaterial);
    scene.add(line);

    return scene;
}

function createSpriteMaterial() {
    return new SpriteMaterial({
        color: 0xffffff,
    });
}

function createParticleSprites(spriteMaterial: SpriteMaterial) {
    const result = [];
    for (let i = 0; i < 150; i++) {
        result.push(createParticleSprite(spriteMaterial));
    }
    return result;
}

function createParticleSprite(material: SpriteMaterial) {
    const result = new Sprite(material);
    result.position.x = Math.random() * 2 - 1;
    result.position.y = Math.random() * 2 - 1;
    result.position.z = Math.random() * 2 - 1;
    result.position.normalize();
    result.position.multiplyScalar(600 + Math.random() * 10);
    result.scale.x = 5;
    result.scale.y = 5;
    return result;
}

function createRenderer() {
    const renderer = new WebGLRenderer({antialias: true, alpha: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    return renderer;
}

function createComposer(camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer) {
    const composer = new EffectComposer(renderer);

    composer.addPass(new RenderPass(scene, camera));

    const fxaaPass = new ShaderPass(FXAAShader);
    composer.addPass(fxaaPass);

    composer.passes[composer.passes.length - 1].renderToScreen = true;
    return composer;
}

function createFloatingLinesBackgroundController() {
    const camera = createCamera();
    const scene = createScene();
    const renderer = createRenderer();
    const composer = createComposer(camera, scene, renderer);
    return new FloatingLinesBackgroundController(camera, scene, composer);
}

export default createFloatingLinesBackgroundController;