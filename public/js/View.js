export class View{
    constructor(name, x,y){
        this.name = name;
        this.x = x;
        this.y = y;

        this.gameObjectsData = [];

        this.leftView = null;
        this.rightView = null;
        this.topView = null;
        this.bottomView = null;
    }

    setLeft(view){
        this.leftView = view;
        view.rightView = this;
    }

    setRight(view){
        this.rightView = view;
        view.leftView = this;
    }

    setTop(view){
        this.topView = view;
        view.bottomView = this;
    }

    setBottom(view){
        this.bottomView = view;
        view.topView = this;
    }

    addGameObject(name, x, y, textureName){
        this.gameObjectsData.push({
            name: name,
            x: x+this.x,
            y: y+this.y,
            textureName: textureName
        })
    }

    putObjectAtFront(name){
        let objectIndex = this.gameObjectsData.findIndex((data)=>{
            return data.name === name;
        });

        let object = this.gameObjectsData.splice(objectIndex, 1);
        this.gameObjectsData.push(object);
    }

}