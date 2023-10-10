import Stack from "./1_stack_using_array.js"
import Queue from "./2_queue_using_array.js";
import Node from "./3_singly_linked_list_node.js";
import SinglyLinkedList from "./4_singly_linked_list.js";

let sll = new SinglyLinkedList();
sll.unshift(1,2,3)
// console.log(sll);
sll.unshift(4, 5, 6, 7, 8, 9, 10)
sll.printList()
console.log(sll.length);

let deletedNodes = sll.pop(3)
deletedNodes.printList()
// console.log(deletedNodes.length);

sll.printList()


console.log(sll.length);