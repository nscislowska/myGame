export class Game{
    constructor({width, height}, HTMLParentID){

        this.config = {
            type: Phaser.AUTO,
            parent: HTMLParentID,
            width: width,
            height: height,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: false
                }
            },
            scene : null
        }
        
        this.game = new Phaser.Game(this.config);

        this.game.getWindowSize = function(){
            return{
                height: this.canvas.height,
                width: this.canvas.width
            }
        }
    }

    addScene(myScene){
        this.game.scene.add(myScene.name, myScene, false);
    }

    startScene(myScene, initData){
        this.game.scene.start(myScene.name, initData);
    }
    
}