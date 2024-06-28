let URL= "http://localhost:3000/products"


let container=document.getElementById("container")

let getData= async ()=>{

    try {

        let response= await fetch(`${URL}?_page=2&_limit=4`);
        let data=await response.json();

        console.log(data)

        displayData(data)
        
    } catch (error) {
        console.log(error)
    }
}

getData()

function displayData(arr){
    container.innerHTML="";
    arr.forEach((ele)=>{
        
        let card=document.createElement("div");
        card.style.height="600px"
        card.style.width="350px"
        card.style.border="2px solid black"
        card.style.borderRadius="5px"

        let img =document.createElement("img");
        img.src=ele.image;
        img.style.height="250px";
        img.style.width="100%";

        let title=document.createElement("h3");
        title.textContent=ele.title;

        let desc=document.createElement("p");
        desc.textContent=ele.description;

        let catg=document.createElement("p");
        catg.textContent=ele.category;

        let price=document.createElement("p");
        price.textContent=ele.price;

        










    card.append(img,title,desc,catg,price)
        container.append(card)
    })
}

let sort=document.getElementById("sort")

sort.addEventListener("input", function(){
    let sortValue=sort.value;

    sortdata(sortValue)
})


let sortdata= async (val)=>{
    try {
        let response=await fetch(`${URL}?_sort=price&_order=${val}`)
        let data=await response.json();
        displayData(data)

    } catch (error) {
        console.log(error)
    }
}
let category=document.getElementById("filter")
category.addEventListener("input",function(){
    let value=category.value;
    filterData(value)
})
let filterData=async (val)=>{
    try {
        let res=await fetch(`${URL}?category=${val}`)
        let data=await res.json();
        displayData(data)

    } catch (error) {
        
    }
}