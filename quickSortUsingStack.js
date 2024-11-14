     
function quickStackSort(arr){
    let stack  = [];
    let high = arr.length -1;
    let low = 0;
    stack.push({high ,low});
    while(stack.length > 0){
        let {low ,high} = stack.pop();
        if(low<high){
            let pivotIndex = partion(arr,low,high);
            stack.push({low,high : pivotIndex - 1})
            stack.push({low : pivotIndex + 1,high})
        }
    }

}
function partion(arr,start ,end){
    let pivot = arr[end];
    let index = end;
    end--;
    while(start<=end){
        if(arr[start] > pivot && arr[end] < pivot){
            swap(arr,start,end);
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
    swap(arr,start,index);
    return start;
}
function swap (arr, high,low){
    [arr[high],arr[low]] = [arr[low],arr[high]]
}

     let array = [2,3,1,8,7,-2,3,4];
     quickStackSort(array);
     console.log(array);
     