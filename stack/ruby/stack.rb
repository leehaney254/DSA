class Stack
  def initialize
    @stack = []
    @top = -1
  end

  def add_element(item)
    @top += 1
    @stack << item
  end

  def check_if_empty
    @stack.empty?
  end

  def remove_element
    return 'Empty' if check_if_empty == true

    @top -= 1
    @stack.pop
  end

  def peek
    @stack[@top]
  end
end

new_stack = Stack.new
puts new_stack.peek
new_stack.add_element(5)
puts new_stack.peek
new_stack.remove_element
puts new_stack.peek
