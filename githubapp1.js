
const searchBox=document.getElementById()

//.... get all req html elems 


// .... 
let searchTimeout=null; // 

searchBox.addEventListener('input',()=>{
    clearTimeout(searchTimeout);
    const query=searchBox.ariaValueMax.trim();
    if(!query){
        resultDiv.innerHTML='';
    }
    // debouncing 
    searchTimeout= setTimeout(()=> searchUsers(query),500);
})

async function searchUsers(query) {
    
    try{
        const res= await fetch(`http://api.github.com/search/users?q={query}`);
        const data=res.json();


        console.log(data) ;
    }
}
