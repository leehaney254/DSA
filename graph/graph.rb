# Create a class to store our graph
class Graph
  def initialize()
    @adjacencyList = {}
  end

  # Create a function to add a vertex
  def add_vertex(vertex)
    # Check it the vertex already exists, if not create it
    if !@adjacencyList[vertex]
      @adjacencyList[vertex] = []
    end
  end

  #Create a function to add an edge
  def add_edge(vertex1, vertex2)
    # If one of the vertex does not exist return undefined
    if !@adjacencyList[vertex1] || !@adjacencyList[vertex2]
      return nil
    end
    # Else we add them to the list
    @adjacencyList[vertex1] << vertex2
    @adjacencyList[vertex2] << vertex1
  end

  def remove_edge(vertex1, vertex2)
    # If one of the edges does not exist return
    return nil unless @adjacencyList[vertex1] && @adjacencyList[vertex2]
    #  Remove the vertices
    @adjacencyList_list[vertex1] = @adjacencyList_list[vertex1].reject { |v| v == vertex2}
    @adjacencyList_list[vertex2] = @adjacencyList_list[vertex2].reject { |v| v == vertex1}
    end
  end

  def remove_vertex(vertex)
    # return if the vertex does not exist
    return nil unless @adjacency_list[vertex]
    # get all the vertex linked to the vertex we want to remove
    array1 = @adjacency_list[vertex]
    # remove the vertex from the connected
    array1.each do |current_vertex|
      @adjacency_list[current_vertex] = @adjacency_list[current_vertex].reject { |v| v == vertex }
    end
    # delete the vertex
    @adjacency_list.delete(vertex)
  end

  def dfs_iterative(vertex)
    # stack is used to keep track of the vertex to be visited
    stack = []
    # Keeps track of already visited vertex
    visited = {}
    # values to return
    result = []
    # push the first vertex to your stack
    stack << vertex

    # loop while there are items in stack
    while !stack.empty?
      vertex = vertex.pop
      # Check if the current vertex has already been visited
      unless visited[vertex]
        # Add the vertex to the return array
        result << vertex
        # Mark the vertex as visited
        visited[vertex] = true
        # Get all the vertex connected to the current vertex
        array1 = @adjacency_list[vertex]

        array1.each do |current_vertex|
          stack << current_vertex
        end
      end
    end
    result
  end

  def prints
    puts @adjacencyList
  end
end

graph = Graph.new()
graph.add_vertex('A');
graph.add_vertex('B');
graph.add_vertex('C');
graph.add_vertex('D');
graph.add_vertex('E');
graph.add_vertex('F');

graph.add_edge('A', 'B');
graph.add_edge('A', 'C');
graph.add_edge('B', 'D');
graph.add_edge('C', 'E');
graph.add_edge('D', 'E');
graph.add_edge('D', 'F');
graph.add_edge('E', 'F');
graph.prints
