function insertionSort(arr){
    for(i =1 ; i <arr.length;i++){
        j= i-1;
        let insertElemnt = arr[i];
        while(j>=0 && arr[j]>insertElemnt){
            arr[j+1] = arr[j];
            j--; 
        }
        arr[j+1] = insertElemnt
    }
}

let array = [5, 8, 9, 32, 53, 24, 6, -1, 5, 8, 9, 32];
insertionSort(array);
console.log(array);
