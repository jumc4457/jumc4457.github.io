document.getElementById("button").addEventListener('click', e => {getJoke;})

fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=singleLinks")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

