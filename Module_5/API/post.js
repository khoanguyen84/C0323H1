var page = 1;
var totalPage = 0;
function renderPostList(page) {
    console.log(page, totalPage);
    $.ajax({
        method: "GET",
        url: `https://js-post-api.herokuapp.com/api/posts?_page=${page}`,
        success: function (res) {
            totalPage = Math.ceil(Number(res.pagination._totalRows)/Number(res.pagination._limit))
            let htmls = res.data.map(function (post) {
                return `
                    <div class="col-md-6 mb-3">
                        <div class="card">
                            <img src="${post.imageUrl}" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${post.title}</h5>
                                <p class="cart-text">${post.description}</p>
                                <p class="fst-italic">Author: ${post.author}</p>
                            </div>
                        </div>
                    </div>
                `
            })
            document.querySelector('#post-list').innerHTML = htmls.join('');
            // let postListString = '';
            // for (let i = 0; i < postList.length; i++) {
            //     postListString += `
            //             <div class="col-md-6 mb-3">
            //                 <div class="card">
            //                     <img src="${postList[i].imageUrl}" class="card-img-top" alt="">
            //                     <div class="card-body">
            //                         <h5 class="card-title">${postList[i].title}</h5>
            //                         <p class="cart-text">${postList[i].description}</p>
            //                         <p class="fst-italic">Author: ${postList[i].author}</p>
            //                     </div>
            //                 </div>
            //             </div>
            //         `
            // }
            // $('#post-list').append(postListString)
        }
    })
}

function changePage(director){
    if(director == 'previous'){
        if(page > 1){
            page -=1;
        }
    }
    else {
        if(page < totalPage){
            page +=1;
            if(page == totalPage){
                $('#next').addClass('disabled')
            }
            else{
                $('#next').removeClass('disabled');
            }
        }
    }
    
    renderPostList(page)
}

renderPostList(page);
