// import Stack from "./1_stack_using_array.js"
// import Queue from "./2_queue_using_array.js";
import Node from "./3_singly_linked_list_node.js";
import SinglyLinkedList from "./4_singly_linked_list.js";
import Stack from "./5_stack_using_singly_linked_list.js";
import Queue from "./6_queue_using_singly_linked_list.js";
import DoublyLinkedList from "./8_doubly_linked_list.js";
import Deque from "./9_deque.js";
import CircularSinglyLinkedList from "./10_circular_singly_linked_list.js";
import CircularSinglyDoublyLinkedList from "./11_circular_doubly_linked_list.js";

let cdll = new CircularSinglyDoublyLinkedList();

for(let i = 0; i < 10; i++){
    cdll.push(i)
}

cdll.print()
cdll.printReverse()

console.log(cdll);







