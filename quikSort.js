function quikSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i = 0 ; i < arr.length -1 ; i++){
        if(arr[i]>pivot){
            right.push(arr[i]);
        }else{
            left.push(arr[i]);
        }
    }
    return [...quikSort(left), pivot ,...quikSort(right)]
}

let array = [3,6,2,5,7,4]
console.log(quikSort(array));

