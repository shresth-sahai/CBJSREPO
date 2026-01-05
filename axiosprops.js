

// axios.interceptors.response(
//     // metadata -> config 
//     response =>{
//         console.log("Response",response.config.url);
//         console.log(response.status)
//         return response;
//     },
//     error =>{
//         console.log("Response",error.message);
//         console.log(response.status)
//     }
// )

// async function basicGet() {
    
//     try{

//     }
//     catch{

//     }

// }

// async function getWithHeaders() {
//     try{
//         const res=await axios.get('',{
//             // metadata 
//             headers:{
//                 'Accept':'application/json',
//             }
//         })
//     }
//     catch{

//     }
// }
// async function getWithQueryParam() {
//     try{
//         const res= await axios.get(
//             '',{
//                 params:{
//                     limit:5,
//                     format:'json'
//                 }
//             }
//         )
//     }
// }

// // promise -> 3 api end point ->axios -> promise 
// //concurrent requests 
// const res= await Promise.all(
//     [
//         axios.get(''),
//         axios.get('',{
//             params:{

//             }
//         })
//     ]
// )

