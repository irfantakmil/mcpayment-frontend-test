const twoSums = (arr, target) => {
    for(i=0; i < arr.length; i++){
        for(j=i+1; j < arr.length; j++){
            if(arr[i] + arr[j] == target){
                return [i,j];
            }
        }
    }
}

console.log(twoSums([2,7,11,15],13));
console.log(twoSums([3,2,4],6));
console.log(twoSums([3,3],6));

