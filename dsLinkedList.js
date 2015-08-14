var node = function(value, next, prev) {
  this.data = value,
  this.next = next,
  this.prev = prev
};

var LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

var utility = {
  indexOutOfBound: function(index, size) {
    if (index < 0 && index > size + 1) {
      console.log("Index given is out of bounds");
      return true;
    }
  
    return false;
  },
 
  goToIndexNode: function(head, index) {
    if (index === 0) {
      return head;
    };
  
    var current = head;
    for (var i = 0; i < index + 1; i++) {
      current = current.next
    };
  
    return current;
  }
};



// Adds a node to Linked List
LinkedList.prototype.add = function(val) {
  var current;
  if (this.head === null) {
    this.head = new node(val, null, null);
    this.tail = this.head;
  } else {
    current = this.tail;
    current.next = new node(val, null, current);
    this.tail = current.next;
  };
  this.size++;
};

// Removes node from Linked List
LinkedList.prototype.remove = function(index){
  if (utility.indexOutOfBound(index,this.size)) {
    return null;
  }
  var current;
  var prevNode;
  var nextNode;
  if (index === this.size - 1) {
    current = this.tail;
    prevNode = current.prev;
    this.tail = prevNode;
    current = null;
    prevNode.next = null;
    this.size--;
    return;
  } else if(index === 0) {
    current = this.head;
    nextNode = current.next;
    this.head = nextNode;
    current = null;
    nextNode.prev = null;
    this.size--;
    return;
  } else {
    current = utility.goToIndexNode(this.head,index);
    prevNode = current.prev;
    nextNode = current.next;
    current = null;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.size--;
  return;
  };
  
};

// Get value at index
LinkedList.prototype.getValue= function(index) {
  if (utility.indexOutOfBound(index,this.size)) {
    return null;
  }
  
  var current = utility.goToIndexNode(this.head,index)
  return current.data;
};

/** Get all values and returns an object
 * that has key/value pairs
 * O(n) runtime
 */
LinkedList.prototype.getAllValues = function() {
  if (this.head === null) {
    return "List is empty";
  }
  
  var result = {};
  var current = this.head;
  for (var i = 0; i < this.size; i++) {
    result[i] = current.data;
    current = current.next;
  }
  
  return result;
};

/** Reverse Linked List
 * O(n/2) runtime
 */
LinkedList.prototype.reverse = function() {
  if (this.head === null) {
    return "No values to reverse";
  }
  
  if (this.size === 1) {
    return;
  }
  
  var nodeOne = this.head;
  var nodeTwo = this.tail;
  var helperNodeData = nodeOne.data;
  nodeOne.data = nodeTwo.data;
  nodeTwo.data = helperNodeData;
  this.head.data = nodeOne.data;
  this.tail.data = nodeTwo.data;
  if (this.size > 2) {
    var endingIndex;
    if (this.size % 2 === 1) {
      endingIndex = this.size / 2 + 1.5;
    } else {
      endingIndex = this.size / 2 + 1;
    }
    
    for (var i = this.size -1; i > endingIndex - 1; i--) {
      nodeOne = nodeOne.next;
      nodeTwo = nodeTwo.prev;
      helperNodeData = nodeOne.data;
      nodeOne.data = nodeTwo.data;
      nodeTwo.data = helperNodeData;
    }
    
  }
};↵