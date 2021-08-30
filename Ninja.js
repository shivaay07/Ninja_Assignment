class Ninja{
    constructor(name){
        this.name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.constructor.name);
    }

    showStats(){
        console.log(`name is ${ this.constructor.name } strength is ${ this.strength } speed is ${ this.speed} health is ${this.constructor.health }` )
    }

    drinkSake(){
    this.health += 10;
    console.log(this.health);
    }
}
const myNinja = new Ninja("ninja1");
myNinja.sayName();
myNinja.showStats();
myNinja.drinkSake();