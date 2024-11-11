function bubbleSort (arr){
    let swap ;
    let j = 1
    do{
        swap = false;
 for(let i = 0;i < arr.length-j ;i++){
    if(arr[i] >arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1] 
        arr[i+1] = temp;
        swap = true;
    }

 }
j++
}while(swap);
 console.log(arr);
 
}
let array = [5,  8, 9, 32,53, 24, 6, -1,5,  8, 9, 32];
bubbleSort(array);
