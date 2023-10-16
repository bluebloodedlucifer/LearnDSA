import DoublyLinkedListNode from "./7_doubly_linked_list_node.js";

export default class CircularSinglyDoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    insertAt = (pos, data) => {
        if(data !== undefined && pos >= 0 && pos <= this.length){
            
            let newNode = new DoublyLinkedListNode(data);
            let current = this.head, previous = this.head, index = 0;

            if(pos === 0){
                if(!this.head){
                    this.head = newNode;
                    this.tail = newNode;
                }else{
                    newNode.next = current;
                    current.prev = newNode;
                    this.head = newNode;
                }
            }else if(pos === this.length){
                previous = this.tail;

                previous.next = newNode;
                newNode.prev = previous;
                this.tail = newNode;
            }else{
                while(index++ < pos){
                    previous = current;
                    current = current.next;
                }
                newNode.prev = previous;
                newNode.next = current;

                previous.next = newNode;
                current.prev = newNode;
            }

            this.length++;
            this.tail.next = this.head;
            this.head.prev = this.tail;
            return true;
        }else return false;
    }

    removeAt = (pos) => {
        if(pos >= 0 && pos < this.length){
            let current = this.head, previous = this.head, index = 0;
            if(pos === 0){
                this.head = current.next;

                if(this.length === 1) this.tail = null;
                else this.head.prev = null;

            }else if(pos === this.length - 1){
                current = this.tail;
                this.tail = current.prev
                this.tail.next = null;
            }else{
                while(index++ < pos){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            if(this.head){
                this.head.prev = this.tail;
                this.tail.next = this.head;
            }
            this.length--;
            return current.data;
        }else return null;

    }

    print(){
        let current = this.head, index = 0;
        let str = "tail-head<=>";
        while(index++ < this.length){
            str += `${current.data}<=>`;
            current = current.next;
        }
        str += "tail-head";
        console.log(str);
    }
    
    printReverse = () => {
        let current = this.tail, index = 0;
        let str = "head-tail<=>";
        while(index++ < this.length){
            str += `${current.data}<=>`;
            current = current.prev;
        }
        str += "head-tail";
        console.log(str);
    }

    push(data){
        return this.insertAt(this.length, data);
    }
    pop(){
        return this.removeAt(this.length - 1);
    }
    unshift(data){
        return this.insertAt(0, data);
    }
    shift(){
        return this.removeAt(0);
    }

    indexOf(data){
        let current = this.head;
        let index = 0;
        while (index < this.length) {
            if (current.data === data) return index;
            current = current.next;
            index++;
        }
        return -1;
    }
    isPresent(data){
        return this.indexOf(data) !== -1;
    }
    size(){
        return this.length;
    }
    isEmpty(){
        return this.length === 0;
    }
    toArray(){
        let current = this.head, count = this.length;
        let arr = []
        while (count--) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
    toString(){
        return this.toArray().toString();
    }
    at(pos){
        return this.getNodeAt(pos)?.data;
    }
    getHead(){
        return this.head;
    }
    getTail(){
        return this.tail;
    }

    getNodeAt(pos){
        if (pos >= 0 && pos < this.length) {
            let current = this.head;
            while (pos--) {
                current = current.next;
            }
            return current;
        }
        return undefined;
    }
    clear(){
        this.head = this.tail = null;
        this.length = 0;
    }

}