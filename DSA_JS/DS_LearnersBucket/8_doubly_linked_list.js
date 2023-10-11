import DoublyLinkedListNode from "./7_doubly_linked_list_node.js";

export default class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertAt(pos, data){
        if(data !== undefined && pos >= 0 && pos <= this.length){
            let newNode = new DoublyLinkedListNode(data);
            let current = this.head;

            if(pos === 0){
                newNode.next = current;
                newNode.prev = null;
                if(current) current.prev = newNode;
                this.head = newNode;
                if(this.length === 0) this.tail = newNode;
            }else if(pos === this.length){
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
            else{
                let index = 0, previous = current;
                while(index++ < pos){
                    previous = current;
                    current = current.next;
                }
                newNode.next = current;
                newNode.prev = previous;

                previous.next = newNode;
                current.prev = newNode;

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
                else this.head.prev = null;

            }
            else if(pos === this.length - 1){
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            }
            else{
                while(index++ < pos){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current.data;
        }else return null;
    }
    printList(){
        let current = this.head;
        let str = "null<=>";
        while(current){
            str += `${current.data}<=>`;
            current = current.next;
        }
        str += "null";
        console.log(str);
    }

    push(data){
        return this.insertAt(this.length, data);
    }
    pop(){
        return this.removeAt(this.length-1);
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
        while(current){
            if(current.data === data) return index;
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
        let current = this.head
        let arr = []
        while(current){
            arr.push(current.data);
            current = current.next;
        }
        return arr;
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