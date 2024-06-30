let url="http://localhost:3000/tasks"

let container=document.getElementById("container")
async function getData(url,queryparm=""){
    try {
        let response=await fetch(`${url}`);
        let data=await response.json();
        console.log(data)

        displayData(data)
    } catch (error) {
        console.log(error)
    }
}

getData("http://localhost:3000/tasks")

function displayData(arr){
    container.innerHTML="";
    arr.forEach((ele)=>{
        
        let div=document.createElement("div")

        let title=document.createElement("h2");
        title.textContent=ele.title;

        let desc=document.createElement("p");
        desc.textContent=ele.description;

        let status=document.createElement("h2");
        status.textContent=ele.status;

        let dueDat=document.createElement("h3");
        dueDat.textContent=ele.dueDate


        let priority=document.createElement("select");
        let option1=document.createElement("option")
        option1.textContent="High"

        let option2=document.createElement("option")
        option2.textContent="Medium"

        let option3=document.createElement("option")
        option3.textContent="Low"


        let edit=document.createElement("button");
        edit.textContent="Edit"
        edit.addEventListener("click", function(){
            localStorage.setItem("EditId",ele.id)
            window.location.href="edit.html"
        })

        let dltbtn=document.createElement("button")
        dltbtn.textContent="Delete"
        dltbtn.addEventListener("click", async function(){
            let res=await fetch(`${url}/${ele.id}`,{
                method:"DELETE"
            })

            getData("url")
        })

        priority.append(option1,option2,option3)

        div.append(title,desc,status,dueDat,priority,edit,dltbtn)
        container.append(div)
    
    })

    let filter=document.getElementById("filter")
    filter.addEventListener("click", function(){
        fitlerdata()
    })

    function fitlerdata(){
        let filterVal=filter.value;
        // console.log(filterVal)
        getData(`http://localhost:3000/tasks?status=${filterVal}`)
    }
}

let pagination =document.getElementById("page")

