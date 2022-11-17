import {loadGLTF, loadTexture} from "./libs/loader.js";
const THREE = window.MINDAR.FACE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.FACE.MindARThree({
      container: document.body,
    });
    const {renderer, scene, camera} = mindarThree;

    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

    const faceMesh = mindarThree.addFaceMesh();

  
    const texture = await loadTexture('./assets/facemesh/polygon_mask_1.png');
    //const texture = await loadTexture('./assets/facemesh/mask.png');
   //const texture = await loadTexture('./assets/facemesh/blue-mask.png');
      //const texture = await loadTexture('./assets/facemesh/purepng.png');

    faceMesh.material.map = texture;
    faceMesh.material.transparent = true;
    faceMesh.material.needsUpdate = true;
    scene.add(faceMesh);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});


