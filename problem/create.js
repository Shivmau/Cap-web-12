let URl="http://localhost:3000/tickets";

document.querySelector("form").addEventListener("submit",function(){
    getData();
} )

async function getData(){
    event.preventDefault();

    let title=document.getElementById("title").value;
    let description=document.getElementById("desc").value;
    let status=document.getElementById("status").value;
    let dueDate=document.getElementById("date").value;   

  let obj={
    title,
    description,
    status,
    dueDate
  }
// console.log(obj)


let resonse=await fetch(`${URl}`,{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(obj)
})
 window.location.href="index.html"

}

