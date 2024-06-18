
// Problem 1----------------

function codingScoreCheck(marks , cutoff){
    return new Promise((res,rej)=>{
       let sum=marks.reduce((acc,rec)=>acc+rec,0)
       let avg=sum/marks.length;

       setTimeout(()=>{
           if(avg>=cutoff){
               res(avg)
           }else{
               rej("Sorry you haven’t cleared the coding round.")
           }
       },2000)
    })
}

let marks=[43,45,56,45,67]
let cutoffs=80;
codingScoreCheck(marks,cutoffs)
.then((res)=>{console.log("Average Score",res)})
.catch((res)=>{console.log(res)})

