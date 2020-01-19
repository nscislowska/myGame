export class Camera{
    constructor(camera, currentView){
        this.camera = camera;
        this.currentView = currentView;
        this.jumpTo(this.currentView);

        
    }

    jumpTo(view){
        this.currentView = view;
        console.log(this.currentView);
        this.camera.setScroll(this.currentView.x,this.currentView.y);
        console.log(`view ${this.currentView.name}`);
    }

    jumpLeft(){
        this.jumpTo(this.currentView.leftView);
    }

    jumpRight(){
        this.jumpTo(this.currentView.rightView);
    }


    setTop(){
        this.jumpTop = this.jumpTo(this.currentView.topView);
    }

    setBottom(){
        this.jumpBottom = this.jumpTo(this.currentView.bottomView);
    }


}