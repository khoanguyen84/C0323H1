// function getPosts(){
    // fetch('https://js-post-api.herokuapp.com/api/posts', {
    //     method: "GET"
    // }).then(function(response){
    //     return response.json()
    // }).then(function(posts){
    //     console.log(posts);
    // })


    // fetch('https://js-post-api.herokuapp.com/api/posts', {
    //     method: "GET"
    // }).then(async function(response){
    //     let posts = await response.json();
    //     console.log(posts);
    // })
// }

async function getPosts() {
    let res = await fetch('https://js-post-api.herokuapp.com/api/posts', {
        method: "GET"
    })
    let posts = await res.json()
    console.log(posts);
}

getPosts();