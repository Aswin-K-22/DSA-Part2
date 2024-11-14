function mergSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let leftArray = arr.slice(0,middle);
    let rightArary = arr.slice(middle);
    console.log("left Array =",leftArray ,"middle = ",middle,"right Array ",rightArary);
    
    return merge(mergSort(leftArray),mergSort(rightArary));
}

function merge(leftArr , rightArr){
    let SortedArray = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            SortedArray.push(leftArr.shift())
        }else{
            SortedArray.push(rightArr.shift());
        }
    }
    return [...SortedArray, ...leftArr, ...rightArr]
}

let array = [9,4,3,3,1,2,3,123,23]
console.log(mergSort(array));
