import { GameObject } from "../GameObject.js";

export class ControlArrows {
    constructor(scene, textureName) {
        this.TOP = 'top';
        this.LEFT = 'left';
        this.RIGHT = 'right';
        this.BOTTOM = 'bottom';
        this.ALL = ['top', 'left', 'right', 'bottom'];
        
        this.right = new GameObject(scene, 'right arrow', [775, 300], textureName);
        this.left = new GameObject(scene, 'left arrow', [15, 300], textureName);
        this.top = new GameObject(scene, 'top arrow', [0, 0], textureName);
        this.bottom = new GameObject(scene, 'bottom arrow', [0, 0], textureName);

        this.lock();
    }

    setVisibleOnly(visible, ...arrowKeys) {
        this.setVisible(visible, ...arrowKeys);
        let keysToUnset = this.ALL.filter(key => !arrowKeys.includes(key));
        this.setVisible(!visible, ...keysToUnset);
    }

    setVisible(visible, ...arrowKeys) {
        this.actionOnChosen(arrowKeys, 'setVisible', visible);
    }

    actionOnChosen(arrowKeys, action, ...params){
        for (let key of arrowKeys) {
            this[key][action](params);
        }
    }

    lock(){
        this.actionOnChosen(this.ALL, 'lock');
    }


    
}