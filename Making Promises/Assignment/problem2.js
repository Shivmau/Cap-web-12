let arr=[2,3,4,5,6];

function filterArr(arr,cb){
   let filterarr=arr.filter((ele)=>{
    return ele%2==0?true:false;
   })

    cb(filterarr)
}
console.log("Original Array", arr)
filterArr(arr,function(result){console.log("filter Array",result)})