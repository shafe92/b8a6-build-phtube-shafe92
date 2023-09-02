const handleCategory = async () => {
const response = await fetch (
   "https://openapi.programming-hero.com/api/videos/categories" 
);
const data = await response.json();

const tabContainer = document.getElementById("tab-container");
data.data.slice(0,4).forEach((category) => {
  const div = document.createElement("div");
  div.innerHTML =`
  <a onclick="handleLoadVideos('${category.category_id}')" class="tab">${category.category}</a> 
  `;  

  tabContainer.appendChild(div);
});
};


const handleLoadVideos = async (categoryId) => {
    const response = await fetch (
        `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
    );
    const data = await response.json();  
const cardContainer = document.getElementById("card-container");
cardContainer.innerHTML = "";

data.data?.forEach((videos) => {
    console.log(videos);
    const div = document.createElement("div");
div.innerHTML = `
<div class="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src="${videos?.thumbnail}">
            </figure>
            <div class="card-body">
                <div>
                    <div class="avatar-online flex gap-2">
                        <div class="w-14 rounded-full">
                            <img src=${videos?.authors[0]?.profile_picture}>
                        </div>
                    <h2 class="card-title">
                        ${videos.title}
                    </h2>
                </div>       
                <div class="card-footer justify-between mt-2 ml-10">
                    <div class="flex">
                    <p>
                    ${videos?.authors[0]?.profile_name} 
                    </p>
                    <p>
                        ${videos?.authors[0]?.verified}
                    </p>
                    </div>
                    <p>
                    ${videos?.others?.views} 
                    </p>
                    </div>
                </div>
            </div>
        </div>
`;
cardContainer.appendChild(div);
});
}; 



handleCategory()
handleLoadVideos("01")