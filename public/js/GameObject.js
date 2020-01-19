import {Image} from './Image.js';

export class GameObject extends Image{
    constructor(scene, name, [x,y], textureName){
        super(scene,x,y, textureName);
        this.setName(name);
        this.FIXED_TO_CAMERA=0;
    }

    lock(){
        this.setScrollFactor(this.FIXED_TO_CAMERA);
    }

}