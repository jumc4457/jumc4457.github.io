let myData = {};
let comicNum = Math.floor(Math.random() * 3000)+1;
function getData(comicNum) {
fetch("https://corsproxy.io/?https://xkcd.com/${comicNum}/info.0.json")
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        else {
            console.log(res);
        }
    })
    .then(res => {
        myData = res;
        console.log(myData);
        document.getElementById("comicTitle").innerHTML = myData.title;
    })
    .catch(error => console.log(error))
}

document.getElementById("generate").addEventListener("click", e => {getData();});

