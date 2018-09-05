class Node {
  constructor(value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  addToHead(value) {
    const node = new Node(value, null, this.head)
    if (this.head) this.head.next = node
    else this.tail = node
    this.head = node
  }
  printList() {
    let current = this.tail
    let result = []
    while (current) {
      result.push(current.value)
      current = current.next
    }
    return result.length > 0 ? result : null
  }
  //as putea face push in array la fiecare nod si sa sortez array-ul dupa nod.value.
  //Cand am facut un concsole.log(Array-ul ala) arata foarte naspa. That's why i used only values from each node.
  bubbleSort() {
    let current = this.tail
    let arrValues = []
    while (current) {
      arrValues.push(current.value)
      current = current.next
    }
    console.log('arrrr:', arrValues)
    let swapped = true
    let j = 0
    let n = arrValues.length
    while (swapped) {
      swapped = false
      j++
      for (let i = 0; i < n - j; i++) {
        if (arrValues[i] > arrValues[i + 1]) {
          let tmp = arrValues[i]
          arrValues[i] = arrValues[i + 1]
          arrValues[i + 1] = tmp
          swapped = true
        }
      }
    }
    return arrValues
  }
}
module.exports = LinkedList
