let URl="http://localhost:3000/tickets"

document.getElementById("edit").addEventListener("click", function(){
        editData();
})

async function editData(){
    let id=localStorage.getItem("EditdId");

    let value=document.getElementById("input1").value;
    let description=document.getElementById("desc").value;
    let status=document.getElementById("status").value;
    let dueDate=document.getElementById("date").value; 

    let obj={
        title:value,
        description:description,
        status:status,
        dueDate:dueDate
    }

    let resonse=await fetch(`${URl}/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/JSON"
        },
        body:JSON.stringify(obj)
    })
    window.location.href="index.html"
}