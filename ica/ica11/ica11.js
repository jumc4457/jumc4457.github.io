function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
    return "You will be "+jobTitle+" in "+geoLocation+", and married to "+partnerName+" with "+numChildren+" kids";
}

function calculateDogAge(age) {
    let dogAge = age*7;
    return "Your doggie is "+dogAge+" years old in dog years!";
}

function reverseNum(num) {
    len = String(num).length;
    newString;
    for (i=len-1, i<=0, i--) {
        newString+=String(num).charAt(i);
    }
    return Number(newString);
}

function alphabetical(string) {
    
}

