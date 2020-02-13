export class View{
    constructor(name, x,y){
        this.name = name;
        this.x = x;
        this.y = y;

        this.gameObjectsData = [];
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
        this.gameObjectsData.push({
            name: name,
            x: x+this.x,
            y: y+this.y,
            textureName: textureName
        })
    }

    putGameObjectAtFront(name){
        let objectIndex = this.gameObjectsData.findIndex((data)=>{
            return data.name === name;
        });

        let object = this.gameObjectsData.splice(objectIndex, 1);
        this.gameObjectsData.push(object);
    }

    getGameObjectByName(name){
        return this.gameObjects.find((gameObject) => gameObject.name === name);
    }

}