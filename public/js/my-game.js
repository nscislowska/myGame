import { Game } from "./Game.js";
import {mainScene} from "./scenes/mainScene.js"
import {arrows} from './game-objects/arrows.js'

const WINDOW_SIZE = {
    height: 600,
    width: 800
}

const PARENT_ID = 'game-window';

let myGame = new Game(WINDOW_SIZE, PARENT_ID);

myGame.addControlArrows(arrows);
myGame.addScene(mainScene);
myGame.startScene(mainScene, 'init data');

