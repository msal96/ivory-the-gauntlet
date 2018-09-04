  // Facem o clasa care reprezinta un nod.
class Node {
    constructor(value, next, prev){
      this.value = value
      this.prev = prev
      this.next = next
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  addToHead (value) {
    //la next punem null pt ca adaugam la capul listei un nod care va deveni capul listei(adica next va fi null)
    //la previous punem this.head pt ca capul listei actuale va deveni prev dupa inserarea acestui nod.
    const node = new Node(value, null, this.head)
    if (this.head) {
      this.head.next = node
    } else {
      this.head = node
      this.tail = node
    }
  }
  addToTail (value) {
    //la next punem null pt ca adaugam la capul listei un nod care va deveni capul listei(adica next va fi null)
    //la previous punem this.head pt ca capul listei actuale va deveni prev dupa inserarea acestui nod.
    const node = new Node(value, this.tail, null)
    if (this.tail) {
      this.tail.prev = node
    } else {
      this.head = node
      this.tail = node
    }
  }
  removeHead () {
    if (!this.head) {
      //there's nothing to remove
      return null
    }
    //valoarea pe care o stergem
    const value = this.head.value
    this.head = this.head.prev
    //daca ii o lista cu un singur nod atunci this.head.prev o sa fie =null, de asta mai facem un check
    if (this.head) {
      this.head.next = null
    } else {
      //setam si this.tail=null(pt ca era doar un singur element pe care l-am sters)
      this.tail = null
    }
    return value
  }
  removeTail () {
    if (!this.tail) {
      return null
    }
    const value = this.tail.value
    this.tail = this.tail.next
    if (this.tail) {
      this.tail.prev = null
    } else {
      this.head = null
    }
    return value
  }
  search (value) {
    let current = this.tail
      while (current) {
        if (current.value === value) return value
        else current = current.next
      }
    return null
  }
  indexOf (value) {
    let indexes = []
    let index = 0
    let current = this.tail
    while (current) {
      if (current.value === value) {
        indexes.push(index)
      }
      current = current.next
      index++
    }
    if(indexes[0])
      return indexes
      else return null
  }
  mergeSort (list) {
    let splitInTwo = []
    let current = list.tail
    //split all list in elements of array of two nodes or array of one single, if it is a odd number of nodes
    while (current) {
      if(current.next){
        splitInTwo.push([current, current.next])
        current = current.next.next
      } else {
        splitInTwo.push([current])
        current = current.next
      }
    }
    //sortam array-urile de 2 elemente
    splitInTwo.map (item => {
      if (item[1]) {
        return item[0].value > item[1].value ? item : item.reverse()
      } else {
        return item
      }
    })
    //Grupam in cate 2 array-uri sortate si formam array-uri tot mai mari pana cand o sa fie un singur array
    while(splitInTwo.length !== 1)
      {
        let groupArr = []
        if  (splitInTwo.length%2 === 0) {
          for(let i=0; i<splitInTwo.length; i=i+2)
            {
              //Here: Logic of comparing two arrays by nodes.value
              // if (splitInTwo[i][0].value > splitInTwo[i+1][0].value)
            }
        } else {
          //Here: Logic of comparing two arrays by nodes.value when you have an odd elements array
        }
        splitInTwo = groupArr 
      }
    return splitInTwo
  }
}
