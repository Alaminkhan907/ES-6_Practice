const person = {name:'Alamin khan', age:12,job:'fackbook',gfName :'emma watson',address:'tallinn',phone : '017000000', friends:['shakil,jasim,razon']}

const {phone , gfName, address}= person;

const Complexobj = {
    name :'abc',
    info:{
        address:'dhaka',
        leader:'kala mastan'
    }
}
const {leader} = Complexobj.info;
console.log(leader);

//const gfName =person.gfName
//console.log(gfName, phone , address);
//console.log(gfName);

const friends = ['amir khan','salman khan','sharukkh khan', 'shakib khab'];
const [sotoFrient, nextFriend,...restFriend]= friends;
console.log(sotoFrient, nextFriend,restFriend);