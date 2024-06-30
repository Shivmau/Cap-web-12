let URL="http://localhost:3000/products?_page=1&_limit=6"

const displaydata = (data) =>{
    let container=document.getElementById("container");
    container.innerHTML="";

    data.forEach((ele)=>{
        let box=document.createElement("div");

        let image=document.createElement("img");
        image.src=ele.image;

        let title=document.createElement("h2");
        title.textContent=ele.title;

        let description=document.createElement("h2");
        description.textContent=ele.description;

        let category=document.createElement("h2");
        category.textContent=ele.category;

        let price=document.createElement("h2");
        price.textContent=ele.price;

        let rating=document.createElement("h2");
        rating.textContent=ele.rating.rate;

        box.append(image,title,description,category,price, rating);
        container.append(box);
        
    })
};



const getData= async (URL, queryparams="") =>{
    try {
        let res=await fetch(`${URL}${queryparams}`);
        pagination(res.headers.get("X-Total-count"),4,queryparams)
        let data=await res.json();
        console.log(data);
        displaydata(data)
    } catch (error) {
        console.log(error)
    }
}

getData(`http://localhost:3000/products?_page=1&_limit=4`);

let sort=document.getElementById("sort");
sort.addEventListener("input", function(){
    sortDataByPrice();
}); 

function sortDataByPrice(){
    let sortVal=sort.value;
    console.log(sortVal)

    getData(`http://localhost:3000/products?_page=1&_limit=4`, `&_sort=price&_order=${sortVal}`);
}

let filter=document.getElementById("filter");
filter.addEventListener("input", function(){
    filterData();
});

function filterData(){
    let filterVal=filter.value;
    console.log(filterVal)
    getData(`http://localhost:3000/products?_page=1&_limit=4`, `&category_like=${filterVal}`);
}

let paginationDiv=document.getElementById("pagination-wrapper");

function pagination(total,limit,queryparams){
    paginationDiv.innerHTML=""
    let noOfButtons=Math.ceil(total/limit) 
    console.log(noOfButtons)
    for(let i=1; i<=noOfButtons; i++){
        let btn = document.createElement("button");
        btn.textContent=i
        btn.addEventListener("click", function(){
            getData(`http://localhost:3000/products?_page=${i}&_limit=4`,queryparams)
        })

        paginationDiv.append(btn)
    }
   

}

