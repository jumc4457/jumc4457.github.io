let proj;
fetch("/jsProject/jsProject.json")
    .then(response =>{
        return response.json();
    }).then(projects =>{
        console.log(projects);
        parseData(projects);
        proj = projects;
    }).catch(err =>{
        console.log(`error ${err}`);
    })

    function parseData(data) {
        /*document.getElementById("imageCheck").setAttribute("src", data.projects[0].mainimg);*/
        for (let i=0; i<data.projects.length; i++) {
        document.getElementById("projects").innerHTML += 
        `<a href="/jsProject/${data.projects[i].subdomain}.html">
        <div class="row project" id="${data.projects[i].subdomain}">
            <div class="projectImg"><img src="${data.projects[i].mainimg}"></img></div>
            <div class="description"><h2>${data.projects[i].name}</h2>
                <p class="subtitle">${data.projects[i].subtitle}</p>
                <p>${data.projects[i].abstract}</p>
            </div>
        </div></a>`
        }
    }
    
    for (button of document.querySelectorAll("#buttons button")){
        button.addEventListener("click", e=>{
            console.log(e.target.value);
            filterProjects(e.target.value);
        })
    }

    function filterProjects(button){
        if(button == "clear"){
            for(i=0; i<proj.projects.length; i++){
                document.getElementById(proj.projects[i].subdomain).style.display = "flex";
            }
        }else if(button != undefined){
            for(i=0; i<proj.projects.length; i++){
               if(proj.projects[i].category.includes(button)==true){
                document.getElementById(proj.projects[i].subdomain).style.display = "flex"; 
               }else{
                document.getElementById(proj.projects[i].subdomain).style.display = "none";
               }
            }
        }else{
            console.log("error, button value is undefined");
        }

    }