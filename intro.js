// High level , interpreted , browser -> node js 
// primary purpose is to create interactive web pages 
// browser -> 
// server -> node js 

// dynamic typed , single thread async capabilities 

// everyhting in  is an object 

// functions are first class citizens 

// type of variables 
// var a;  // function scoped can be redeclared 
// let b; // block scoped cannot be redeclared 
// const c=1; // block scoped cannot be reassigned 

// function a(){

// }

// {
//     let x=2; 
// }
// not possibble
// let x=0;
// let x="Hi"'

// let x=10;
// console.log(x)
// {
//     let x=2;
//     console.log(x)
// }
// console.log(x)


// hoisting  -> var functions 

// console.log(z); // undefined 
// var z;


// console.log(x); //undefined 
// {
//     var x=1; 
// }
// console.log(x); // 1


// console.log(a);
// let a=1; // reference error 


// console.log(s);  // undefined
// var s=1;
// console.log(s);  // 1 

// console.log(s1);  // undefined
// var s1;

//  console.log(f); // [Function]


// function f(){
//     console.log("Hello"); 
// }

// f();

// primitive type -> Number , String ('' , "",), Boolean , Undefined (declared but not assigned)
//null (intentional absence of value), SYmbol , BigInt

// typeof

// Q1 
// function test() {
//   if (true) {
//     var a = 1;
//     let b = 2;
//   }
//   console.log(a);// 1
//   console.log(b); //refernce err 
// }
// test();

// // q2 

// var a = 1;
// // hoisting
// function test() {
// console.log(a);// undefined 
// var a = 2;
// console.log(a) // 2
// }
// test();
// console.log(a); //1 
// // Q3 
// let a = 'outer';
// {
//   console.log(a); // ref err 
//   let a = 'inner';
// }
// // Q3 
// var a = 'outer';
// {
//   console.log(a); // outer  
//   var a = 'inner';
// }
// // q4 
// var x = 1;
// console.log(x);
// let x = 2;
// console.log(x);
// zomato -> district -> 

// function declared inside block are hosited to the top of the block 

// function outer() {
//   console.log(typeof f); 
//   if (true) {
//     var f = 10;
//     function f() {}
//   }
//   console.log(typeof f);
// }
// outer();

//Function

//1 hoisting
// 2 this keyword
// function abc(){

// }
// shorthand of funtion 
// const abc => {

// }


// // function exp  -> non hoisted . must be defined before calling 
// const a = function(){
//     console.log("HEELPP")
// }
// console.log(a);

// const functionName= function(params){
//     return Value;
// }

// // arrow 
// // no this keyowrd

// const functionName1= (params)=>{
//     return a;
// }

// const f1 =(param) => Val;

// function greet(name)
// {
//     return `Hello, ${name}`;
// }

// const a=greet("Welcomee");
// console.log(a);

// IIFE

// (function (){

// }) ();

// function sayHello(){
// console.log("HELLO");
// }
// sayHello();


// (function (){
// console.log("Hello")
// }) ();

// errr 
// var x = 'global';
// (function() {
//   console.log(x);
//   if (false) {
//     var x = 'hoisted but not assigned';
//   }
//   let x = 'block';
// })();



// function a() { return 'first'; }
// var a;
// function a() { return 'second'; }
// console.log(a());

// let text='John';
// let t1="John";

// let t3="'john'";

// // template strings -> ES6 
// let t5=`I m js dev`;

// const l=t5.length;


// let text3="the character \\ is called backslash";

// let te=`the abc 
// csd
// jjjlf`;
// console.log(te)


// interpolation -> `${name}`

// let price=10;
// let GST=0.25;

// let total= `Total : ${(price*(1+GST)).toFixed(2)}`;

// console.log(total);
let tex="HELLO";
let char=text.charAt(0);

// let c2=text[2];
// let t3=text.concat(" ",c2);


// string parts


// slice(start,end)
//substring(start,end)
//substr(start,length)

// let text="Apple, Banana, Kiwi";
// let part=text.slice(3,7);
// let paer2=tex.slice(7);
// let part3=slice(-12);// counted from the end of the point, right to left calc

// // substring -> 

// let str="Mozilla";
// console.log(str.slice(5,2)); // ""
// console.log(str.substring(5,2)); "zil"

// let aa="abc adc";
// let aa1=aa.replace("abc","edf");

// 15 digits
// let x=3.14;
// let y=3;

// let x=10;
// let y=20;
// let sum=x+y;
// console.log(sum);

let x1='10';
let y1=20;
let sum=x+y;
console.log(sum); //1020

// Note string + number =string 
// 10+20+'30'->3030

// "100"/"10"-> 10
//"100"-"10"-> 90 

//Nan -> Not a Number 


// let x=100/"Apple"// Nan

// infinity 
// 5/0 

// let y= new Number(123); // slow 

// class c{

// }

// C c=new C("value");


// let xx= 10;
// let xxx=new Number(10);
// obj in js can't be compared 
// == value && === value & type 

// == false & === false 


// const obj ={
//     type:"Maruti", model :"400",color:"WHite"
// }
// reassign to point to diff varoable 
// obj literal 

// const p={};
// p.firstName="John";


// const p1=new Object({

// })

const p11={
    lname:"Doe",
    fullname: function(){
        return "John"+this.lname;
    }
}// this has context of the current object 




// console.log(0 == false) // true 
// console.log('' == false) // true
// console.log([] == false) // object -> primitive ,  toString() -> '' -> 
// // false               // true 
// console.log(undefined == false) // false 
// console.log(null == false). // false 
// console.log('1' == true). //true 
// console.log(' 1     ' == true) //  true 

// !
// !1-> !0-> 1 if(1) if(0) 

// console.log([] == 0) // true
// console.log([] == false) // true
// console.log(!![])  // true
// console.log([1] == 1) // true 
// console.log(!![1]) // true 
// console.log(Boolean([])) // true 
// console.log(Boolean(new Boolean([]))) // true  boolean of some object 
// console.log(Boolean(new Boolean(false))) // true 



console.log(0 == '0')
console.log(0 === '0')
console.log(Object.is(0, '0'))

console.log(0 == 0)
console.log(0 === 0)
console.log(Object.is(0, 0))

console.log(0 == -0)
console.log(0 === -0)
console.log(Object.is(0, -0))

console.log(NaN == NaN)
console.log(NaN === NaN)
console.log(Object.is(NaN, NaN))

console.log(0 == false) // true 
console.log(0 === false) // false
console.log(Object.is(0, false))

// if(false) if(0)  



// const obj ={
//     id:Date.now(),
//     text:"Hi",
//     completed:false
// };
// // spread operator 
// const ob2={
//     ...obj, completed:true
// }










