export class Coord{
    constructor(x,y){
        this.x = x;
        this.y=y;
    }

    add(coord){
        return new Coord(this.x + coord.x, this.y + coord.y);
    }

    subtract(coord){
        return new Coord (this.x - coord.x, this.y - coord.y);
    }
}