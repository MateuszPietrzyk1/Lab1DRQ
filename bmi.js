
class BMI{
    //constructor used to initialise data in class
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
    //method used to calculate thr formula for BMI 
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }

   
}
//output of the formula 
let myBMI = new BMI(2,100);
console.log(myBMI.calculateBMI());