let url="http://localhost:3000/tasks"


document.querySelector("form").addEventListener("submit", function(){

    createData();
    


})

async function createData(){

    event.preventDefault();

    let title=document.getElementById("input1").value;
    let desc=document.getElementById("input2").value;
    let status=document.getElementById("input3").value;
    let date=document.getElementById("input4").value;


    let obj={
        title:title,
        description:desc,
        status:status,
        dueDate:date
    }

    // console.log(obj)

    let res=await fetch(`${url}`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })

    let data=res.json()
window.location.href="index.html"

}
