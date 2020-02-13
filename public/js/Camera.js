export class Camera{
    constructor(camera, currentView){
        this.camera = camera;
        this.currentView = currentView;
        this.jumpTo(this.currentView);
    }

    jumpTo(view){
        this.currentView = view;
        this.camera.setScroll(this.currentView.x,this.currentView.y);
        console.log(`view ${this.currentView.name}`);
    }

    jumpLeft() {
        this.jumpTo(this.currentView.getLeft());
    }

    jumpRight(){
        this.jumpTo(this.currentView.getRight());
    }

    jumpTop(){
        this.jumpTo(this.currentView.getTop());
    }

    jumpBottom(){
        this.jumpTo(this.currentView.getBottom());
    }


}