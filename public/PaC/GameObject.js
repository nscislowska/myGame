import {Image} from './Image.js';
import { Coord } from './Coord.js';

export class GameObject{
    constructor(name, x=0, y=0, textureName){
        this.image = undefined;
        this.initProperties = {
            name:name,
            x:x,
            y:y,
            visible : true,
            lockToScreen : false,
            onClick : undefined,
            textureName : textureName,
        };

        this.view = undefined;

        this.makeImageFunctionCaller('lockToScreen');
        this.makeImageFunctionCaller('onClick');

        this.makeGetterForImageProperty('x');
        this.makeSetterForImageProperty('x');
        this.makeGetterForImageProperty('y');
        this.makeSetterForImageProperty('y');
        this.makeSetterForImageProperty('visible');
        this.makeGetterForImageProperty('name');
        this.makeSetterForImageProperty('name');
    }

    setView(view){
        this.view = view;
    }

    computeGlobalPosition(){
        this.movePositionBy(this.view.getX(), this.view.getY());
    }

    setTexture(textureName){
        this.initProperties.textureName = textureName;
    }

    setPositionByGlobal(x,y){
        this.setX(x);
        this.setY(y);
    }

    setPositionByLocal(localX,localY){
        let newLocalPosion = new Coord(localX, localY);
        let globalPosition = new Coord(this.getX(),this.getY());
        let viewPosition = new Coord(this.view.getX(),this.view.getY());
        let currentLocalPostion = globalPosition.subtract(viewPosition);
        let offset = newLocalPosion.subtract(currentLocalPostion);
        this.movePositionBy(offset.x, offset.y);
    }

    movePositionBy(offsetX,offsetY){
        this.setX(this.getX()+offsetX);
        this.setY(this.getY()+offsetY);
    }

    make(scene){
        this.image = new Image(
            scene,
            this.initProperties.x,
            this.initProperties.y, 
            this.initProperties.textureName,
            this
            );
        this.setVisible(this.initProperties.visible);
        this.setName(this.initProperties.name);
        this.onClick(this.initProperties.onClick);
        this.lockToScreen(this.initProperties.lockToScreen);

        return this.image;
    }

    makeImageFunctionCaller(functionName){
        let functionCalledBeforeImageExisted = false;
        this[functionName] = (...parameters) => {
            if(this.image !== undefined){
                this[functionName] = function(...parameters){
                    this.image[functionName](...parameters);
                }
                if(functionCalledBeforeImageExisted){
                   parameters = parameters[0];
                }
                this[functionName](...parameters);
            }
            else{
                functionCalledBeforeImageExisted = true;
                this.initProperties[functionName] = parameters;
            }
            
        }
    }


    makeSetterForImageProperty(property){
        let functionName = 'set'+this.capitalize(property);
        this[functionName] = (value) => {
            if(this.image !== undefined){
                this[functionName] = function(value){
                    this.image[property]=value;
                }
                this[functionName](value);
            }
            else{
                this.initProperties[property] = value;
            }
            
        }
    }

    makeGetterForImageProperty(property){
        let functionName = 'get'+this.capitalize(property);
        this[functionName] = () =>{
            if(this.image !== undefined){
                this[functionName] = () => {
                    return this.image[property];
                }
                return this[functionName]();
            }else{
                return this.initProperties[property];
            }
        }
    }

    

    capitalize(string){
        return string[0].toUpperCase()+string.slice(1);
    }
    
}