

// ... todo get all id 

const BASE_URl='';

async function fetchRandomJoke() {
    try{
        const res=await fetch(`${BASE_URl}/api/jokes/random`);
        if(!res.ok){
            // return 
        }
        const joke=await res.json();
        // id -> joke
    }
    catch(e){

    }
}
async function fetchAllJokes() {
    try{
        const res=await fetch(`${BASE_URl}/api/jokes/`);
        if(!res.ok){
            // retunr
        }
        const joke=await res.json();
        // id -> joke
    }
    catch(e){

    }
}

// post 
async function addNewJoke() {
    const text= // new joke from ui 
    // if null return 

    try {
        const res=await fetch(`${BASE_URL}/api/jokes`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({text})
        });
        if(!res.ok){
            // text content : failed

            return;
        }
        const created=await res.json();
        // 
        fetchAllJokes();
    }
    catch(e){

    }
}


randomJokeBtn.addEventListener("click",fetchAllJokes);

fetchAllJokes()