class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  class BinaryTree {
    constructor(){
      this.rootNode = null;
    }


    preOrder(rootNode, treeValues) {
        if(rootNode != null) 
        { 
            treeValues.push(rootNode.value); 
            this.preorder(rootNode.left); 
            this.preorder(node.right); 
        }
    }

    inOrder(rootNode, treeValues = []) { 
        if(rootNode !== null) 
        { 
        this.inOrder(rootNode.left, treeValues); 
        treeValues.push(rootNode.value); 
        this.inOrder(rootNode.right, treeValues); 
      } 
      return treeValues;
  }

    postOrder() {
        if(node != null) 
        { 
            this.postorder(node.left); 
            this.postorder(node.right); 
            this.treeValues.push(node.value); 
        } 
    }
    add(value) {
      const node = new Node(value)
      if (!this.rootNode) {
        this.rootNode = node
        return
      }
    }
  }
  
  // class BinarySearchTree {
  //   constructor() {
  //     this.root = null;
  //   }
      // insert a Node

  // Define contains method on prototype (value)
  // Create variable to hold found node
  // Create recursive function
  //   If current node value is equal to value
  //     Set variable equal to true
  //   else if BST left child is !undefined && value < BST value 
  //     recurse with current node's left child
  //   else if BST right child is !undefined && value > BST value
  //     recurse with current node's right child
  // Call recursive function on root node
  // Return variable of found node
// contains(value) {
// let currentNode = undefined;

// if(currentNode.value === value) {
//   currentNode = true;
// } else if {
  
// }

// }


// }
module.exports = BinaryTree;