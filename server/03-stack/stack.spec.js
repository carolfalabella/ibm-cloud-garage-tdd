const stackFactory = (capacity = 2) => {
  if (capacity < 1) throw new Error('invalid capacity')
    let stack = []
    return {
      isEmpty: () => stack.length === 0,
      size: () => stack.length,
      push: (item) => {
        if(capacity === stack.length) throw new Error('Stack overflow')
        stack.push(item)        
      },
      pop: () => {
        if(stack.length === 0) throw new Error('Stack underflow')
        return stack.pop()        
      }
    }
}

let stack;

describe('the stack canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a stack', () => {
  beforeEach(() => {
    stack = stackFactory()
  });
  it('starts empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });
  it('starts with stack size of 0', () => {
    expect(stack.size()).toBe(0)
  });
  it('is not empty when pushed', () => {
    stack.push(10)
    expect(stack.isEmpty()).toBe(false)
  });
  it('stack size is 1 when pushed', () => {
    stack.push(10)
    expect(stack.size()).toBe(1)
  });
  it('stack is empty when pushed and popped', () => {
    stack.push(10)
    stack.pop()
    expect(stack.isEmpty()).toBe(true);
  });
  it('stack size is 0 when pushed and popped', () => {
    stack.push(10)
    stack.pop()
    expect(stack.size()).toBe(0)
  });
  it('throws overflow error when pushing to a stack at full capacity', () => {
    stack.push(1)
    stack.push(2)
    expect(() => {
      stack.push(3)
    }).toThrowError("Stack overflow")
  });
  it('throw underflow error when popping an empty stack', () => {
    expect(() => {
      stack.pop()
    }).toThrowError("Stack underflow")
  });
  it('pops the same one item when pushed', () => {
    stack.push(1)
    const item = 100
    stack.push(item)
    expect(stack.pop()).toEqual(item)
  });
  it('accepts only a positive capacity', () => {    
    expect(() => {
      stack = stackFactory(-1)
    }).toThrowError("invalid capacity")
  });
});