class HashTable{
    constructor(capacity){
        this.table = new Array(capacity);
    }

    hash(key){
        let total = 0;
        for(let i = 0; i < key.length;i++){
            total += key[i].charCodeAt(0);
        }
        return total%this.table.length;
    }
    set(key,value){
        let index = this.hash(key);
        this.table[index] = value;
    }
    get(key){
        let index = this.hash(key);
        console.log(this.table[index]);
        
    }
    remove(key){
        let index = this.hash(key);
        this.table[index] = undefined;
        
    }
    display(){
        for(let i = 0; i < this.table.length ; i++){
            if(this.table[i]){
                console.log(i , "=" ,this.table[i]);
                
            }
        }
    }

}

const hashtable = new HashTable(15);
hashtable.set('name', 'aswin');
hashtable.set('age', 17);
hashtable.display();
hashtable.set('naem', 'hie bro');
hashtable.display();