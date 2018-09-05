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
  addAtIndex (index, value) {
    let actualIndex = 0
    let current = this.tail
    console.log('1')
    while (actualIndex != index) {
      current = current.next
      actualIndex ++
    }
    console.log('2', actualIndex, index)
    if(actualIndex === index) {
      const node = new Node(value, this.current, this.current.prev)
      console.log('current after found:', this.current)
      this.current.prev.next = node
    } else {
      return null
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
