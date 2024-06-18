function getUserData(id,cb){
  setTimeout(()=>{
    const user={
        id:id,
        name:"Shivam maurya",
        email:"shivamgonda551@gmail.com"
    }
    cb(user)
  },2000)
}

function displayUser(user){
    console.log(user.id);
    console.log(user.name);
    console.log(user.email)
}

let id=123;
getUserData(id,displayUser)