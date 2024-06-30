

document.querySelector("form").addEventListener("submit",function(){
    FormData()
} )

async function FormData(){
    event.preventDefault();

    let title=document.getElementById("title").value
    let image=document.getElementById("image").value
    let desc=document.getElementById("desc").value
    let category=document.getElementById("category").value
    let price=document.getElementById("price").value
    let rating=document.getElementById("ratings").value

     let obj={

        title:title,
        image:image,
        description:desc,
        category:category,
        price:price,
        rating:rating
     }

     console.log(obj)


     let res=await fetch(`http://localhost:3000/products`,{
        method:"POST",
        headers:{
            "Content-type" : "application/json"
        },
        body:JSON.stringify(obj)
     })

    let data=await res.json()
window.location.href="index.html"
}