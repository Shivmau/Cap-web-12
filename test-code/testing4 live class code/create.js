let URL=`http://localhost:3000/products`

document.querySelector("form").addEventListener("submit", function(){

    getData();
})

async function getData(){
   
    event.preventDefault();

  let title=document.getElementById("input1").value;
  let description=document.getElementById("input2").value
  let price=document.getElementById("input3").value
  let category=document.getElementById("input4").value
  let image=document.getElementById("input5").value
  let rate=document.getElementById("input6").value


  let obj={
    title,
    description,
    price,
    category,
    image,
    rating:{rate}
  }

//   console.log(obj)

 

    let response= await fetch(`${URL}`,{
        
        method:"POST",
        headers:{
           "content-type":"application/json"
        
        },
        body:JSON.stringify(obj)
    })

     window.location.href="index.html"


}