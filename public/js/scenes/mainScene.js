import { generateSceneConfig, Scene } from "../Scene.js";
import {assetsImgPath} from "./sceneAssetsPath.js";
import { View } from "../View.js";

var sceneName = 'main';
var mainSceneConfig = generateSceneConfig(sceneName);
var mainScene = new Scene(mainSceneConfig);
mainScene.preload = () => {
    mainScene.loadAssets({
        'house_outer': assetsImgPath + 'house_outer.png',
        'star': assetsImgPath + 'star.png',
        'room_backg' : assetsImgPath + 'room_backg.png',
        'room_window':assetsImgPath+'room_window.png',
        'door':assetsImgPath+'door.png'
    });

}
mainScene.createBody = () => {
    makeViews();
    addObjectsToView0();
    addObjectsToView1();
    addObjectsToOutsideView();
    addObjectsToView_1();
    addObjectsToViewToOutside();
    // addPlatforms(mainScene);
};

mainScene.update = () => {

}
export { mainScene };

let view0, outsideView, view1, view_1, viewToOutside;

function makeViews(){
    view0 = mainScene.camera.currentView;
    outsideView = new View('outside', 0, -mainScene.getGameHeight());
    view1 = new View('to_another_room', mainScene.getGameWidth(), 0);
    viewToOutside = new View('to_outside', mainScene.getGameWidth()*2,0);
    view_1 = new View('empty',-mainScene.getGameWidth(),0);

    view0.setBottom(outsideView);
    view0.setRight(view1);
    view0.setLeft(view_1);
    view1.setRight(viewToOutside);
    viewToOutside.setRight(view_1);
    viewToOutside.setTop(outsideView, viewToOutside.DIRECTION.ONE_WAY);

    mainScene.addView(view0);
    mainScene.addView(outsideView);
    mainScene.addView(view1);
    mainScene.addView(view_1);
    mainScene.addView(viewToOutside);
}

function addObjectsToView0(){
    view0.addGameObject('background',0,0,'room_backg');
    view0.addGameObject('window',mainScene.getGameWidth()/5,mainScene.getGameHeight()/10,'room_window');
}

function addObjectsToView1(){
    view1.addGameObject('background',0,0,'room_backg');
    view1.addGameObject('door',mainScene.getGameWidth()/2, mainScene.getGameHeight()/10,'door');
}

function addObjectsToOutsideView(){
    outsideView.addGameObject('background',0,0,'house_outer');
    outsideView.addGameObject('door',mainScene.getGameWidth()/2, mainScene.getGameHeight()/3,'door');
    outsideView.addGameObject('window',mainScene.getGameWidth()/5,mainScene.getGameHeight()/3,'room_window');
}

function addObjectsToView_1(){
    view_1.addGameObject('background',0,0,'room_backg');
}

function addObjectsToViewToOutside(){
    viewToOutside.addGameObject('background',0,0,'room_backg');
    viewToOutside.addGameObject('door',mainScene.getGameWidth()/2, mainScene.getGameHeight()/10,'door');
    viewToOutside.addGameObject('window',mainScene.getGameWidth()/5,mainScene.getGameHeight()/10,'room_window');

}

// function addPlatforms(game) {
//     var platforms = game.physics.add.staticGroup();

//     platforms.create(400, 568, 'ground').setScale(2).refreshBody();

//     platforms.create(600, 400, 'ground');
//     platforms.create(50, 250, 'ground');
//     platforms.create(750, 220, 'ground');
// }