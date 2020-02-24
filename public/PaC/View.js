import { GameObject } from "./GameObject.js";

export class View{
    constructor(name, x,y){
        this.name = name;
        this.x = x;
        this.y = y;
        this.gameObjects = [];

        this.left = null;
        this.right = null;
        this.top = null;
        this.bottom = null;

        this.DIRECTION = {
            BOTH_WAYS : 2,
            ONE_WAY : 1
        }

        this.setLeft = this.setSideView('left');
        this.setRight = this.setSideView('right');
        this.setBottom = this.setSideView('bottom');
        this.setTop = this.setSideView('top');

        this.getLeft = this.getSideView('left');
        this.getRight = this.getSideView('right');
        this.getBottom = this.getSideView('bottom');
        this.getTop = this.getSideView('top');

    }

    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }

    getSideView(side){
        return () => this[side];
    }

    setSideView(side){
        let opposite = {
            right : 'left',
            top : 'bottom',
            bottom : 'top',
            left : 'right'
        }

        return (view, direction = this.DIRECTION.BOTH_WAYS) => {
            this[side] = view;
            if(direction === this.DIRECTION.BOTH_WAYS){
                view[opposite[side]] = this;
            }
        }
    }

    addGameObject(name, x, y, textureName){
        if(arguments.length===1 && typeof arguments[0] ==='object'){
            let gameObject = arguments[0];
            gameObject.movePositionBy(this.x, this.y);
            this.gameObjects.push(arguments[0]);
        }
        else{
        let globalX = x+this.x;
        let globalY = y+this.y;
        this.gameObjects.push(new GameObject(name,globalX,globalY,textureName));
        }
    }

    getGameObjectByName(name){
        return this.gameObjects.find((gameObject) => gameObject.name === name);
    }

}