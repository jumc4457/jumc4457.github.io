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
        for (i=0; i<data.projects.length; i++) {
        document.getElementById("projects").innerHTML += (data.projects[i].name+"<br>");
        document.getElementById("mainimg").setAttribute("src", data.projects.mainimg);
        }
    }