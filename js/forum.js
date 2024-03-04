const loadComments = async () => {   
        const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
        const data = await res.json();
        const forums = data.posts;
        // console.log(forums);
        displayForums(forums);
        
}

const displayForums = forums =>{
    console.log(forums);

    const forumContainer = document.getElementById('forum-container');



    forums.forEach(forum => {
        // console.log(forum);

        const forumCard = document.createElement('div');
        forumCard.classList = `flex rounded-xl border box-border shadow-xl border-[#bbb4b4] py-6 gap-6 `;
        forumCard.innerHTML = `
                    <div class="p-12 space-y-4">
                        <div class="avatar online ">
                            <div class="w-24 rounded-full">
                              <img src="${forum.image}" />
                            </div>
                          </div>
                          <div class="avatar offline hidden">
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
                        
                       
                        <div class="space-x-4 space-y-2">
                            <h3 class="text-2xl font-semibold">${forum.title}</h3>
                            <p>${forum.description}</p>
                        </div>
                        <hr class="border-dashed border bg-slate-300">
                        <div class="flex justify-between text-center items-center">
                            <div>
                                <div class="flex items-center space-x-8">
                                <i class="fa-regular fa-message"><span class="ml-2"></span>${forum.comment_count}</i>
                                <i class="fa-regular fa-eye"><span class="ml-2"></span>${forum.view_count}</i>
                                <i class="fa-regular fa-clock"><span class="ml-2">${forum.posted_time} min</span></i>

                                </div>
                            </div>
                            <div>
                                <button class="text-center justify-center text-white bg-green-500 border rounded-[50px] p-1 "><i class="fa-solid fa-envelope-open fa-fw "></i></button>

                            </div>
                        </div>

                    </div>
        `;
        forumContainer.appendChild(forumCard);
    })

}




        loadComments();

  
    



 



