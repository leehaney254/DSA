class Queue
  def initialize
    @queue = []
    @front = -1
    @rear = -1
  end

  def is_empty?
    return 'Empty' if @queue.empty?

    false
  end

  def enqueue(value)
    @front += 1 if @queue.empty?

    @rear += 1
    @queue.push(value)
  end

  def dequeue
    if @queue.empty?
      @rear = -1
      @front = -1
    end
    @queue.shift
    @rear -= 1
  end

  def peek
    @queue[@front]
  end
end

new_queue = Queue.new
puts new_queue.is_empty?
new_queue.enqueue(1)
puts new_queue.peek
new_queue.enqueue(2)
new_queue.enqueue(3)
new_queue.enqueue(4)
new_queue.enqueue(5)
new_queue.dequeue
puts new_queue.peek
new_queue.dequeue
puts new_queue.peek
new_queue.dequeue
puts new_queue.peek
new_queue.dequeue
puts new_queue.peek
new_queue.dequeue
puts new_queue.peek
