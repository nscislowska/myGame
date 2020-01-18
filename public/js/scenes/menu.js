function create(){
    let sceneGroup = [];
    var menuConfig = {
        key: 'menu',
        active: false,
        visible: true,
        input : {
            keyboard: {
                target: window
            },
            mouse: {
                target: null,
                capture: true
            },
            activePointers: 1,
            touch: {
                target: null,
                capture: true
            },
            smoothFactor: 0,
            gamepad: false,
            windowEvents: true,
        }
    };
    sceneGroup = new Scene(menuConfig);
    
    var firstConfig = {
        key: 'first',
        active: false,
        visible: true
    };
    sceneGroup.push(new Scene(firstConfig));
    
    addScenesToGame(sceneGroup);
    
    addBackground(this);
    addPlatforms(this);
    
    // this.sceneGroup[0].input.enabled = true;
    // keyObj = this.sceneGroup[0].input.keyboard.addKey('W');
    // console.log(keyObj);
    
    myGame.game.scene.start('menu', 'this is menu scene');
}

// function update ()
// {
//     keyObj = mySceneGroup[0].input.keyboard.addKey('W');
//     // console.log(keyObj);
//     if(keyObj.isDown){
//         game.scene.switch('first');
//     }
// }
function addScenesToGame(sceneGroup){
    console.log('add scenes');
    console.log(sceneGroup);
    for(let myScene of sceneGroup){
        myGame.game.scene.add(myScene.name, myScene, false);
    }
}

function addBackground(myScene){
    console.log(myScene);
    myScene.add.image(0, 0, 'sky').setOrigin(0, 0);
    myScene.add.image(10, 10, 'star');
}

function addPlatforms(game){
    var platforms = game.physics.add.staticGroup();
    
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
}

function loadAssets(myScene){
    myScene.load.image('sky', 'assets/img/sky.png');
    myScene.load.image('star', 'assets/img/star.png');
    myScene.load.image('ground', 'assets/img/ground.png');

}

