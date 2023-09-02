const handleCategory = async () => {
    const response = await fetch( `https://openapi.programming-hero.com/api/videos/categories`);
   
    const data = await response.json();
const buttonContainer=document.getElementById('button-container');

let isSlice = '';
if (true) {
    isSlice = data.data;
}
else {
   
isSlice= data.data.slice(0,3);

}

isSlice.forEach((category) => {
const div = document.createElement("div");
div.innerHTML = `
    
<button onclick="handleLoadNews('${category.category_id}')" class="btn text-gray-500 bg-gray-100">${category.category}</button>
    `;
buttonContainer.appendChild(div);
});

}

const handleLoadNews = async (categoryId) => {

    const response = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
    );
    const data = await response.json();
  
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const WithoutData=document.getElementById('without-data');
  if(!data.status){
    WithoutData.classList.remove('hidden')
  }
  else{
    data.data?.forEach((news) => {
      
      const div = document.createElement("div");
      div.innerHTML = `
          <div class="card container mx-auto mt-6 w-96 bg-gray-100 shadow-xl">
          <figure class="w-full h-[200px] relative">
            <img 
              src=${news?.thumbnail}
            />
            <h2 class="text-white text-xs bg-black w-[100px] absolute bottom-0 ml-5 right-0 ">${news.others.posted_date?setTime(news.others.posted_date)+' ago':''}</h2>
          </figure>
          
    
            
           
            <div class=" flex justify-between mt-8">
              <div class="flex">
                <div>
                  <div class="avatar">
                    <div class="w-[40px] h-[40px] rounded-full mt-6 ml-5">
                      <img
                        src=${news.authors[0]?.profile_picture}
                      />
                    </div>
                   
                  </div>
                  
                </div>
                <div> <div class="card-body">
                <h2 class="card-title items-center">
                 ${news?.title}
                 
                </h2>
                <div>
                      <h6 class="flex">${news.authors[0]?.profile_name} ${news.authors[0].verified?'<img src="image/fi_10629607.svg" alt="" />':''}</h6>
                      <small> ${news.others?.views} Views</small>
                    </div></div>
                
              </div>

            </div>
          </div>
        </div>
          
          `;
  
      cardContainer.appendChild(div);
      WithoutData.classList.add('hidden');
    });}
    
}
 const setTime=(seconds)=>{
  console.log(seconds);
  
let h = Math.floor(seconds / 3600);
let m = Math.floor(seconds % 3600 / 60);
let s = Math.floor(seconds % 3600 % 60);

let hours = h.toString();
let min=m.toString();
let second=s.toString();
return hours+'hrs'+min+'min'+second+'sec' ;


 }

 
  
handleCategory();
handleLoadNews(1000);