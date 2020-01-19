import { generateSceneConfig, Scene } from "../Scene.js";
import {assetsImgPath} from "./sceneAssetsPath.js";
import {ControlArrows} from "../game-objects/arrows.js";
import { View } from "../View.js";
// import {rexAnchor} from './plugins/anchor.js';

var sceneName = 'main';
var mainSceneConfig = generateSceneConfig(sceneName);
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
    addViews();
    addBackground(mainScene);
    addPlatforms(mainScene);
    addControlArrows(mainScene);
}
mainScene.update = () => {

}
export { mainScene };

function addViews(){
    var currentView = mainScene.camera.currentView;

    var view1 = new View('1', 200, 0);
    var view_1 = new View('-1',-200,0);
    currentView.setRight(view1);
    currentView.setLeft(view_1);
    view1.setRight(view_1);
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
    mainScene.camera.jumpLeft();
}

function clickRight(){
    console.log(`${this.name} was clicked!`);
    // cameras.next();
    mainScene.camera.jumpRight();
}