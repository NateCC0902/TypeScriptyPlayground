/* 
    Methods: 

    Insert − Inserts an element in a tree/create a tree.

    Search − Searches an element in a tree.

    Preorder Traversal − Traverses a tree in a pre-order manner.

    Inorder Traversal − Traverses a tree in an in-order manner.

    Postorder Traversal − Traverses a tree in a post-order manner.

*/
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

    searchNode(val: number): TreeNode | null {
        let result: TreeNode | null = this;

        if (val > this.val) {
            if (this.right === undefined || this.right === null) {
                return null;
            }
            result = result.right!.searchNode(val);
        } else if (val < this.val) {
            if (this.left === undefined || this.left === null) {
                return null;
            }
            result = result.left!.searchNode(val);
        }
        return result;
    }

    insert(val: number): Boolean {
        let head: TreeNode = this;
        let newNode: TreeNode = new TreeNode(val);

        while (head.val != val) {
            if (val > head.val) {
                if (head.right === undefined || head.right === null) {
                    head.right = newNode;
                }
                head = head.right!;

            }
            if (val < head.val) {
                if (head.left === undefined || head.left === null) {
                    head.left = newNode;
                }
                head = head.left!;

            }
            if (val == head.val) {
                head.val = val;
                return true;
            }
        }

        return true;
    }

    preoder(): number[] {
        let temp: TreeNode[] = [];
        let head: TreeNode = this;
        let result: number[] = [];

        while (temp.length != null) {
            temp.push(head);
            result.push(head.val);

            if (head.left != null) {
                head = head.left;
            }else if(head.right != null && head.left == null){
                head = head.right;
            }else if(head.right == null && head.right == null){
                
                head = temp.pop()!;
                if(head.left != null){
                    head = head.left;
                }else if(head.right != null || head.left == null){
                    head = head.right!;
                }else if(head.right == null && head.left == null){
                    
                }
            }

        }


        return result;
    }

    inorder() {

    }

    arrToNode() {

    }

}
function checkNode(node: TreeNode) {

    return node;
}
let myArr = [2, 3, 45, 22, 3, 1, 5, 67, 20];
let myArrOrder = [1, 2, 3, 4, 5, 6, 7];

let x = new TreeNode(10);
let y = new TreeNode(2);
let z = new TreeNode(22);

x.left = y;
x.right = z;

// console.log(x.checkNode())
// console.log(y.checkNode())
x.insert(1);
console.log(checkNode(x.left))
