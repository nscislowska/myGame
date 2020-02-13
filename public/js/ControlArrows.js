import { GameObject } from "./GameObject.js";

export class ControlArrows {
    constructor(textureName) {
        this.scene = null;
        this.textureName = textureName;
        this.POSITION = {
            MIDDLE : 'MIDDLE'
        }

        this.position = {
            top :[],
            bottom :[],
            left : [],
            right : []
        }

        this.TOP = 'top';
        this.LEFT = 'left';
        this.RIGHT = 'right';
        this.BOTTOM = 'bottom';
        this.ALL = [this.TOP, this.LEFT, this.RIGHT, this.BOTTOM];
    }

    render(scene){
        this.scene = scene;
        this.setPosition(this.POSITION.MIDDLE);
        this.right = new GameObject(scene, 'right arrow', this.position.right, this.textureName);
        this.left = new GameObject(scene, 'left arrow', this.position.left, this.textureName);
        this.top = new GameObject(scene, 'top arrow', this.position.top, this.textureName);
        this.bottom = new GameObject(scene, 'bottom arrow', this.position.bottom, this.textureName);

        this.setVisibleIfCanJump();

        this.setOnclick();

        this.lock();
    }

    setPosition(code){
        let gameHeight = this.scene.getGameHeight();
        let gameWidth = this.scene.getGameWidth();

        let margin = 30;

        switch (code){
            case 'MIDDLE' : 
                this.position.top = [gameWidth/2, margin];
                this.position.bottom = [gameWidth/2, gameHeight - margin];
                this.position.left = [margin, gameHeight/2];
                this.position.right = [gameWidth - margin, gameHeight/2];
                break;
            default:
                break;

        }
    }

    setVisibleIfCanJump(){
        let visibleArrows = [];
        if(this.scene.getCurrentView().getLeft() != null){
            visibleArrows.push(this.LEFT);
        }
        if(this.scene.getCurrentView().getRight() != null){
            visibleArrows.push(this.RIGHT);
        }
        if(this.scene.getCurrentView().getTop() != null){
            visibleArrows.push(this.TOP);
        }
        if(this.scene.getCurrentView().getBottom() != null){
            visibleArrows.push(this.BOTTOM);
        }
        this.setVisibleOnly(true, visibleArrows);
    }

    setOnclick(){
        let camera = this.scene.camera;

        this.left.onClick(this.makeOnClick(()=>{
            camera.jumpLeft();
        }   
        ));
        this.right.onClick(this.makeOnClick(()=>{
            camera.jumpRight();
        }
        ));
        this.top.onClick(this.makeOnClick(()=>{
            camera.jumpTop();
        }
        ));
        this.bottom.onClick(this.makeOnClick(()=>{
            camera.jumpBottom();
        }
        ));
    }

    makeOnClick(individualAction){
        return () =>{
            individualAction();
            this.setVisibleIfCanJump();
        }
    }
   
    lock(){
        this.actionOnChosen(this.ALL, 'lock');
    }

    setVisibleOnly(visible, arrowKeys) {
        this.setVisible(visible, ...arrowKeys);
        let keysToUnset = this.ALL.filter(key => !arrowKeys.includes(key));
        this.setVisible(!visible, ...keysToUnset);
    }

    setVisible(visible, ...arrowKeys) {
        this.actionOnChosen(arrowKeys, 'setVisible', visible);
    }
    actionOnChosen(arrowKeys, action, ...params){
        for (let key of arrowKeys) {
            this[key][action](...params);
        }
    }
}

