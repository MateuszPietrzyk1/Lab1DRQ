class Vehicle{
     //constructor used to initialise data in class
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;   
    }
    //method used to out make , model and year of the vehicle 
    Information(){
        console.log(`Make: ${this.make}`)
        console.log(`Model: ${this.model}`)
        console.log(`Year : ${this.year}`)
    }
}
//creating an instance of a class Car
class Car extends Vehicle{
    constructor(make, model, year, doors){
        //child class Car inheriting from the parent class Vehicle 
        super(make, model, year);
        this.doors = doors;
    }
    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);

    }
    
}
//output make model year doors 
let myCar = new Car(`Vw`,`Golf`,2010,5);
myCar.Information();
//output make model year 
let myVehicle = new Vehicle(`Vw`,`Jetta`,2022);
myVehicle.Information();

