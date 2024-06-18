function unitMovementCheck(averageCodingScore,averageHukumuScore,cutoffScore){
     return new Promise((res,rej)=>{

        let average=averageCodingScore+averageHukumuScore/2
        
          setTimeout(()=>{
            if( average>= cutoffScore){
                res(average)
            }else{
                rej("Sorry you haven’t cleared the final cutoff.")
            }
          },2000)
     })
}



let avgCodScore=80;
let avgHukScore=85;
let cutoff=185;

unitMovementCheck(avgCodScore,avgHukScore,cutoff)
.then((res)=>{console.log("your average score",res)})
.catch((res)=>{console.log(res)})