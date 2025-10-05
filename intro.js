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

let price=10;
let GST=0.25;

let total= `Total : ${(price*(1+GST)).toFixed(2)}`;

console.log(total);



