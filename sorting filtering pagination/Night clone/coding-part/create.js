let url=`http://localhost:3000/products`

document.querySelector("form").addEventListener("submit", function(){
    creatData();
})

async function creatData(){
     event.preventDefault();

         let title=document.getElementById("input1").value
         let image=document.getElementById("input2").value
         let price=document.getElementById("input3").value
         let category=document.getElementById("input4").value


         let obj={
            title:title,
            image:image,
            price:price,
            category:category
         }

         console.log(obj)


        let response=await fetch(`${url}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)

        })

        let data=await response.json()

        window.location.href="index.html"
}