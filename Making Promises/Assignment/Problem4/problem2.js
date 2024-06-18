function HUKUMUScoreCheck(arryofMarks, cutoff){
       return new Promise((res,rej)=>{

        let sum=arryofMarks.reduce((acc,rec)=>acc+rec,0)
        let average=sum/arryofMarks.length;

        setTimeout(()=>{
            if(average>=cutoff){
                res(average)
            }else{
                rej("Sorry you haven’t cleared the HUKUMU round.")
            }
        },2000)
       })
}
let arryofMarks=[3,4,5]
cutoffs=8
HUKUMUScoreCheck(arryofMarks,cutoffs)
.then((res)=>{
    console.log("Average Score",res)
})
.catch((res)=>{
    console.log(res)
})