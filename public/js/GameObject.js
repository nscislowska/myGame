import {Image} from './Image.js';

export class GameObject extends Image{
    constructor(scene, name, [x,y], textureName){
        super(scene,x,y, textureName);
        this.setName(name);
    }


}