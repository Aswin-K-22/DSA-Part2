function selectionSort(arr){
    for(let i = 0;i<arr.length-1 ;i++ ){
        for(let j = i + 1; j <arr.length ; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
}
let array = [3,6,2,5,7,4]
selectionSort(array);
console.log(array);
