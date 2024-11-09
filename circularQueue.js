

class CircularQueue{
    constructor(capacity){
        this.head = -1;
        this.tail = -1;
        this.items = new Array(capacity);
        this.curerntLength = 0;
        this.capacity = capacity;
    }
    isFull(){
        return this.capacity === this.curerntLength;
    }
    isEmpty(){
        return this.curerntLength === 0
    }
    peak(){
        if(this.isEmpty()){
            console.log("this queue is empty");  
            return null;
        }else{
            console.log("first element of this queue is =" ,  this.items[this.head]);
            
        }
    }
    size(){
        return this.curerntLength;
    }
    enqueue(element){
       if(this.isFull()){
            console.log("this Queue is full ")
            return null
        }else{
            this.tail = (this.tail + 1)%this.capacity;
            this.items[this.tail] = element;
            if(this.head === -1){
                this.head = this.tail;
            }
        }

        this.curerntLength++;
        console.log("new queue =" ,this.items);
        return;
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("this Queue is empty ");
            return null;
       
        }else{
            this.items[this.head] = null;
            this.head = (this.head + 1)%this.capacity 

        }
        this.curerntLength--;
        if(this.isEmpty()){
            this.head = -1;
            this.tail = -1;
        }
        console.log("After dequeue = " ,this.items);
        
    
    }
    print(){
        if(this.isEmpty()){
            console.log("this que is empty");
            return
        }else{
            let output = '';
            let i = 0 ;
            let j = this.head;
            while(i < this.curerntLength){
                output += `${this.items[j]} `
                j = (j + 1 )%this.capacity;
                i++;
            }
            console.log('the Queue = ' ,output);
            
        }
    }
}

const queue  = new CircularQueue (4);
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.dequeue();
queue.peak();
queue.print()
