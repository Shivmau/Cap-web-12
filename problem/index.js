let URL = "http://localhost:3000/tickets"

    // let container=document.getElementById("container");
    let tbody = document.getElementById("body")

    async function getData() {
        try {
            let response = await fetch(`${URL}`)
            let data = await response.json();

            console.log(data)
            displayData(data)

        } catch (error) {
            console.log(error)
        }
    }

    getData()



    function displayData(arr) {
        tbody.innerHTML="";
        arr.forEach((ele) => {


            let row = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.textContent = ele.title;

            let td2 = document.createElement("td");
            td2.textContent = ele.description;

            let td3 = document.createElement("td");
            td3.textContent = ele.status;

            let td4 = document.createElement("td");
            td4.textContent = ele.dueDate;

            let priority=document.createElement("select")
            let option1=document.createElement("option")
            option1.textContent="priorty";

            let option2=document.createElement("option")
            option2.textContent="High"
            option2.addEventListener("click",function(){
                row.style.backgroundColor="red"
            })

            let option3=document.createElement("option")
            option3.textContent="Low"

            let td5=document.createElement("td")
            let Actions=document.createElement("button")
            Actions.textContent="Delete"
            td5.append(Actions)

            let td6=document.createElement("td")
            let edit=document.createElement("button")
            edit.textContent="Edit"
            edit.addEventListener("click",function(){
                localStorage.setItem("EditdId",ele.id);
                window.location.href="edit.html";
            })
            

            Actions.addEventListener("click",async function(){
                
                    
                    let response=await fetch(`${URL}/${ele.id}`,{
                        method:"DELETE"
                    
                
            })
            getData()
            
        })
            
            
            
            td6.append(edit)

            priority.append(option1,option2,option3)

            row.append(td1, td2, td3, td4,priority,td5,td6)
            tbody.append(row)
        })
    }