import * as THREE from 'three';

class ThreeScene {

    constructor() {
        this.camera
        this.scene
        this.renderer
        this.cube
    }

    init() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.scene = new THREE.Scene()

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 0, 5)

        this.cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshNormalMaterial())
        this.scene.add(this.cube)


        this.bind()
    }

    update() {
        this.renderer.render(this.scene, this.camera)
        this.rotateCube()
    }

    rotateCube() {
        this.cube.rotateY(0.01)
    }

    resizeCanvas() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix();
    }

    bind() {
        this.resizeCanvas = this.resizeCanvas.bind(this)
        window.addEventListener('resize', this.resizeCanvas)

    }
}

export { ThreeScene as default }