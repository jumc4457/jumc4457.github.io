let output="";

tellFortune(1, "Thor", "Sweden", "Geoguesser");
tellFortune(2, "Batman", "Gotham", "DJ");
tellFortune(15, "Yourself", "The bottom of the ocean", "Blob");

calculateDogAge(4);
calculateDogAge(100);
calculateDogAge(0);

reverseNum(123456);
reverseNum(789);

/*alphabetical("ghtusj");*/




function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
    output+="You will be a "+jobTitle+" in "+geoLocation+", and married to "+partnerName+" with "+numChildren+" kid(s)<br>";
}

function calculateDogAge(age) {
    let dogAge = age*7;
    output+= "Your doggie is "+dogAge+" years old in dog years!<br>";
}

function reverseNum(num) {
    let len = String(num).length;
    let newString= "";
    for (i=len-1; i>=0; i--) {
        newString+=String(num).charAt(i);
    }
    output+= newString+"<br>";
}

function alphabetical(string) {
    let len = string.length;
    for (i=0; i<len; i++) {
        let current = string[i]
        for (j=i+1; j<len; j++) {
            if (current>string[j]) {
                let temp = string[j];
                string[j]=string[i];
                string[i]=temp;
            }
            else {
                continue;
            }
        }
    }
    output+=string+"<br>";

}

document.getElementById("output").innerHTML = output;

