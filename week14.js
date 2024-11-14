function bubblesort(arr){
    let j = 0;
    let swap ;
    do{
        swap = false;
        for(let i = 1 ; i< arr.length - j ; i++){
            
            if(arr[i] < arr [i-1]){
                [arr[i] , arr[i-1]] = [arr[i-1] ,arr[i]];
                swap =true;
            }
        }
        j++;
    }while(swap);
    console.log("bubble sort = " ,arr);
    
}
let array1 = [3,5,-6,2,4,3,];
bubblesort(array1);


function selectionSort(arr){
    for(let i = 0 ; i < arr.length - 1 ; i ++){
        for(let j = i +1 ; j < arr.length ; j++ ){
            if ( arr[i]>arr[j]){
                [arr[i], arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    console.log("selection sort = " ,arr);
}

let array2 = [3,5,-6,2,4,3,];
selectionSort(array2);

function InsertionSort(arr){
    for(let i = 1 ; i < arr.length ; i ++){
        let Element = arr[i];
        let j = i - 1;
        while( Element < arr [j] && j >= 0){
         arr[j+1] = arr[j];
         j--;
        }
        arr[j+1] = Element;
    }
    console.log("insertion sort = ", arr);
    
}
let array3 = [3,5,-6,2,4,3,];
InsertionSort(array3);

function quickSort(arr ,start = 0 ,end = arr.length -1){
    if(start >= end){
        return 
    }

    let pivotIndex = partion(arr,start ,end);
    quickSort(arr, start , pivotIndex-1);
    quickSort (arr,pivotIndex+1 ,end);
   
    

}
function partion(arr,start,end){
    let pivot = arr[end];
    let pivotIndex = end;
    end--;
    while(start <= end){
        if(pivot < arr[start] && pivot > arr[end]  ){
            [ arr[start],arr[end] ] = [ arr[end] ,arr[start]]
            start++;
            end--;
        }
        if(pivot >= arr[start]){
            start++;
        }
        if(pivot < arr[end] ){
            end--;
        }
    }
    [arr[start],arr[pivotIndex]]=[arr[pivotIndex] ,arr[start]]
    return start;
}
let array4 = [3,5,-6,2,4,3,];
quickSort(array4)
console.log("quick  sort = ", array4);

function mergeSort(arr){
    if(arr.length <2){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let leftArray = arr.slice(0,middle);
    let rightArray = arr.slice(middle);
    return merge(mergeSort(leftArray) ,mergeSort(rightArray));
}

function merge (leftArray,rightArray){
let sortedArray = [];
while(leftArray.length && rightArray.length){
    
    if(leftArray[0]<rightArray[0]){
        sortedArray.push(leftArray.shift())
    }else{
        sortedArray.push(rightArray.shift())
    }

}
return [...sortedArray , ...rightArray ,...leftArray]
}
let array5 = [3,5,-6,2,4,3,];
console.log("merged sortarray =" ,
 mergeSort(array5));
