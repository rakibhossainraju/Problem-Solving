
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }


var modifiedList = function(nums, head) {
    const numsSet = new Set(nums);
    
    while (head !== null && numsSet.has(head.val)) {
        head = head.next; // Move the head forward
    }
    if (head === null) return null;

    let current = head;
    let previous = null;

    while (current !== null) {
        if (numsSet.has(current.val)) {
            previous.next = current.next;
        } else {
            previous = current;
        }
        current = current.next;
    }

    return head;
};

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(modifiedList([1, 2, 3], head));  // Output: [4, 5]
