/*

WEb Storage APIS 

Local storage-> Browser -> 
Data store browser ->even after closing it stays 
preferences settings cached 


Session Storage -> session data -> only that duration of the session
browser close -> removed 


KEY _VALUE 

5 mb -10 mb 

*/

const recipeForm=document.querySelector('#recipe-form');
const recipeContainer=document.querySelector('#recipe-container')
let listItems=[]


function handleFormSubmit(e){

        e.preventDefault();

        // XSS -> Cross site scripting 
        const name=DOMPurify.sanitize(recipeForm.querySelector('#name').value);
        const method=DOMPurify.sanitize(recipeForm.querySelector('#method').value);
        const roast=DOMPurify.sanitize(recipeForm.querySelector('#roast').value);
        const grind=DOMPurify.sanitize(recipeForm.querySelector('#grind').value);
        const ratio=DOMPurify.sanitize(recipeForm.querySelector('#ratio').value);
        const note=DOMPurify.sanitize(recipeForm.querySelector('#note').value);

        const newRecipe={
            name,method,roast,grind,ratio,note,id:Date.now()
        }
        listItems.push(newRecipe);
        e.target.reset();

        // event dispatching 
        recipeContainer.dispatchEvent(new CustomEvent('refreshRecipes'));

}
function mirrorStateToLocalStorage(){
    localStorage.setItem('recipeContainer.list',JSON.stringify(listItems));
}
