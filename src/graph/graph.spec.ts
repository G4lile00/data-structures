import { SimpleGraph } from "./graph";

describe('Simple Graph', () => {
  it('should create a graph', () => {
    const graph = new SimpleGraph<number>();

    expect(graph).toBeDefined();
  });
  it('should add a node', () => {
    const graph = new SimpleGraph<number>();
    graph.addNode(1);

    expect(graph.nodes.get(1)).toEqual([]);
  });
  it('should add an edge', () => {
    const graph = new SimpleGraph<number>();
    graph.addNode(1);
    graph.addNode(2);
    graph.addEdge(1, 2);

    expect(graph.nodes.get(1)).toEqual([2]);
    expect(graph.nodes.get(2)).toEqual([1]);
  });
  it('should find a node', () => {
    const graph = new SimpleGraph<number>();
    graph.addNode(1);

    expect(graph.find(1)).toEqual([]);
  });
  it('should find a path using BFS', () => {
    const graph = new SimpleGraph<number>();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);
    graph.addNode(5);
    graph.addNode(6);
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);
    graph.addEdge(1, 5);
    graph.addEdge(2, 4);
    graph.addEdge(3, 5);
    graph.addEdge(4, 6);
    graph.addEdge(5, 6);

    expect(graph.findPathBFS(1, 6)).toEqual(new Set([1, 2, 3, 4, 5, 6]));
  });
  it('should find a path using DFS', () => {
    const graph = new SimpleGraph<number>();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);
    graph.addNode(5);
    graph.addNode(6);
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);
    graph.addEdge(1, 5);
    graph.addEdge(2, 4);
    graph.addEdge(3, 5);
    graph.addEdge(4, 6);
    graph.addEdge(5, 6);
    console.log(graph.findPathDFS(1,5));
    expect(graph.findPathDFS(1, 6)).toEqual(new Set([1, 2, 4, 6]));
  });
});
