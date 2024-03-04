const loadComments = async () => {   
        const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
        const data = await res.json();
        const forums = data.posts;
        // console.log(forums);
        displayForums(forums);
        
}

const displayForums = (forums, event) =>{
    // console.log(forums);

    const forumContainer = document.getElementById('forum-container');

    forumContainer.textContent = "";



    forums.forEach(forum => {
        // console.log(forum);

        const displayStatus = forum =>{
            if(forum.isActive === true) {
                displayStatus.classList.add('hidden');                
            } else (forum.isActive === false)
            displayStatus.classList.remove('hidden');
        }

        const forumCard = document.createElement('div');
        forumCard.classList = `new-div-element lg:flex rounded-xl border box-border shadow-xl border-[#bbb4b4] py-6`;
        forumCard.innerHTML = `
                    <div class="p-12 space-y-4">
                        <div id="active-online" class="avatar online ">
                            <div class="w-24 rounded-full">
                              <img src="${forum.image}" />
                            </div>
                          </div>
                          <div id="active-offline" class="avatar offline hidden">
                            <div class="w-24 rounded-full">
                              <img src="${forum.image}" />
                            </div>
                          </div>
                        
                    </div>
                    <div class="ml-4 space-y-4 text-[424247]">
                        <div class="flex items-center space-x-8">
                            <p># ${forum.category} </p>
                            <p>Author : ${forum.author.name} </p>

                        </div>
                        
                       
                        <div class="space-x-4 space-y-2 mx-auto mr-4">
                            <h3 id="div-title" class="text-2xl font-semibold">${forum.title}</h3>
                            <p class="">${forum.description}</p>
                        </div>
                        <hr class="border-dashed border bg-slate-300 mr-8">
                        
                        <div class="flex justify-between mx-auto mr-8">
                            <div>
                                <div class="flex items-center space-x-8">
                                <i class="fa-regular fa-message"><span class="ml-2"></span>${forum.comment_count}</i>
                                <i id="div-view" class="fa-regular fa-eye"><span class="ml-2"></span>${forum.view_count}</i>
                                <i class="fa-regular fa-clock"><span class="ml-2">${forum.posted_time} min</span></i>

                                </div>
                            </div>
                            <div id=forum-btn>
                                <button onclick="handleList(event)" class="text-white bg-green-500 border rounded-[50px] p-1 "><i class="fa-solid fa-envelope-open fa-fw "></i></button>

                            </div>
                        </div>

                    </div>
        `;
        forumContainer.appendChild(forumCard);
    })
    toggleLoadingSpinner(false); 

}

// search the forum
const loadSearch = async (searchText) => {   
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const forums = data.posts;
    // console.log(forums);
    displayForums(forums);
    
}

const handleSearch = () =>{
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadSearch(searchText);    
}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove("hidden");
    } else {
        loadingSpinner.classList.add("hidden");
    }

}


const handleList = (event) =>{
    const forumCard = event.target.closest('.new-div-element');
    console.log(forumCard);

    

        const title = forumCard.querySelector('#div-title').textContent;
        const viewCount = forumCard.querySelector('#div-view').textContent;

        const forumList = document.querySelector('.forum-list');

        
            const listItem = document.querySelector('div');
            listItem.classList.add('forum-list-item');
            listItem.innerHTML = ` <p>${title}  <i id="div-view" class="fa-regular fa-eye"> ${viewCount}</p>`;
            forumList.appendChild(listItem);
        
            const forumCount = document.getElementById('forum-count');
            forumCount.textContent = document.querySelectorAll('.forum-list-item').length;           
    
}

// <!-- new api function -->
const latestForum = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const data = await res.json();
    // console.log(data);
    const latestPosts = data.data;
    console.log(latestPosts);
    
}





        loadComments();

  
    



 



