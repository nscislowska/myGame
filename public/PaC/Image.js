export class Image extends Phaser.GameObjects.Image{
    constructor(scene,x,y, textureName, owner){
        super(scene,x,y,textureName);
        scene.add.existing(this);
        this.name = undefined;
        this.visible = true;
        this.x = x;
        this.y = y;
        this.TOP_LEFT = 0;
        this.FIXED_TO_CAMERA=0;
        this.owner = owner;
        this.setOrigin(this.TOP_LEFT);
    }
    
    onClick(action){
        if(typeof action === 'function'){
        this.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            let emitter = this.owner;
            action(emitter);
        });
    }
    }

    setOriginByCode(code){
        this.setOrigin(code);
    }

    lockToScreen(isLocked){
        if(isLocked){
            this.setScrollFactor(this.FIXED_TO_CAMERA);
        }
    }

}