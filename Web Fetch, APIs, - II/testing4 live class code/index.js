let URL="http://localhost:3000/products";

let main=document.getElementById("container");

async function getData(){
    try {
        
       let response=await fetch(`${URL}`)
       let result=await response.json();
       console.log(result)

       displayData(result)

    } catch (error) {
        console.log(error)
    }
}

getData()

function displayData(arr){
    main.innerHTML="";
    arr.forEach((ele)=>{
        let card=document.createElement("div");
    
        let img=document.createElement("img");
        img.src=ele.image;

        let title=document.createElement("h3");
        title.textContent=ele.title;

        let desc=document.createElement("p");
        desc.textContent=ele.description;

        let category=document.createElement("p");
        category.textContent=ele.category;

        let price=document.createElement("p")
        price.textContent=ele.price;

        let rate=document.createElement("p");
        rate.textContent=ele.rating.rate;

        let edtBtn=document.createElement("button")
        edtBtn.textContent="Edit";

        edtBtn.addEventListener("click", function(){
            localStorage.setItem("EditID",ele.id);
            window.location.href="edit.html";
        })

        let dltBtn=document.createElement("button");
        dltBtn.textContent="Delete"


        dltBtn.addEventListener("click", async function (){
           

            let response= await fetch(`${URL}/${ele.id}`,{
                method:"DELETE"
            })

            getData();
        })

        card.append(img,title,desc,category,price,rate, edtBtn, dltBtn)
        main.append(card)


    })
}