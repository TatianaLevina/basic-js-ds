const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    let newNode = new Node(data);

    if (this._root === null) {
      this._root = newNode;
    }
    else {
      addNode(this._root, newNode);
    }

    function addNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null)
          node.left = newNode;
        else {
          addNode(node.left, newNode);
        }
      }
      else {
        if (node.right === null)
          node.right = newNode;
        else {
          addNode(node.right, newNode);
        }
      }
    }
  }

  has(data) {
    return hasNode(this._root, data);

    function hasNode(node, key) {
      if (node === null) {
        return false;
      }
      if ( node.data === key) {
        return true;
      }
      else if(key < node.data){
        return hasNode(node.left, key);
      }
      else if(key > node.data){
        return hasNode(node.right, key);
      }
      
    }
  }

  find(data) {
    return findNode(this._root, data);

    function findNode(node, key) {
      if (node === null) {
        return null;
      }
      if ( node.data === key) {
        return node;
      }
      else if(key < node.data){
        return findNode(node.left, key);
      }
      else if(key > node.data){
        return findNode(node.right, key);
      }
      
    }
  }

  remove(data) {
    this._root = removeNode(this._root, data);

    function removeNode(node, key) {
      if (node === null) {
        return null;
      }
      else if (key < node.data) {
        node.left = removeNode(node.left, key);
        return node;
      }
      else if (key > node.data) {
        node.right = removeNode(node.right, key);
        return node;
      }
      else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        }
        else if (node.right === null) {
          node = node.left;
          return node;
        }
        let minFromRightSubtree = node.right;
        while (minFromRightSubtree.left) {
          minFromRightSubtree = minFromRightSubtree.left;
        }
        node.data = minFromRightSubtree.data;
        node.right = removeNode(node.right, minFromRightSubtree.data);

        return node;
      }
    }
  }

  min() {
    let curNode = this._root;
    while (curNode.left !== null) {
      curNode = curNode.left;
    }
    return curNode.data;
  }

  max() {
    let curNode = this._root;
    while (curNode.right !== null) {
      curNode = curNode.right;
    }
    return curNode.data;
  }
}

module.exports = {
  BinarySearchTree
};