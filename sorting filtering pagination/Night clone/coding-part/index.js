let URL="http://localhost:3000/products"


let container= document.getElementById("container")


const displayData=(arr)=>{
    container.innerHTML="";
    arr.forEach((ele)=>{
        let box=document.createElement("div");

        let img=document.createElement("img");
        img.src=ele.image;

        let title=document.createElement("h2");
        title.textContent=ele.title;

        let price=document.createElement("h2");
        price.textContent=ele.price;

        let catg=document.createElement("h2");
        catg.textContent=ele.category;

        let edit=document.createElement("button");
        edit.textContent="Edit"
        edit.addEventListener("click",function(){
            localStorage.setItem("EditId",ele.id);
            window.location.href="edit.html"
        })


        let dltbtn=document.createElement("button")
        dltbtn.textContent="delete"
        dltbtn.addEventListener("click",async function(){
            
            let res=await fetch(`${URL}/${ele.id}`,{
                method:"DELETE"
            })
            getData(`http://localhost:3000/products?_page=1&_limit=4`,querparams)
        });
        
        box.append(img,title,price,catg,edit,dltbtn)
        container.append(box)

    })
}


async function getData(URL, querparams=""){
    try {
        let response= await fetch(`${URL}${querparams}`)
        pagination(response.headers.get("X-Total-count"),4,querparams)
        let data =await response.json()
        console.log(data)

        displayData(data)
    } catch (error) {
        console.log(error)
    }
}
    
getData(`http://localhost:3000/products?_page=1&_limit=4`)

let sort=document.getElementById("sort");
sort.addEventListener("input", function(){
    sortDataByPrice();
});

function sortDataByPrice(){
    let sortVal=sort.value;
    console.log(sortVal)

    getData(`http://localhost:3000/products?_page=1&_limit=4`,`&_sort=price&_order=${sortVal}`);
}

let filter=document.getElementById("filter");
filter.addEventListener("input", function(){
    filtlerData();
});

function filtlerData(){
    let filVal=filter.value;
    console.log(filVal)

    getData(`http://localhost:3000/products?_page=1&_limit=4`,`&category=${filVal}`);
}


let paginationDiv=document.getElementById("page")

function pagination(total,limit,querparams){
    paginationDiv.innerHTML=""
    noofButtons=Math.ceil(total/limit)
    for(let i=1; i<=noofButtons; i++){
        let btn=document.createElement("button")
        btn.textContent=i

      btn.addEventListener("click" , function(){
        getData(`http://localhost:3000/products?_page=${i}&_limit=4`,querparams)
      })

        paginationDiv.append(btn)
    }
    
    
}







