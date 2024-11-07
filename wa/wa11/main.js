const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const fileNames = [["pic1.jpg", "alt1"], ["pic2.jpg", "alt2"], ["pic3.jpg", "alt3"], ["pic4.jpg", "alt4"], ["pic5.jpg", "alt5"]];

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
