let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

fetch("/jsProject/jsProject.json")
    .then(response =>{
        return response.json();
    }).then(projects =>{
        // parseData(projects);
        proj = projects;
        findProjectInJSON(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

let selectedProject = {};

function findProjectInJSON(projects) {
    for(let i=0; i<projects.projects.length; i++) {
        if(projects.projects[i].subdomain == subdomain) {
            selectedProject=projects.projects[i];
            buildPage(projects.projects[i]);
            console.log(selectedProject);
            break;
        }
        else{
            continue;
        }
    }
}

function buildPage(project) {
    console.log(project);
    document.getElementById("slideshow").innerHTML += `<h1>${project.name}</h1>
    <div class="full-img">
      <img class="displayed-img" src="${project.mainimg}">
      <div class="overlay"></div>
    </div>

    <div class="thumb-bar">


    </div>`;


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const fileNames = [];
for(let i=0; i<selectedProject.images.length; i++){
    fileNames.push(selectedProject.images[i]);
}

console.log(fileNames);

/* Declaring the alternative text for each image file */

/* Looping through images */
for (i=0; i<fileNames.length; i++){
const newImage = document.createElement('img');
newImage.setAttribute('src', fileNames[i]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
} );
}

document.getElementById("project").innerHTML += `<p id="abstract">${project.abstract}</p>`;
}
