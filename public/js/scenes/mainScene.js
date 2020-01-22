import { generateSceneConfig, Scene } from "../Scene.js";
import {assetsImgPath} from "./sceneAssetsPath.js";
import { View } from "../View.js";

var sceneName = 'main';
var mainSceneConfig = generateSceneConfig(sceneName);
var mainScene = new Scene(mainSceneConfig);
mainScene.preload = () => {
    mainScene.loadAssets({
        'sky': assetsImgPath + 'sky.png',
        'star': assetsImgPath + 'star.png',
        'ground': assetsImgPath + 'ground.png'
    });

}
mainScene.createBody = () => {
    makeViews();
    addObjectsToView0();
    addObjectsToView1();
    addObjectsToView01();
    // addPlatforms(mainScene);
};

mainScene.update = () => {

}
export { mainScene };

let view0, view01, view1, view_1;

function makeViews(){
    view0 = mainScene.camera.currentView;
    view01 = new View('01', 0, mainScene.getGameHeight());
    view1 = new View('1', mainScene.getGameWidth(), 0);
    view_1 = new View('-1',-mainScene.getGameWidth(),0);

    view0.setTop(view01);
    view0.setRight(view1);
    view0.setLeft(view_1);
    view1.setRight(view_1);

    mainScene.addView(view0);
    mainScene.addView(view01);
    mainScene.addView(view1);
}

function addObjectsToView0(){
    view0.addGameObject('background',0,0,'sky');
    view0.addGameObject('ground',0,570,'ground');
}

function addObjectsToView1(){
    view1.addGameObject('background',0,0,'sky');
    view1.addGameObject('ground',300,300,'ground');
    view1.addGameObject('ground',100,570,'ground');
}

function addObjectsToView01(){
    view01.addGameObject('background',0,0,'sky');
}

function addPlatforms(game) {
    var platforms = game.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
}