// Recursive postorder tree traversal

class Node {
  constructor (data) {
    this.data = data
    this.parent = null
    this.children = []
  }
}

class Tree {
  constructor (data) {
    let node = new Node(data)
    this.root = node
  }
  
  traverse (callback) {
    (function recurse(currentNode) {
        for (let i = 0, length = currentNode.children.length; i < length; i++) {
            recurse(currentNode.children[i])
        }
        callback(currentNode)
    })(this.root);
  }
  
  contains (callback) {
    this.traverse.call(this, callback)
  }
  
  add (data, toData) {
    let child = new Node(data)
    let parent = null
    let callback = node => {
            if (node.data === toData) {
                parent = node
            }
        }
 
    this.contains(callback);
 
    if (parent) {
        parent.children.push(child)
        child.parent = parent
    } else {
        throw new Error('Cannot add node to a non-existent parent.')
    }
  }
}

// EXAMPLE
let tree = new Tree('Document');

tree.add('HTML', 'Document');

tree.add('HEAD', 'HTML');
tree.add('BODY', 'HTML');

tree.add('HEADER', 'BODY');
tree.add('MAIN', 'BODY');
tree.add('FOOTER', 'BODY');

tree.add('NAV', 'HEADER');

tree.add('SECTION 1', 'MAIN');
tree.add('SECTION 2', 'MAIN');


let outputAllData = node => {
  console.log(node.data)
}
let updateData = node => {
  node.data = `${node.data} ELEMENT`
}


tree.traverse(outputAllData)
tree.traverse(updateData)
tree.traverse(outputAllData)


