class StackObject{
    constructor(){
        this.items = {};
        this.top = -1;
        this.size = 0;
    }
    push(element){
        this.top++;
        this.items[this.top] = element;
        this.size++;
    }
    pop(){
        if(this.size === 0){
            console.log("stack is empty");
            return null
        }
        const item = this.items[this.top]
        delete this.items[this.top]
        this.top--;
        this.size--;
        console.log("removed elemnt = ",item);
        
        return item ;
    }
    print(){
        if(this.size === 0){
            console.log("stack is empty");
            return null
        }
        let output = ''
        for(let i = 0 ;i <this.size ; i++){
            output += `${this.items[i]} `
        }
        console.log("Stack elemwns = " ,output)
        return output;
    }
}

const stack = new StackObject();
stack.push(1)
stack.push(2)
stack.push(3)
stack.print();
stack.push(4)
stack.push(5)
stack.pop();
stack.print();