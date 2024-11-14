function middleQuickSort(arr,left = 0 ,right = arr.length -1){
    if(left >= right){
        return
    }
    let pivotIndex = partion(arr,left,right);
    middleQuickSort(arr,left,pivotIndex-1);
    middleQuickSort(arr,pivotIndex + 1,right);
}

function partion(arr, start ,end){
    let middle = start + Math.floor((end - start)/2)
    let pivot = arr[middle];
    console.log(pivot);
    [arr[middle],arr[end]] = [arr[end], arr[middle]]
    let pivotIndex = end;
    end--;
    console.log(`start = ${start} , end = ${end}`)
    
    while(start<=end){
        
        if(arr[start] > pivot && arr[end] < pivot){
            [arr[start],arr[end]] = [arr[end],arr[start]]
            start++;
            end--;
        }
        if(arr[start]<= pivot){
            start++;
        }
        if(arr[end] > pivot){
            end--;
        }
    }
    console.log("before pivot index swap with corrent positioin" , arr);
    [arr[pivotIndex],arr[start]] = [arr[start],arr[pivotIndex]]
    console.log(arr);
    
    return start;
    
}

let array = [4,2,65,7,9,53,-1]
middleQuickSort(array);
console.log(array);
