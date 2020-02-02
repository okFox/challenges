const BinaryTree = require('./tree.js');

describe('BinaryTree class', () => {
  let tree;
  beforeEach(() => {
    tree = new BinaryTree();
  });
  it('successfully instantiates an empty binary tree', () => {
    expect(tree.rootNode).toBeNull();
  });
  it('properly inserts a value into the tree', () => {
    tree.add(10);
    expect(tree.rootNode).toEqual({ 'left': null, 'right': null, 'value': 10 }); 
  });
  it('records elements to inorder array in correct order', () => {
    tree.add(3);
    tree.add(7);
    tree.add(23);
    expect(tree.inOrder(tree.rootNode)).toEqual([7, 3, 23]); 
  });
  it('records elements to preorder array in correct order', () => {
    tree.add(3);
    tree.add(7);
    tree.add(23);
    expect(tree.preOrder(tree.rootNode)).toEqual([3, 7, 23]); 
  });
  it('records elements to postorder array in correct order', () => {
    tree.add(3);
    tree.add(7);
    tree.add(23);
    expect(tree.postOrder(tree.rootNode)).toEqual([7, 23, 3]); 
  });
  it('returns true if a value is contained in the tree', () => {
    tree.add(3);
    tree.add(7);
    tree.add(23);
    expect(tree.contains(23)).toEqual(true); 
  });
  it('returns false if a value is not contained in the tree', () => {
    tree.add(3);
    tree.add(7);
    tree.add(23);
    expect(tree.contains(6)).toEqual(false); 
  });
});