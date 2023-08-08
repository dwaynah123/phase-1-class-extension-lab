// Your code here
class Polygon {
    constructor(intArray){
        this.intArray = intArray;
    }
    get countSides(){
        return this.intArray.length;
    }
    get perimeter(){
        let sum = 0;
        for(let i = 0; i < this.intArray.length; i++){
            sum+=this.intArray[i];
        }
        return sum;
    }
}
class Triangle extends Polygon {
    get isValid(){
        if ((this.intArray[0]+this.intArray[1] > this.intArray[2]) && 
            (this.intArray[2]+this.intArray[0] > this.intArray[1]) &&
            (this.intArray[1]+this.intArray[2] > this.intArray[0])) {
            return true;
        } else{
            return false; 
        }
    }
}
class Square extends Polygon {
    get isValid(){
        if (this.intArray[0] === (this.intArray[1] && this.intArray[2] && this.intArray[3])) {
            return true;
        } else{
            return false; 
        }
    }
    get area() {
        return Math.pow(this.intArray[0], 2);
    }
}