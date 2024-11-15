class QueueArray{
    constructor(){
        this.head = -1;
        this.tail = -1;
        this.items = [];
    }
    isEmpty(){
        return this.items.length === 0
    }
    enqueue(element){
        this.items.push(element);
        this.tail++;
        if(this.head === -1){
            this.head = this.tail
        }
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("this array is empty");
            return null ;
        }
        const item = this.items[this.head];
        this.items.shift();
        this.tail--;
        return item
    }
    peak(){
        console.log("head = ",this.items[this.head])
    }
    print(){

        let output = '';
        for(let i = 0;i<this.items.length ;i++){
            output += `${this.items[i]} `
        }
        console.log("queue =",output)
        return output;
    }
    
}

const queue  = new QueueArray;
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.dequeue();
queue.peak();
queue.print()

function reverse(queue){
    if(queue.items.length < 1){
        console.log("empty queue");
     return;   
    }
    let element = queue.items.shift();
    reverse(queue);
    queue.items.push(element);
    
}
reverse(queue);
queue.print()
