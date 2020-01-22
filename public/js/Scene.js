import { Camera } from "./Camera.js";
import { View } from "./View.js";
import { GameObject } from "./GameObject.js";

export class Scene extends Phaser.Scene {

    constructor (config) {
        super(config);
        this.name=this.sys.config.key;
        this.assetsImgPath = '../../assets/img/';
        this.views = [];
        this.camera = null;
    }

    init(data) {
        console.log('init scene '+this.name+': '+data);
        this.camera = new Camera(this.cameras.main, new View('main',0,0));
    }
    preload () {}
    create (data)  {
        this.createBody(data);
        this.makeGameObjects();
        this.sys.game.controlArrows.render(this);
    }
    createBody(data){}
    update(time, delta) {}

    setAssetsImgPath(assetsImgPath){
        this.assetsImgPath = assetsImgPath;
    }

    loadAssets(assets){
        console.log(this.name+' load assets');
        for(let name of Object.keys(assets)){
            console.log(name, assets[name]);
            this.load.image(name, assets[name]);
        }
    }

    addObjects(objects){
        for(let object of objects){
            this.add.existing(object);
        }
    }

    getCameraManager(){
        return this.cameras;
    }
    getGameWidth(){
        return document.getElementsByTagName('canvas')[0].width;
    }
    getGameHeight(){
        return document.getElementsByTagName('canvas')[0].height;
    }

    addView(view){
        this.views.push(view);
    }

    getCurrentView(){
        return this.camera.currentView;
    }

    makeGameObjects(){
        let id=0;
        for(let view of this.views){
            for(let data of view.gameObjectsData){
                let gameObject = new GameObject(this, id++, [data.x, data.y], data.textureName);
                gameObject.setOriginByCode(gameObject.TOP_LEFT);
                this.add.existing(gameObject);
            }
        }
    }

}

export function generateSceneConfig(name){
    return {
        key: name,
        //starts as active - updates each step
        active: false,
        //starts as visible - renders each step
        visible: false,
        input : {
            keyboard: {
                target: window
            },
            mouse: {
                target: null,
                capture: true
            },
            activePointers: 1,
            touch: {
                target: null,
                capture: true
            },
            smoothFactor: 0,
            gamepad: false,
            windowEvents: true,
        }
    };
}