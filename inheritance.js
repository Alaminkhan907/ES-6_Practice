class Parent{
    constructor(){
        this.fatherName = 'Schwerznegger';
    }
    getFullName(){
        // function can be write here 
        return this.name +" "+ this.fatherName;
    }
}
class child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new child('arnold');
const baby2 = new child('tom')
console.log(baby.getFullName());
console.log(baby,baby2);