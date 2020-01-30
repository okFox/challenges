class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }

  class BinaryTree {
    constructor(tree) {
      this.tree = tree;
    }

    preOrder() {
        if(node != null) 
        { 
            console.log(node.data); 
            this.preorder(node.left); 
            this.preorder(node.right); 
        }
    }

    inOrder(node) { 
        if(node !== null) 
        { 
        this.inorder(node.left); 
        console.log(node.data); 
        this.inorder(node.right); 
      } 
  }

    postOrder() {
        if(node != null) 
        { 
            this.postorder(node.left); 
            this.postorder(node.right); 
            console.log(node.data); 
        } 
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
      // insert a Node
  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return
    }
  }
  }