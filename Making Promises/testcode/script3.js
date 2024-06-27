let isEven=true;

let p1=new Promise((res, rej)=>{
    if(isEven){
        res("even happened")
    }else{
        rej("this is not even number")
    }
    
})

console.log(p1)
p1
.then((val)=>{console.log(val)})
.catch((val)=>{console.log(val)})