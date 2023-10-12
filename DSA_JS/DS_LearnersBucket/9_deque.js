import DoublyLinkedList from "./8_doubly_linked_list.js";

export default class Deque{
    constructor(){
        this.deque = new DoublyLinkedList()
    }
    push = (data) => this.deque.push(data);
    pop = () => this.deque.pop();
    unshift = (data) => this.deque.unshift(data);
    shift = () => this.deque.shift();

    
}