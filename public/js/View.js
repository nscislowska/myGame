export class View {
    constructor(name, scene, visible){
        this.name = null;
        this.scene = null;
        this.visible = null;
        this.objects=new Array();
    }

    addObject(gameObject){
        this.objects.push(gameObject.setVisible(this.visible));
    }

    setVisible(visible){
        this.visible = visible;
    }



}