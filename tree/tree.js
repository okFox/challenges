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

    preOrder(rootNode, treeValues = []) {
        if(rootNode != null) 
        { 
            treeValues.push(rootNode.value); 
            this.preOrder(rootNode.left, treeValues); 
            this.preOrder(rootNode.right, treeValues); 
        }
        return treeValues;
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

    postOrder(rootNode, treeValues = []) {
        if(rootNode != null) 
        { 
            this.postOrder(rootNode.left, treeValues); 
            this.postOrder(rootNode.right, treeValues); 
            treeValues.push(rootNode.value); 
        } 
        return treeValues;
    }
 
    add(value){
      if(!this.rootNode){
        this.rootNode = new Node(value);
        return;
      }
      let currentNode = this.rootNode;

      if(!currentNode.left) {
        currentNode.left = new Node(value);
        currentNode = currentNode.left;
        return;
      } else {
        currentNode.right = new Node(value);
        currentNode = currentNode.left;
        return;
      }
    }
    contains(value){
      const treeValues = this.inOrder(this.rootNode);
      if(treeValues.includes(value)){
        return true;
      } 
      return false;
    }
  }

module.exports = BinaryTree;