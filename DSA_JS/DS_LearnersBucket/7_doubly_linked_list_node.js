export default class DoublyLinkedListNode{
    constructor(data, prev = null, next = null){
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}