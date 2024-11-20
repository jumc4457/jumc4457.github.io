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
        let date = myData.month+'/'+myData.day+'/'+myData.year;
        console.log(date);
        document.getElementById("comicTitle").innerHTML = myData.title;
        document.getElementById("datePublished").innerHTML = date;
        document.getElementById("comicPic").setAttribute("src", myData.img);
        document.getElementById("comicPic").setAttribute("alt", myData.alt);
    })
    .catch(error => console.log(error))
}
getData();
document.getElementById("generate").addEventListener("click", e => {getData();});

