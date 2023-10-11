import SinglyLinkedListNode from "./3_singly_linked_list_node.js";

export default class SinglyLinkedList{
    constructor(...items){
        this.head = null;
        this.tail = null; 
        this.length = 0;

        items.forEach((item) => this.push(item));
    }


    push(item) {
        const newNode = new SinglyLinkedListNode(item);

        if (!this.head) {
        this.head = newNode;
        this.tail = newNode; 
        } else {
        this.tail.next = newNode;
        this.tail = newNode;
        }

        this.length++;
    }
    shift(count = 0){
        if(this.head === null) throw Error("Error! Singly Linked List is Empty");
        else if(count < 0) throw Error("Error! Please Enter a positve value");
        else if (count >= this.length) {
            let deletedNodes = this.toArray();
            this.head = this.tail = null;
            this.length = 0;
            return new SinglyLinkedList(...deletedNodes);
        }
        else if(count === 0){
            let deletedNode = this.head;
            this.head = this.head.next;
            this.length--;
            deletedNode.next = null;
            return new SinglyLinkedList(deletedNode.data);
        }
        else{
            let temp = this.head;
            let deletedNodes = []
            while(count > 0){
                temp = temp.next;
                deletedNodes.push(temp.data)
                count--;
                this.length--;
            }
            this.head = temp;
            return new SinglyLinkedList(...deletedNodes);
        }
    }
    unshift(...items){
        if(this.head){
            items.forEach(item => {
                const newNode = new SinglyLinkedListNode(item);
                newNode.next = this.head;
                this.head = newNode;
                this.length++;
            })
        }else{
            items = items.reverse();
            items.forEach(item => {
                this.push(item)
            });
        }
        
    }
    pop(count = 0){
        if(this.head === null) throw Error("Error! Singly Linked List is Empty");
        else if(count < 0) throw Error("Error! Please Enter a positve value");
        else if (count >= this.length) {
            let deletedNodes = this.toArray().reverse();
            this.head = this.tail = null;
            this.length = 0;
            return new SinglyLinkedList(...deletedNodes);
        }
        else if(count === 0){
            let temp = this.head;
            while(temp.next.next){
                temp = temp.next;
            }
            this.tail = temp;
            temp = temp.next;
            this.tail.next = null;
            this.length--;
            let deletedNode = temp.data;
            return new SinglyLinkedList(deletedNode);
        }
        else{
            let temp = this.head;
            let start = this.length - count;
            let deletedNodes = []
            while(start > 1){
                temp = temp.next;
                start--;
            }
            this.tail = temp;
            temp = temp.next;
            this.tail.next = null;
            while(temp){
                deletedNodes.push(temp.data)
                temp = temp.next;
            }
            this.length -= count;
            deletedNodes = deletedNodes.reverse()
            return new SinglyLinkedList(...deletedNodes);
        }
    }

    inserAt()

    printList(){
        let curr = this.head;
        let str = "head->";
        while(curr){
            str = str + `${curr.data}->`
            curr = curr.next;
        }
        str += "null";
        console.log(str);
    }
    size(){
        return this.length;
    }
    toArray(){
        let start = this.head;
        let arr = [];
        while(start){
            arr.push(start.data);
            start = start.next;
        }
        return arr;
    }
}

