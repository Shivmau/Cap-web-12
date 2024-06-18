let isMarried=true;

let p1= new Promise((res,rej)=>{
    if(isMarried){
        res("Married")
    } else{
        rej("Not Married")
    }
})

//consume

p1
.then((val)=>{console.log(val)})
.catch((val)=>{console.log(val)})