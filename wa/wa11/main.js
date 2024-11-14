const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const fileNames = [["reframingportraitprojectforphone Page 1 copy.jpg", "alt1"], ["reframingportraitprojectforphone Page 2 copy.jpg", "alt2"], ["reframingportraitprojectforphone Page 3 copy.jpg", "alt3"], ["reframingportraitprojectforphone Page 4 copy.jpg", "alt4"], ["reframingportraitprojectforphone Page 5 copy.jpg", "alt5"]];

/* Declaring the alternative text for each image file */

/* Looping through images */
for (i=0; i<fileNames.length; i++){
const newImage = document.createElement('img');
newImage.setAttribute('src', "images/"+fileNames[i][0]);
newImage.setAttribute('alt', fileNames[i][1]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
} );
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", e=> {


if (e.target.getAttribute("class") === "dark") {
    e.target.setAttribute("class", "light");
    e.target.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
}
else {
    e.target.setAttribute("class", "dark");
    e.target.textContext = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
}
}
);



