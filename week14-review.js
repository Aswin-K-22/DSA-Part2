function quickSort(arr,start = 0 ,end = arr.length -1){
    if(start >= end){
        return
    }
    let pivot = partion(arr,start , end);
    console.log(pivot);
    
    quickSort(arr,start ,pivot-1);
    quickSort(arr,pivot+1,end);

}


function partion(arr, start, end){
    let pivot = arr[end];
    let pivotIndex = end;
    end--;
    while(start<=end){
        if(arr[start] > pivot && arr[end] < pivot){
            [arr[start] , arr[end]] = [arr[end] , arr[start]]
            start++;
            end--;
        }
        if(arr[start] <= pivot){
            start++;
        }
        if(arr[end]> pivot){
            end--;
        }
    }
    [arr[start] ,arr[pivotIndex]] = [arr[pivotIndex] , arr[start]];
    return start;
}

let array = [5,3,76,8,-1,8];
quickSort(array);
console.log(array);


// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     enqueue(value){
//         const node = new Node(value);
//         if(this.size === 0){
//             this.head = node;
//             this.tail = node;
//         }else{
//             this.tail.next = node;
//             this.tail = node;
//         }
//         this.size++;
//     }
//     dequeue(){
//         if(this.size === 0) {
//             return;
//         }
//         let removeNode = this.head 
//         if(this.size === 1){
//             this.head = null;
//             this.tail = null;
//         }else{
//             this.head =this.head.next
//         }

//         this.size--;
//         return removeNode;
//     }
//     print(){
//         if(this.size === 0 ){
//             return
//         }
//         let output = '';
//         let curr = this.head;
//         while(curr){
//             output += ` ${curr.value} `
//             curr = curr.next;
//         }
//         console.log(output);
//         return ;
//     }
// }

// const list = new LinkedList();
// list.enqueue(2)
// list.enqueue(3)
// list.enqueue(4)
// list.dequeue();
// list.print();