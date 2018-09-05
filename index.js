class Node {
  constructor (value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  addToHead (value) {
    const node = new Node(value, null, this.head)
    if (this.head) this.head.next = node
    else this.tail = node
    this.head = node
  }

  addToTail (value) {
    const node = new Node(value, this.tail, null)
    if (this.tail) this.tail.prev = node
    else this.head = node
    this.tail = node
  }

  removeHead () {
    if (!this.head) return null
    const value = this.head.value
    this.head = this.head.prev
    if (this.head) this.head.next = null
    else this.tail = null
    return value
  }

  removeTail () {
    if (!this.tail) return null
    const value = this.tail.value
    this.tail = this.tail.next
    if (this.tail) this.tail.prev = null
    else this.head = null
    return value
  }

  search (value) {
    let current = this.tail
    while (current) {
      if (current.value === value) return value
      current = current.next
    }
    return null
  }

  indexOf (value) {
    const indexes = []
    let current = this.tail
    let index = 0
    while (current) {
      if (current.value === value) indexes.push(index)
      current = current.next
      index++
    }
    return indexes
  }

  removeAtIndex (index) {
    let currentNode = this.tail
    let currentIndex = 0

    while (currentIndex !== index) {
      currentIndex++
      currentNode = currentNode.next
    }

    if (currentIndex === index) {
      currentNode.prev.next = currentNode.next
      currentNode.next.prev = currentNode.prev
      currentNode.prev = null
      currentNode.next = null
    } else {
      return null
    }
  }

  addAtIndex (index, value) {
    let currentNode = this.tail
    let currentIndex = 0

    while (currentIndex !== index) {
      currentIndex++
      currentNode = currentNode.next
    }

    let newNode = new Node(value, currentNode, currentNode.prev)
    if (currentIndex === index) {
      currentNode.prev.next = newNode
      currentNode.prev = newNode
    }
  }
  printList () {
    console.log('taillll:', this.tail)
    let current = this.tail
    let result = []
    while (current) {
      result.push(current.value)
      current = current.next
    }
    return result.length > 0 ? result : null
  }
}

module.exports = LinkedList
