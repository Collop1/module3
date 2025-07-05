let car = { 
    make: "Porsche", 
    model: '911', 
    year: 1964,  
    description() {         
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);     
    } 
};  
car.description(); //works  
setTimeout(() => car.description(), 200); // uses original cause newCar clones the object not redefines it

const newCar = { ...car, year: 2020 };

newCar.description();