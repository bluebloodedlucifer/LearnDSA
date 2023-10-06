export default class Stack{
    constructor(...items){
        this.stack = [...items];
    }
    push(...items){
        items.forEach(item => this.stack.push(item));
        return this.stack;
    }
    pop(count = 0){
        if(this.stack.length === 0) throw Error("Error! Stack is Empty");
        else if(count < 0) throw Error("Error! Please Enter a positve value");
        else if (count >= this.stack.length) return this.stack.splice(0);
        else if(count === 0) return this.stack.pop();
        return this.stack.splice(-count, count);
    }
    peek(){
        if (this.stack.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.stack.at(-1);
    }
    size(){
        return this.stack.length;
    }
    clear(){
        this.stack.length = 0;
    }
    isEmpty(){
        return this.stack.length === 0;
    }
    toArray(){
        return this.stack.slice();
    }
    toString(){
        if(this.stack.length === 0) return "";
        return this.stack.join(",");
    }
}