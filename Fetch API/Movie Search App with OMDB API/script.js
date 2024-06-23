let URL="https://www.omdbapi.com/?apikey=bd9c2b77"

    let container=document.getElementById("container")
  

    let button=document.getElementById("search")
    button.addEventListener("click", function(){
        data()
    })

    async function data(){
        let input=document.getElementById("input1").value;
        try {
            
            let response=await fetch(`${URL}&s=${input}"`)
            let data=await response.json()
            console.log(data.Search)
            
            let res=data.Search
            dispalaydata(res)

        } catch (error) {
            container.textContent=`something went wrong...(movie name is not available)`;
        }
    }


    function dispalaydata(arr){
        container.innerHTML="";
          arr.forEach((ele)=>{

            let div=document.createElement("div")

            let poster=document.createElement("img")
            poster.src=ele.Poster;
            poster.alt="image not found"

            let title=document.createElement("h2");
            title.textContent=`Title : ${ele.Title}`;

            let release=document.createElement("h3");
            release.textContent=`Year : ${ele.Year}`;

            let type=document.createElement("p")
            type.textContent=`Type : ${ele.Type}`;

            div.append(poster,title,release,type)
            container.append(div)
          })
    }