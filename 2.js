// Loops 
// function a(){
//     console.log("Hello");
// }
// var a=1;
// console.log(a); //1 

// function a(){
//     console.log("hello");
// }
// // let a=1; // errr 

// function a(){
//  console.log("hello2");
// }
// a(); 

// for(let i=0;i<5;i++){
//     console.log(i); 
// }
// for(var i =0;i<5;i++){
//     console.log(i);
// }
// for(const i=0;i<5;i++){
//      console.log(i); // TypeError: Assignment to constant variable.
// }
// let i;
// while(i<10){
//     console.log(i);
//         i++;
// }
// let j=0;

// do{
// console.log(j);
// j++;
// }while(j<10);

// callback -> 
// setTimeout(fucntion,timeperiod); 

// setTimeout(()=> console.log(i),0); 

// var -> fucntion scope / global scope 

// var i;
// for ( i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 0)
// }

// function t(){
//     for(var i=0;i<3;i++){
//         console.log("Inisde",i);
//     }
//     console.log("outside",i);
// }
// t();
// // i = 0  inside 0 
// // i=1  inside 1
// // i=2  inside 2 
// // i=3  outside 3 
 

// 5 5 5 5 5

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 0)
// }
// // i=0 -> 


// const func =(i) =>{
//      setTimeout(() => console.log(i), 0);
// }
// for(var i=0;i<5;i++){
//     func(i)
// }



// // 0-> 4


// block -> let i = 0  -> 0  
// let i = 1  
// let i =2 
// let i =3 .... 

// {
//     let i=0 ; // block scope 
// }


// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 0);
// }


// use case -> 

// -> 
// -> 






// const fruits=["Apple", "Mango"];

// let size=fruits.size;
// fruits.sort(); // alphabetically 

// fruits.reverse(); // reverse 

// sort + reverse  -> desc 

// ES 2023 -> toSorted() // copy of array orignal remians entact

// const month =["Jan","FEB"];
// const sorted=month.toSorted();// sort 

// const reveresed=month.toReversed(); // reverese 

// sort() -? sorts vals as string 
// no -> sort()
// "25" , "100" 
// sort () -> we dont we use with number 

// const points =[40,100,1,4,5];
// // we r manipulating the naitve nature 
// points.sort(function(a,b){
//     return a-b;
// })
// - -> a placed before  + b placed before a 0 no chnage

// sort fucntion depends on engine 
// const a=[]; 

// ES6 -> JAVASCRIPT classes 

//js classes are templates for js objects 

// functional -> first class citizen (fucntion)+ OOP -> 
// class Car{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
//     age(){
//         return 10;
//     }
// }
// const c1=new Car("BMW",20120);
// ()=> {

// }

// class Car{
//     constructor(name){
//         this.name=name;
//     }
//     static a=10;
//     static hello(x){
//         return "Hello"+x.name;
//     }
// }
// const c=new Car("BMW");
// const c1=new Car("Mercedes"); 
// Car.hello(c); 

// callbacks


// js functions r executed in a sequence 
// callback -> func passed as an arg inside other fun
// 2 syn async 
// function a(callback){
    
// }

// console.log("JS 1")
// function sayHello(){
// console.log("Hello after 2 sec");
// }
// setTimeout(sayHello,0);
// console.log("Js 2")

const fruits=["Apple","banana","cherry","date"];

const longNamedFruits=fruits.filter(function(fruit){
    return fruit.length>5; 
});

console.log(longNamedFruits);

// for(let i=0;i<5;i++){

// }

fruits.forEach(function(fruit,index){
    console.log(`${index+1}. ${fruit}`);
})


















