/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator() {
  let head = null;
  let tail = null;

  function createNode(value) {
    return {
      value: value,
      next: null,
    };
  }



  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert,
  }

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function add(value) {
    let newNode = createNode(value);
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      let currentNode = head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      tail = currentNode.next;
    }
    return newNode;
  }



  function remove(num) {

    let currentNode = get(num);
    let prevNode = get(num - 1);
    if (num === 0) {
      return head = currentNode.next;
    }
    if (currentNode.next === null) {
      prevNode.next = null;
      return tail = prevNode;
    }
    if (currentNode === false) {
      return false;
    }
    return prevNode.next = currentNode.next;

  }

  function get(num) {
    let currentNode = head;
    let count = 0;

    while (count < num) {
      count++;
      currentNode = currentNode.next;
      if (currentNode === null) {
        return false;
      }
    }
    if (count === num) {
      return currentNode;
    }
  }





  function insert(value, index) {
    let curr = get(index);
    console.log(curr)
    let prev = get(index - 1);
    let newNode = createNode(value);
    if (curr === false || index < 0) {
      return false;
    } else if (index === 0) {
      newNode.next = head;
      head = newNode;
    } else {
      newNode.next = curr;
      return prev.next = newNode;
    }
    return false

  }
  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert,
  };
}