class StackArray{
    constructor(){
        this.items = []
    }
    push(value){
        this.items.push(value);
    }
    pop(){
        const item = this.items[this.items.length - 1]
        this.items.pop();
        console.log("removed elemnt = ",item);
        return item ;
    }
    print(){
        let output = ''
        for(let i = 0 ;i < this.items.length ; i++){
            output += `${this.items[i]} `
        }
        console.log("stack elemnt is =" ,output);
        return output
    }
}
const stack = new StackArray();
stack.push(1)
stack.push(2)
stack.push(3)
stack.print();
stack.push(4)
stack.push(5)
stack.pop();
stack.print();