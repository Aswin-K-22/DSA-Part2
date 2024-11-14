function quickSort (arr,left = 0 ,right = arr.length - 1 ){
    if(left>=right){
        return;
    }
    if(left < right){
        let pivotIndex = partion(arr,left,right);
        quickSort(arr,left,pivotIndex-1)
        quickSort(arr,pivotIndex + 1,right )
    }
}
function partion(arr,start,end){
    if(start>=end){
        return;
    }
    let pivot = arr[end];
    let index = end;
    end--;
    while(start<=end){
        if(arr[start]>pivot && arr[end] < pivot){
            swap(arr,start,end);
            start++;
            end--;
        }
        if(arr[start]<=pivot){
            start++;
        }
        if(arr[end]>pivot){
            end--;
        }
        
    }
    swap(arr,start,index);
    return start;
}
function swap(array,left,right){
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}
let array = [3,34,7,1,-2,3,8,4]
quickSort(array);
console.log(array);
