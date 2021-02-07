// function doubleIT(num){
//     return num*2;
// }
// const doubleIT = function myFun(num){
//     result num*2;
// }

const doubleIT = num => num*2;
const add = (x,y)=>x+y;
const give5 = ()=>5;
const doMath = (x,y)=>{
    const sum = x+y;
    const diff = x-y;
    const result = sum *diff;
    return result;
}
//const result = doubleIT(50);
//const result = add ( 15,7);
//const result2 = give5();
const result3 = doMath(7,5);
console.log(result3);