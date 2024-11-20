let myData = {};
function getData() {
    let comicNum = Math.floor(Math.random() * 3000)+1;
fetch("https://corsproxy.io/?https://xkcd.com/"+String(comicNum)+"/info.0.json")
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
        document.getElementById("comicPic").setAttribute("src", myData.img);
    })
    .catch(error => console.log(error))
}
getData();
document.getElementById("generate").addEventListener("click", e => {getData();});

