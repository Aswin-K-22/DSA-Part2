class HashTable{
    constructor(capacity){
        this.table = new Array(capacity);
    }
    hash(key){
        let total = 0;
        for(let i = 0 ; i < key.length ; i++){
            total += key[i].charCodeAt(0);
        }
        return total%this.table.length;
    }
    set(key , value){
        let index = this.hash(key);
        console.log("index= ",index);
        
        let bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameItem = bucket.find(item => item[0] === key);
            if(sameItem){
                sameItem[1] = value;
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index =this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            let sameItem = bucket.find(item => item[0] === key);
            if(sameItem){
                console.log(`index = ${index} , ${sameItem}`);
                return sameItem
            }
        }
        console.log("not available");
        return null;
    }
    remove(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            let sameItem = bucket.find(item => item[0]=== key);
            if(sameItem){
                bucket.splice(bucket.indexOf(sameItem),1);
                console.log('deleted');
                return null
            }
        }
        console.log('elemnt not found');
        return null
        
    }
    display(){
        for(let i = 0 ; i < this.table.length ; i++){
            if(this.table[i]){
            console.log(`index = ${i} , values = ${this.table[i]}`);
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