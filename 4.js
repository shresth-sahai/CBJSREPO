
// .map .filter

// .map -> based on consition// creates a new arr

const n=[1,2,3];
const doubled=n.map(num => num*2)
console.log(doubled);//[2,4,6]

const user=[{
name:"John",
age:25
},{
    name:"Jane",
    age:24
}];

const names=user.map(user=>user.name);
// [ "john", "Jane"]

const  n2=[1,2,3,4]
const evens=n2.filter(nu2=>nu2%2 ===0);
console.log(evens);
//[2,4]
const age25=user.filter(use=> 
    use.age>24);
