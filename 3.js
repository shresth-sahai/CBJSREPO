
// // EVENT LOOP -> 
// // Sync 
// // callback 
// // function greet(name,callback){
// //     console.log("Hello",name);
// //     callback();
// // }



// // function sayGoodBye(){
// //     console.log("GoodBye!");
// // }

// // greet("Alice",sayGoodBye); 

// // Hello Alice 
// // Goodbye 


// // const numbers=[1,2,3,4];
// // numbers.forEach(function(num){
// //     console.log(num); 
// // })

// // Async -> 
// // console.log("Hello ");
// // setTimeout(function(){
// //     console.log("Async Callback");
// // },1000)
// // console.log("End");



// // Hello End Async Callback 

// // -----------------------------------// 
// // X -> Y 
// // callback HEll -> single , hard to maintain ,
// //  difficult to understand
// // SOLID -> SINGLE Responsibility -> func , class 
// // single thread 
// getData(function (a)
// {
//     getMoreData(function b(){
//         getMoreData2(function c(){

//         })
//     })
// })

// // -----------------------------------// 

// // Promise -> Async -> Object -> represent -> eventual 
// // failure / success 
// // pending -> fail / success 
// const p =new Promise (function (resolve,reject){
// const success =true;
// if(success){
//     resolve("Opr success!")
// }
// else{
//     reject("Opr Failed!")
// }
// })
// // -----------------------------------// 

// // .then()
// // consuming promises 
// // p
// // .then(function(result){
// //     console.log("Success",result);
// // })
// // .catch(function(err){
// //     console.log("Failure",err);
// // })
// // p
// // .then(result =>  console.log("Success",result))
// // .catch(err=> console.log("Failure",err))
// // .finally(()=> console.log("Always run"));


// // -----------------------------------// 
// // function fetchUserData(userId){
// //     return new Promise((resolve, reject)=>{
// //         setTimeout(()=>{
// //             if(userId>0){
// //                 resolve({id:userId,name:"John"});
// //             }
// //             else{
// //                 reject("Invalid User ID")
// //             }
// //         },1000)
// //     });
// // }
// // fetchUserData(1)
// // .then(user => {
// //     console.log("user:",user);
// //     return user.id;
// // })
// // .then(userId=>{
// //     console.log("USer ID",userId); 
// // })
// // .catch(err =>{
// //     console.log("Error")
// // })

// // -----------------------------------// 

// // getData(function (a){
// //     getMoreData(a,function(b){
// //         getEvenMoreData(b,function c(){
// //             console.log(c);
// //         })
// //     })
// // })

// // getData()
// // .then(a => getMoreData(a))
// // .then(b=>getEvenMoreData(b))
// // .then(c=>console.log(c))
// // .catch(err => console.log(err));

// // function abc  (a){

// // }

// // (a) => abc(a);

// // () => {
// //     abc(a);
// // }


// // -----------------------------------// 
// // Promise.all 
// // -> 
// const p1=Promise.resolve(3);
// console.log(p1);
// const p2=new Promise(resolve=> setTimeout(()=> resolve ("foo"),100));
// p2.then(res => console.log(res));
// const p3=Promise.resolve(12); 

// // -----------------------------------// 

// Write a function checkNumber(num) that returns a 
// Promise. If num is greater than 10, resolve with "Number is big"; 
// otherwise, reject with "Number is small".

// function c(n){
//     return new Promise(resolve,reject => { 
//         if(n>10) resolve("Big")
//         else reject ("Small")
//     })
// }
// c(11).then(result => console.log(result))
// .catch(err => console.log(err)); 


// // -----------------------------------// 

// Write a function doubleNumber(num) that returns a Promise.
//  It should resolve with double the number 
// if num is even, or reject with "Not an even number".


// // -------------------------------------------------// 

// console.log(1)// Sync JS 

// const promise = new Promise((resolve) => { // micro 
//   console.log(2) // sync JS 
//   resolve()
//   console.log(3) // Sync JS 
// })

// console.log(4) // Sync JS 

// promise.then(() => {
//   console.log(5)
// }).then(() => {
//   console.log(6)
// })

// console.log(7) // Sync JS 

// setTimeout(() => {
//   console.log(8)
// }, 10)
// setTimeout(() => {
//   console.log(9)
// }, 0)

// 1 


// // // -------------------------------------------------// 
// console.log(1)  // call stack 
// setTimeout(() => {
//   console.log(2)
// }, 10) // macro 
// setTimeout(() => {
//   console.log(3)
// }, 0); // macro 
// new Promise((_, reject) => {
//   console.log(4) // call stack 
//   reject(5) // micro
//   console.log(6) // call stack 
// }).then(() => console.log(7)) 
// .catch(() => console.log(8))
// .then(() => console.log(9))
// .catch(() => console.log(10))
// .then(() => console.log(11))
// .then(console.log) // undefined 
// .finally(() => console.log(12)) // micro 
// console.log(13) // call. stack 


// 

// // -------------------------------------------------// 
// new Promise((resolve, reject) => {
//     resolve(1)
//     reject('error')
//     resolve(2)
//     resolve(3)
// }).then((value) => {
//   console.log(value)
// }, (error) => {
//   console.log('error')
// })
// // 1 

console.log("5"-1);
// type coercion -> - -> 

console.log("5"+ 1); // -> concat 