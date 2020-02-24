import { GameObject } from "./GameObject.js";

export class TransitionPoint extends GameObject{
    constructor(name, x, y, textureName, destinationView){
        super(name, x, y, textureName);
        this.opened = true;
        this.destinationView = destinationView;
    }

    close(){
        this.opened = false;
    }

    open(){
        this.opened = true;
    }

    isOpened(){
        return this.opened;
    }

    allowTransition(isAllowed){
        this.isOpened = isAllowed;
        this.emit('transitionAllowed', isAllowed);
    }

}

