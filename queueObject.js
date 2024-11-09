class QueueObject{
constructor(){
    this.items = {}
    this.head = -1;
    this.tail = -1;
    this.size = 0
}
isEmpty(){
    return this.size === 0;
}
enqueue(element){
    this.tail++;
    this.items[this.tail] = element;
    if(this.head === -1){
        this.head = this.tail;
    }
    this.size++
}
dequeue(){
    if(this.isEmpty()){
        console.log("this queue is empty");
        return null 
    }
    const item = this.items[this.head];
    delete this.items[this.head];
    this.size--;
    if(this.isEmpty()){
        this.head = -1;
        this.tail = -1;
        return item;
    }
    this.head++;
    return item;

}
peak(){
    console.log("first element = ", this.items[this.head]);
    
}
print(){
    if(this.isEmpty()){
        console.log("this Queue is empty");
        return null
    }
    let i = this.head;
    let output =''
    while(i !== this.tail){
        output += `${this.items[i]} `
        i++;
    }
    console.log("The Queue element = " ,output);
    return output;
}
}

const queue  = new QueueObject;
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()
queue.enqueue(4)
queue.enqueue(5)
queue.dequeue();
queue.peak();
queue.print()