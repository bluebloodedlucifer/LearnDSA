import SinglyLinkedList from "./4_singly_linked_list.js";

export default class Stack{
    constructor(){
        this.stack = new SinglyLinkedList();
    }

    push(data){
        this.stack.push(data);
    }
    pop(){
        return this.stack.pop();
    }
    peek(){
        return this.stack.at(this.stack.size() - 1);
    }
    toArray(){
        return this.stack.toArray();
    }
    size(){
        return this.stack.size();
    }
    isEmpty(){
        return this.stack.isEmpty();
    }
    clear(){
        return this.stack.clear();
    }
    printStack(){
        this.stack.printList();
    }
}