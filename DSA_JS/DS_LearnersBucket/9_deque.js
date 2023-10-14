import DoublyLinkedList from "./8_doubly_linked_list.js";

export default class Deque{
    constructor(){
        this.deque = new DoublyLinkedList()
    }
    push = (data) => this.deque.push(data);
    pop = () => this.deque.pop();
    unshift = (data) => this.deque.unshift(data);
    shift = () => this.deque.shift();

    print = () => this.deque.print();

    getFront = () => this.deque.getHead();
    getBack = () => this.deque.getTail();
    peekFront = () => this.deque.peekFront();
    peekBack = () => this.deque.peekBack();


    isEmpty = () => this.deque.isEmpty();
    size = () => this.deque.size();
    clear = () => this.deque.clear();

    toString = () => this.deque.toString();
    toArray = () => this.deque.toArray();
    
}