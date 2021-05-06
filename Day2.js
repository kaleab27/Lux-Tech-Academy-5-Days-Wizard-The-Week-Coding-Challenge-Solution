// Delete a NODE given only a pointer to the NODE in a singly linked list

function _Node (value) {
  let node = Object.create(_Node.prototype)
  node.value = value
  node.next = null
  return node
}

function _LinkedList () {
  let linkedList = Object.create(_LinkedList.prototype)
  linkedList.head = null
  linkedList.size = 0
  return linkedList
}

_LinkedList.prototype.insert = function (value, index) {
  if (index < 0 || index > this.size) {
      return 'Invalid index'
  }

  if (index === 0) {
    if(!this.head) {
      let node = _Node(value)
      this.head = node
      this.size++
      return node
    } else {
      let previousHead = this.head
      let node = _Node(value)
      this.head = node
      node.next = previousHead
      this.size++
      return node
    }
  } else {
    let current = this.head
    let previous
    let count = 0
    while (count < index) {
      previous = current
      current = current.next
      count++
    }
    let node = _Node(value)
    previous.next = node
    node.next = current
    this.size++
    return node
  }
}

_LinkedList.prototype.remove = function (index) {
  if (index > 0 && index > this.size) {
      return 'Invalid index'
    }

    let current = this.head
    let previous = null
    let count = 0

    if (index === 0) {
      this.head = current.next
      current = null
      this.size--
      return
    } else {
      while (count < index) {
        count++
        previous = current
        current = current.next
      }

      previous.next = current.next
      current = null
      this.size--
      return
    }
}

// Example
const ll = _LinkedList()

ll.insert(500, 0)
ll.insert(347, 1)
ll.insert(230, 2)
ll.insert(760, 3)

ll.remove(3)
ll.remove(0)

// ES6
class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  insert (value, index) {
    if (index < 0 && index > this.size) {
      return 'Invalid index'
    }

    if (index === 0) {
      if(!this.head) {
        let node = new Node(value)
        this.head = node
        this.size++
        return
      } else {
        let previousHead = this.head
        let node = new Node(value)
        this.head = node
        node.next = previousHead
        this.size++
        return
      }
    }
    
    let current = this.head
    let previous = null
    let count = 0
    while (count < index) {
      previous = current
      current = current.next
      count++
    }
    let node = new Node(value)
    previous.next = node
    node.next = current
    this.size++
    return
  }
  
  remove (index) {
    if (index > 0 && index > this.size) {
      return 'Invalid index'
    }

    let current = this.head
    let previous = null
    let count = 0

    if (index === 0) {
      this.head = current.next
      current = null
      this.size--
      return
    } else {
      while (count < index) {
        count++
        previous = current
        current = current.next
      }

      previous.next = current.next
      current = null
      this.size--
      return
    }
  }
}


// Example
const linkedList = new LinkedList()

linkedList.insert(500, 0)
linkedList.insert(347, 1)
linkedList.insert(230, 2)
linkedList.insert(760, 3)

linkedList.remove(3)
linkedList.remove(0)
