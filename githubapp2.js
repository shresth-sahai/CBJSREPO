// 3. Sorting: Allow the user to sort repositories by name, stars, forks, or open issues.
// 
// 4. Search Filter: Implement a search filter to find repositories by name within the
// user's list. 

// 'https://api.github.com/users/$${user}/repos?per_page=100'

let repos=[]

fetch(`https://api.github.com/users/$${user}/repos?per_page=100`)
.then(r=>res.json())
.then(data=>{
    repos=data ;
    //... give user , table 
    render();
});
function render(){
    // get html elems 

    // xyz -> xyzasbfjnsjf

    let filtered=repos.filter(r=>
        r.name.toLowerCase().includes(query) 
        // upper case // description 
    )
        // sort 

        filtered.sort((a,b)=>{
            let valA,valB;
            // localeCompare -> -1,1,0 
            // 0-> equal 
            // 1 after 
            //-1 before 
            // python.localeComapre(Javascript)-> 1 


            if(sortBy==='name'){
                valA=a.name.toLowerCase();
                valB=b.name.toLowerCase();
                return order === 'asc' ? valA.localeCompare(valB):
                        valB.localeCompare(valA)
            }
            // if(sortBy=='stars')
        })
}

