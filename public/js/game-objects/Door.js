import { TransitionPoint } from "../../PaC/TransitionPoint.js";

export class Door extends TransitionPoint{
    constructor(name, x, y, textureName, destinationView){
        super(name, x, y, textureName, destinationView);

        this.onClick(this.onClickAction);
    }
    
    onClickAction(emitter) {
        if(!emitter.isOpened()){
            console.log(emitter.getName()+' is closed');
        } else{
            console.log(emitter.getName()+' is opened');
        }
    }
    
}



