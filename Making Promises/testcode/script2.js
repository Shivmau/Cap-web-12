let arr=[1,2,3,4,5];

// function findOdd(){
//     setTimeout(()=>{
//         var filterArr=arr.filter((ele)=>ele%2==1)
//       cb(filterArr)
//     },2000)
// }

function findOdd(arr,cb){
  return new Promise((res,rej)=>{
      setTimeout(()=>{
       var filterArr=arr.filter((ele)=>ele%2==1);
       res(filterArr)
      },2000)
    })
}

findOdd(arr)
.then((result)=>{console.log(result)})
.catch((result)=>{console.log(result)})