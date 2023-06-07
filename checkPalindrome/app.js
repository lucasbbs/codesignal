function checkPalindrome(inputString) {
    this.inpuString = inputString;
    
    let arrayChars = inputString.split("");
    
    for (var i=0; i <arrayChars.length; i++){
        
        if (arrayChars[i] != arrayChars[arrayChars.length-1-i]){return false;} 
    }
    return true;
}
