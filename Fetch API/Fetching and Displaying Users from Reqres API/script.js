
function userdata(){
    fetch("https://reqres.in/api/users")
    .then(function (res) {
        return (res.json())
    })
    .then(function (data) {
        displaydata(data.data)
    })
}

let container=document.getElementById("container");
let fethced=document.getElementById("fetch");


    function displaydata(arr) {
        arr.forEach((ele)=>{
           
           let div=document.createElement("div");
       
           let img=document.createElement("img");
           img.src=ele.avatar;
       
           let name=document.createElement("h3")
           name.textContent=`Name:-${ele.first_name} ${ele.last_name}`;
       
           let email=document.createElement("h4")
           email.textContent=`Email:-${ele.email}`
       
           div.append(img,name,email)
           container.append(div)
        })
       }
fethced.addEventListener("click", userdata)






