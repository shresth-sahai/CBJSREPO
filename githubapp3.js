// Rate Limit Handling: Implement a feature to handle GitHub's 
// API rate limiting gracefully, perhaps by caching data or informing
//  the user.


// 2 techniques -> throtttling / debouncing 

// control how function run / events fr fired 


// debouncing -> delays a function with a time 
// runs only once user stops performing an action 
// search -> hahkjahkjahkh


// throttle -> fn runs at most once every x secs 

// 5sec -> api -> 

// call 

greet.call("paris");
//apply 
greet.apply(["paris"])
//bind -> return a new function with 
// immediate calling does not happen 
function greet(city){
    console.log("Hi", `city +${name}`)
}
const p={name:"A"}
const greetIndia=greet.bind(p)
greetIndia("paris")
// Hi parisA


// throttle

function throttle(fn,limit){
    let lastCall=0;
    return function (...args){
        const now = Date.now();
        if(now -lastCall>=limit){
            lastCall=now;
            fn.call(args);
        }
    }
}

// debounce
function debounce(fn,delay){
    let timer;

    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(()=>fn.call(args),delay)
    }
}