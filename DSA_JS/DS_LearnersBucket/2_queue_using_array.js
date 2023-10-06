export default class Queue{
    constructor(...items){
        this.queue = [...items]
    }
    enqueue(...items){
        items.forEach(item => this.queue.push(item));
        return this.queue;
    }
    dequeue(count = 0){
        if(this.queue.length === 0) throw Error("Error! Queue is empty!")
        else if(count < 0) throw Error("Error!, Please enter a positive value");
        else if(count === 0) return this.queue.shift();
        else if(count >= this.queue.length) return this.queue.splice(0);
        return this.queue.splice(0,count);
    }
    front(){
        if(this.queue.length === 0) throw Error("Error! Queue is empty!")
        return this.queue.at(0);
    }
    rear(){
        if(this.queue.length === 0) throw Error("Error! Queue is empty!")
        return this.queue.at(-1);
    }
    clear(){
        this.queue.length = 0;
    }
    size(){
        return this.queue.length;
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    toArray(){
        return this.queue.slice();
    }
    toString(){
        return this.queue.join(",");
    }
}