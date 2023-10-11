import SinglyLinkedList from "./4_singly_linked_list.js";

export default class Queue{
    constructor(){
        this.queue = new SinglyLinkedList();
    }
    enqueue(data){
        this.queue.push(data)
    }
    dequeue(){
        return this.queue.shift();
    }
    printQueue(){
        this.queue.printList();
    }
    front(){
        return this.queue.at(0);
    }
    rear(){
        return this.queue.at(this.size() - 1);
    }
    size(){
        return this.queue.length;
    }
    isEmpty(){
        return this.queue.isEmpty();
    }
    clear(){
        this.queue.clear();
    }
}