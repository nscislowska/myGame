export class Image extends Phaser.GameObjects.Image{
    constructor(scene,x,y, textureName){
        super(scene,x,y,textureName);
        scene.add.existing(this);
        this.x = x;
        this.y = y;
        this.TOP_LEFT = 0;
    }

    onClick(action){
        this.setInteractive().on('pointerdown', action);
    }

    setVisible(visible){
        this.visible=visible;
    }

    setName(name){
        this.name=name;
    }

    setOriginByCode(code){
        this.setOrigin(code);
    }
}