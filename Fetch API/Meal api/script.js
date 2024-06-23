let fstData = document.getElementById("get-category-data");
let sndData = document.getElementById("get-ingredient-data");

async function getdata1st() {
  try {
    let res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong");
  }
}

async function getdata2nd() {
  try {
    let res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
    );

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong");
  }
}

fstData.addEventListener("click", () => {
  getdata1st();
});

sndData.addEventListener("click", () => {
  getdata2nd();
});
