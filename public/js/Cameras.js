export class Cameras{
    constructor(cameras, width, height){
        this.cameras = cameras;
        this.cameraArray = cameras.cameras;
        this.viewportHeight = height;
        this.viewportWidth = width;
        this.makeMain = false;
    }

    add(x,y){
        this.cameras.add(x,y,this.viewportWidth,this.viewportHeight, this.makeMain);
        this.getLast().setVisible(false);
        // if(viewportCenter!==undefined){
        //     this.cameras.getCamera(this.name).
        // }
    }

    next(){
        let current = this.cameraArray.shift();
        current.setVisible(false);
        this.cameraArray.push(current);

        this.cameraArray[0].setVisible(true);
        
        console.log(`camera id:${this.cameraArray[0].id}`);
    }

    previous(){
        let previous = this.cameraArray.pop();
        previous.setVisible(true);
        this.cameraArray.unshift(previous);

        this.cameraArray[1].setVisible(false);
        
        console.log(`camera id:${this.cameraArray[0].id}`);
    }

    scrollX(number){
        console.log(this.current());
        this.current().scrollX(number);
    }

    getLast(){
        console.log(this.cameraArray[this.cameraArray.length-1]);
        return this.cameraArray[this.cameraArray.length-1];
    }
}