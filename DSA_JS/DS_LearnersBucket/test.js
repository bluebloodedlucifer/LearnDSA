
import SinglyLinkedListNode from "./3_singly_linked_list_node.js";

export default class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertAt(pos, data) {
        if (data !== undefined && pos >= 0 && pos <= this.length) {
            let newNode = new SinglyLinkedListNode(data);
            let current = this.head;

            if (pos === 0) {
                newNode.next = current;
                this.head = newNode;
                if (this.length === 0) this.tail = newNode; // Change #1: Moved tail update
            } else {
                let index = 0, previous = current;
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                newNode.next = current;
                previous.next = newNode;
                if (pos === this.length) this.tail = newNode; // Change #1: Moved tail update
            }
            this.length++;
        }
    }

    removeAt(pos) {
        if (pos >= 0 && pos < this.length) {
            let current = this.head;
            let previous = this.head;
            let index = 0;
            if (pos === 0) {
                this.head = current.next;
                this.length--;
                if (this.length === 0) this.tail = null; // Change #2: Moved tail update
                return current.data;
            } else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                if (pos === this.length - 1) this.tail = previous; // Change #2: Moved tail update
                this.length--;
                return current.data;
            }
        }
    }

    //(no changes in the remaining methods)
}


The changes are labeled as "Change #1" and "Change #2" in the code. These changes involve moving the updates to the `this.tail` property to handle cases where the head or tail of the list is affected.