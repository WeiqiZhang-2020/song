const form = document.querySelector(".search")
const textInput = document.querySelector(".search__input")
const header = document.querySelector(".searchResult__info")
const card = document.querySelector(".card_container")
let dataArr = [];
let result;
form.addEventListener('submit',(e)=>{
  fetchData();
})

function fetchData(){
  card.innerHTML = "";
  dataArr = [];
  let url =  `https://itunes.apple.com/search?term=${textInput.value
}&media=music&entity=album&attribute=artistTerm&limit=200`;
  const res = fetch(url).then(response=>
    response.json())
  .then(res =>
    addCard(res.results)
    )
}

function addCard(object){
  header.innerHTML = `${Object.keys(object).length}  results for "${textInput.value}"`
  object.forEach((card) =>{
    result += `
      <div class="card">
        <p>${card.collectionName}</p>
        <img src="${card.artworkUrl60}">
      </div>
    `
  })
  console.log(result);
  card.innerHTML = result;
}

function appendHelper(where,items){
  where.append(items);
}