export class SimpleGraph<T> {
	public nodes = new Map<T, T[]>();
	addNode(value: T): void {
		this.nodes.set(value, []);
	}
	public addEdge(from: T, to: T): void {
		const fromNode = this.nodes.get(from);
		const toNode = this.nodes.get(to);
		if (!fromNode || !toNode) {
			throw new Error('Node not found');
		}
		fromNode.push(to);
		toNode.push(from);
	}
	public find(value: T): T[] | undefined {
		return this.nodes.get(value);
	}
	public findPathBFS(from: T, to: T): Set<T> {
		const queue = [from];
		const visited = new Set<T>();

		while (queue.length > 0) {
			const node = queue.shift();
			if (!node) throw new Error('Node not found');
			const neighbors = this.nodes.get(node);
			if (!neighbors) throw new Error('Node not found');
			for (const neighbor of neighbors) {
				if (neighbor === to) {
          visited.add(neighbor);
					return visited;
				}
				if (!visited.has(neighbor)) {
					queue.push(neighbor);
					visited.add(neighbor);
				}
			}
		}
		return visited;
	}
  public findPathDFS(from: T, to: T, visited = new Set<T>()): Set<T> {
    const neighbors = this.nodes.get(from);
    if (!neighbors) throw new Error('Node not found');
    visited.add(from);
    for (const neighbor of neighbors) {
      if (neighbor === to) {
        visited.add(neighbor);
        return visited;
      }
      if (!visited.has(neighbor)) {
        return this.findPathDFS(neighbor, to, visited);
      }
    }
    return visited;
  }
}
