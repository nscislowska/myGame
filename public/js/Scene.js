export class Scene extends Phaser.Scene {

    constructor (config) {
        super(config);
        this.name=this.sys.config.key;
        this.views = null;
        this.assetsImgPath = '../../assets/img/';
        this.viewList = null;
    }

    init(data) {
        console.log('init scene '+this.name+': '+data);
    }
    preload () {}
    create (data)  {}
    update(time, delta) {}

    setAssetsImgPath(assetsImgPath){
        this.assetsImgPath = assetsImgPath;
    }

    getWindowSize(){
        return this.game.getWindowSize();
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

    addCamera(x,y){
        let {height, width} = this.getWindowSize();
        this.cameras.add(x,y,width,height);
    }

    moveCameraX(number){
        this.cameras.main.scrollX = number;
    }

    moveCameraY(number){
        this.cameras.main.scrollY = number;
    }

    getCameraManager(){
        return this.cameras;
    }
    getGameWidth(){
        return this.sys.game.width;
    }
    getGameHeight(){
        return this.sys.game.height;
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