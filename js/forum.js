const loadComments = async () => {   
        const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
        const data = await res.json();
        const forums = data.posts;
        // console.log(forums);
        displayForums(forums);
        
}

const displayForums = forums =>{
    console.log(forums);

    const forumContainer = document.getElementById('forum-container');

    forumContainer.textContent = "";



    forums.forEach(forum => {
        // console.log(forum);

        const forumCard = document.createElement('div');
        forumCard.classList = `lg:flex rounded-xl border box-border shadow-xl border-[#bbb4b4] py-6 `;
        forumCard.innerHTML = `
                    <div class="p-12 space-y-4">
                        <div id="active-online" class="avatar online  ">
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
                            <h3 class="text-2xl font-semibold">${forum.title}</h3>
                            <p class="">${forum.description}</p>
                        </div>
                        <hr class="border-dashed border bg-slate-300 mr-8">
                        
                        <div class="flex justify-between mx-auto mr-8">
                            <div>
                                <div class="flex items-center space-x-8">
                                <i class="fa-regular fa-message"><span class="ml-2"></span>${forum.comment_count}</i>
                                <i class="fa-regular fa-eye"><span class="ml-2"></span>${forum.view_count}</i>
                                <i class="fa-regular fa-clock"><span class="ml-2">${forum.posted_time} min</span></i>

                                </div>
                            </div>
                            <div>
                                <button class="text-white bg-green-500 border rounded-[50px] p-1 "><i class="fa-solid fa-envelope-open fa-fw "></i></button>

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

const onlineLoader = forums =>{
    const onlineActive = forums.isActive;
    console.log(onlineActive);


  
}
   




        loadComments();

  
    



 



