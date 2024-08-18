class stack{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return "No elements in the stack";
        }
        return this.items[this.items.length - 1];
    }
    isEmpty() {
       return  this.items.length === 0;
    }
    size() {
       return this.items.length;
    }
    printStack() {
        let stackStr = "";
        for (let i = 0;i < this.items.length; i++) {
        stackStr += this.items[i] + " ";
        }
        console.log(stackStr);
    }
}
const stack = new Stack();
console.log(stack.isEmpty());
stack.push(11);
stack.push(23);
stack.push(32);
stack.push(45);
stack.push(60);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());
stack.printStack();