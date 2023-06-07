function commonCharacterCount(s1, s2) {  
    getCharsCounted = function(inputArray){
        outputArray = Array();
        outputArray.push([],[]);
        splitedArray = inputArray.split("");
            for(i=0;splitedArray.length-1>=i;i++){
                if (outputArray[0].indexOf(splitedArray[i]) === -1)
                {
                    outputArray[0].push(splitedArray[i]);              
                    outputArray[1].push(splitedArray.filter(v =>v == splitedArray[i]).map(v=>1).reduce((acc,v)=>acc+v));
                };
            }
        return outputArray;
    }
     getSum = function(array1, array2)
     {
         sum = 0;
         for(i=0;array1[0].length-1>=i;i++){
            for(j=0;array2[0].length-1>=j;j++){         
                 if (array1[0][i]==array2[0][j]){sum += Math.min(array1[1][i],array2[1][j]);}
             }
        }
    return sum;
    }
    return getSum(getCharsCounted(s1),getCharsCounted(s2));
}
