class BSTNode{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree
{
    constructor(){
        this.root = null;
    }

    insert(data){
        var newNode = new BSTNode(data);

        if(this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }

        else{
            if(node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right,newNode);
        }
    }
 
    findMinNode(root){
        if(root==null){
            console.log('root is empty');
            return -1;
        }
        if(root.left === null)
            return root;
        else
            return this.findMinNode(root.left);
    }
    findMaxNode(root){
        if(root==null){
            console.log('root is empty');
            return -1;
        }
        if(root.right === null)
            return root;
        else
            return this.findMaxNode(root.right);
    }

    getRootNode(){
        return this.root;
    }
}
var BST = new BinarySearchTree();
BST.insert(10);
BST.insert(3);
BST.insert(14);
BST.insert(7);
BST.insert(27);
let root = BST.getRootNode();
console.log("minimum : "+BST.findMinNode(root).data)
console.log("maximum : "+BST.findMaxNode(root).data)