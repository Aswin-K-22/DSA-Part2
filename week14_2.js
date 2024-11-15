// class Node{
//     constructor(value){
//         this.value =  value;
//         this.next = null;
//     }
// }

// class Stack{
//     constructor(){
//         this.top=null;
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0;
//     }
//     push(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.top= node;
//         }else{
//            node.next = this.top;
//            this.top = node;
//         }
//         this.size++;
//     }
//     pop(){
//         if(this.isEmpty()){
//             console.log("stack is empty");
//             return;
//         }

//             let remove = this.top.value;
//             this.top = this.top.next;
//             this.size--;
//             return remove;
        
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("stack is empty");
//             return;
//         }
//         let output =[];
//         let current = this.top;
//         while(current){
//             output.push(current.value);
//             current = current.next;
//         }
//         console.log("stack =" ,output);
//         return null;
//     }
// }
// const stack = new Stack();
// stack.pop();
// stack.push(4);
// stack.push(0);
// stack.push(5);
// stack.push(4);
// stack.print();
// stack.pop();
// stack.print();

class Node{
    constructor(key,value){
        this.key = key;
        this.value= value;
        this.next = null;
    }
}
class HashTable{
    constructor(capacity){
        this.table = new Array(capacity);
        this.size = capacity;
        this.elements = 0 ;
    }
    hash(key){
        let total = 0;
        for(let i = 0; i< key.length ; i++){
            total += key[i].charCodeAt(0)
        }
        return total%this.size;
    }
    set(key,value){
        let index = this.hash(key);
        const node = new Node(key,value);
        if(!this.table[index]){
            this.table[index] = node;
        }else{
            let current  = this.table[index];
            while(current){
                if(current.key === key){
                    current.value = value;
                    return null;
                }
                if(!current.next){
                    current.next = node;
                    this.elements++;
                }
                current = current.next;
            }
        }
    }
    get(key){
        let index = this.hash(key);
        if(!this.table[index]){
            console.log("not Available");
            
        }else{
            let current = this.table[index];
            while(current){
                if(current.key === key){
                    console.log(current.key , ':' , current.value);
                    return
                }
                if(!current.next){
                    console.log("not avalible");
                    return
                }
                current = current.next;

            }
        }
    }
    pop(key){
        let index = this.hash(key);
        if(!this.table[index]){
            console.log("not Available");
            return
        }

            if(this.table[index].key === key){
                this.table[index] = this.table[index].next;
                return
            }
            let current = this.table[index].next;
            let prev = this.table[index];
            
            while(current){
                if(current.key === key ){
                    prev.next = current.next;
                    return;
                }
                prev = current;
                current = current.next;
            }
        console.log("not availble");
        return null;
        
    }
    print(){
        
        for(let i = 0 ; i < this.size ; i++){
            if(this.table[i]){
                let current = this.table[i];
                let output = '';
                while(current){
                    output += `[ ${current.key} : ${current.value} ] `
                    current = current.next;
                }
                console.log(`index = ${i} : ${output}`);
                
            }
        }
    }
}

const table = new HashTable(6);
table.set('name' , 'Aswin');
table.set('age' , 24);
table.set('ega' , 42);
table.set('job' , 'No job');
table.print();
table.get('age');
table.pop('ega');
table.print();