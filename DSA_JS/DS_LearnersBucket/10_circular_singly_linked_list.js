import SinglyLinkedListNode from "./3_singly_linked_list_node.js";

export default class CircularSinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertAt(pos, data){
        
        if(data != undefined && pos >= 0 && pos <= this.length){

            let newNode = new SinglyLinkedListNode(data);
            let current = this.head, previous, index = 0;
            if(pos === 0){
                newNode.next = current;
                this.head = newNode;
            }else{
                while(index++ < pos){
                    previous = current;
                    current = current.next;
                }
                newNode.next = current;
                previous.next = newNode;
            }
            if(this.length === 0 || pos === this.length) this.tail = newNode;
            this.tail.next = this.head;
            this.length++;
            return true;
        }
        return false;
    }
    
    removeAt(pos){
        if(pos >= 0 && pos < this.length){

            let current = this.head, previous, index = 0;
            if(pos === 0){
                this.head = current.next;
                if(this.length === 1) {
                    this.head = this.tail = null;
                }
            }else{
                while(index++ < pos){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                if(pos === this.length) this.tail = previous;
                this.tail.next = this.head;
            }

            this.length--;
            return current.data;
        }
    }
    push = (data) => this.insertAt(this.length, data);
    pop = () => this.removeAt(0);
    unshift = (data) => this.insertAt(0, data);
    shift = () => this.removeAt(this.length);

    toArray = () =>{
        let current = this.head, count = this.length;
        let arr = []
        while(count--){
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
    toString = () => this.toArray().toString();

    print = () => {
        let current = this.head, index = 0;
        let str = "head->";
        while(index++ < this.length){
            str += `${current.data}->`;
            current = current.next;
        }
        str += "head";
        console.log(str);
    }

    indexOf = (data) => {
        let current = this.head, index = 0;
        while(index++ < this.length){
            if(current.data === data) return index;
            current = current.next;
        }
        return -1;
    }
    size = () => this.length;
    isEmpty = () => this.length === 0;
    isPresent = (data) => this.indexOf(data) !== -1;

    getNodeAt(pos){
        if(pos >= 0 && pos <this.length){
            let current = this.head;
            while(pos--){
                current = current.next;
            }
            return current;
        }
        return undefined;
    }
    at(pos){
        return this.getNodeAt(pos)?.data;
    }
    getHead = () => this.head;
    getTail = () => this.tail;
    clear = () => {
        this.head = this.tail = null;
        this.length = 0;
    }
}