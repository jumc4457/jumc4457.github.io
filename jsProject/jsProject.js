fetch("/jsProject/jsProject.json")
    .then(response =>{
        return response.json();
    }).then(projects =>{
        console.log(projects);
        parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

    function parseData(data) {
        document.getElementById("projects").innerHTML = data.projects[0].name;
    }