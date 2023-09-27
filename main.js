// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         const container=document.querySelector('#mainDiv')
//         container.innerHTML= data.map((post)=>`<div>
//         <h2>${post.title}</h2>
//         <h3>${post.body}</h3>
//         </div>`).join('')
//     })
//     .catch(error=>{
//         console.log(error);
//     })

function fetchJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {
            return response.json()
        })
        .then(data => {
            const container=document.querySelector('#mainDiv')
            container.innerHTML= `<h2>${data.value}</h2>`
        })
        .catch(error=>{
            console.log(error);
        })
}

fetchJoke();
const newJokeBtn=document.querySelector('#jokeBtn');
newJokeBtn.addEventListener('click',fetchJoke);