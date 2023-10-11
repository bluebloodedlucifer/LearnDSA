// import Stack from "./1_stack_using_array.js"
// import Queue from "./2_queue_using_array.js";
import Node from "./3_singly_linked_list_node.js";
import SinglyLinkedList from "./4_singly_linked_list.js";
import Stack from "./5_stack_using_singly_linked_list.js";
import Queue from "./6_queue_using_singly_linked_list.js";
import DoublyLinkedList from "./8_doubly_linked_list.js";

let dll = new DoublyLinkedList()

for(let i = 0; i<10; i++){
    dll.insertAt(i, 9-i);
    dll.printList();
}
for(let i = 0; i<10; i++){
    dll.removeAt(0);
    dll.printList()
}







