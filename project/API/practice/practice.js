const URL = "https://cat-fact.herokuapp.com/facts/fggd";
// AJAJ (asynchronous JS and JSON)
const factPara = document.querySelector("#fact");
const buttuon = document.querySelector("#btn");

const getFacts = async () =>{
    console.log("getting data ....");
    let response = await fetch(URL);
    console.log(response);  // JSON format  (javascript objectr notation)
    let data = await response.json();
    console.log(data[0].text);
    factPara.innerText = data[4].text;
};

// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data[0].text);
//       factPara.innerText = data[0].text;
//     });
// }

buttuon.addEventListener("click", getFacts);
