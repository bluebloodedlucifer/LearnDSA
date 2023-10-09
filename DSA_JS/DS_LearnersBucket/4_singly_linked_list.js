import Node from "./3_node.js";

export default class SinglyLinkedList{
    constructor(...items){
        this.head = null;
        this.tail = null; 
        this.size = 0;

        items.forEach((item) => this.push(item));
    }

    push(item) {
        const newNode = new Node(item);

        if (!this.head) {
        this.head = newNode;
        this.tail = newNode; 
        } else {
        this.tail.next = newNode;
        this.tail = newNode;
        }

        this.size++;
    }
    pop(count = 0){

    }
    unshift(...items){
        if(this.head){

        }else{
            items = items.reverse();
            items.forEach(item => this.push(item));
        }
    }
    shift(){

    }

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

}

