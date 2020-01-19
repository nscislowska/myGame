export class View{
    constructor(name, x,y){
        this.name = name;
        this.x = x;
        this.y = y;

        this.gameObjects = [];

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

}