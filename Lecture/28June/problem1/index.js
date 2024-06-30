document.getElementById("login").addEventListener("click", function(){

    postData();
})

async function postData(){

    let username=document.getElementById("username").value;

    let password=document.getElementById("password").value;

   
    // console.log(username.value, password.value)

 let obj={
    username,
    password
 }

 try {
    
    let response=await fetch("https://json-with-auth.onrender.com/user/login",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })

    let data= await response.json();
    console.log(data)
    
    


 } catch (error) {
    console.log(error)
    
 }

}