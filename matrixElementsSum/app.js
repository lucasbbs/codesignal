function matrixElementsSum(matrix) {

let price = 0;
    let bannedIndex = [];
    for(i = 0; i < matrix.length; i++) {
        for( j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] ===0){
                 bannedIndex.push(j);               
            } else if (bannedIndex.indexOf(j) === -1) {
                     price += matrix[i][j];
            }
        }
    }
    return price;
}
