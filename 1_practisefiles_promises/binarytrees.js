// Instantiating a new Binary Tree using a constructor function
function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

// Insertion to a Binary Tree
BinaryTree.prototype.insert = function(val) {
    if(val < this.value && this.left){
        this.left.insert(val);
    };
    if(val < this.value && !this.left){
        this.left = new BinaryTree(val);
    };
    if(val > this.value && this.right){
        this.right.insert(val);
    };
    if(val > this.value && !this.right){
        this.right = new BinaryTree(val);
    };
}

// Searching for an element in a Binary Tree
BinaryTree.prototype.search = function(valueToSearch) {
    if(this.value === valueToSearch){
        return true;
    }
    return !!(this.left && this.left.search(valueToSearch)) || !!(this.right && this.right.search(valueToSearch));
}