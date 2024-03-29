import SinglyLinkedListNode from "./3_singly_linked_list_node.js";

export default class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertAt(pos, data){
        if(data !== undefined && pos >=0 && pos <= this.length){
            let newNode = new SinglyLinkedListNode(data);
            let current = this.head;

            if(pos === 0){
                newNode.next = current;
                this.head = newNode;
                if(this.length === 0) this.tail = newNode;
            }else{
                let index = 0, previous = current;
                while(index++ < pos){
                    previous = current;
                    current = current.next;
                }
                newNode.next = current;
                previous.next = newNode;
                if(pos === this.length) this.tail = newNode;
            }
            this.length++;
            return true;
        }else return false;
    }

    removeAt(pos){
        if(pos >= 0 && pos < this.length){
            let current = this.head, previous = this.head, index = 0;
            if(pos === 0){
                this.head = current.next;
                if(this.length === 1) this.tail = null;
            }else{
                while(index++ < pos){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                if(pos === this.length - 1) this.tail = previous;
            }
            this.length--;
            return current.data;
        }else return null;
        
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

    print(){
        let current = this.head, index = 0;
        let str = "head->";
        while(index++ < this.length){
            str += `${current.data}->`;
            current = current.next;
        }
        str += "null";
        console.log(str);
    }

    
    indexOf(data){
        let current = this.head;
        let index = 0;
        while(index++ < this.length){
            if(current.data === data) return index;
            current = current.next;
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
        while(count--){
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
    toStirng(){
        return this.toArray().toString();
    }
    at(pos){
        return this.getNodeAt(pos)?.data || null;
    }
    getHead(){
        return this.head;
    }
    getTail(){
        return this.tail;
    }

    getNodeAt(pos){
        if(pos >= 0 && pos <this.length){
            let current = this.head;
            while(pos--){
                current = current.next;
            }
            return current;
        }
        return null;
    }
    clear(){
        this.head = this.tail = null;
        this.length = 0;
    }
}