import { generateSceneConfig, Scene } from "../Scene.js";
import {assetsImgPath} from "./sceneAssetsPath.js";
import {ControlArrows} from "../game-objects/arrows.js";
import { Cameras } from "../Cameras.js";

var sceneName = 'main';
var mainSceneConfig = generateSceneConfig(sceneName);
var cameras;
// mainScene
var mainScene = new Scene(mainSceneConfig);
mainScene.preload = () => {
    mainScene.loadAssets({
        'sky': assetsImgPath + 'sky.png',
        'star': assetsImgPath + 'star.png',
        'ground': assetsImgPath + 'ground.png'
    });

}
mainScene.create = () => {
    cameras = new Cameras(mainScene.getCameraManager(), mainScene.getGameWidth(), mainScene.getGameHeight());
    addCameras();
    addBackground(mainScene);
    addPlatforms(mainScene);
    addControlArrows(mainScene);
}
mainScene.update = () => {

}
export { mainScene };

function addCameras(){
    cameras.add(0,0);
    cameras.getLast().setScroll(100,0);

    cameras.add(0,0);
    cameras.getLast().setScroll(-100,0);
    // mainScene.addCamera(100,0);
}

function addBackground(myScene) {
    myScene.add.image(0, 0, 'sky').setOrigin(0, 0);
}

function addPlatforms(game) {
    var platforms = game.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
}

function addControlArrows(scene){
    let controlArrows = new ControlArrows(scene, 'star');
    controlArrows.left.onClick(clickLeft);
    controlArrows.right.onClick(clickRight);
    controlArrows.setVisibleOnly(true, controlArrows.LEFT, controlArrows.RIGHT);

    scene.controlArrows = controlArrows;
}

function clickLeft() {
    console.log(`${this.name} was clicked!`);
    cameras.previous();
}

function clickRight(){
    console.log(`${this.name} was clicked!`);
    cameras.next();
}