#### Functioning of the A* Algorithm ####

Introduction
------------
A* is an algorithm used to approximate the shortest path in real-life situations, like in maps and games where there can be many hindrances or obstacles. We consider a 2D Grid having several obstacles and we start from a source cell to reach towards a goal cell. At each step, it picks the node with the least value-‘f’, and processes that node.

````
 f(n)  = g(n)  +  h(n)
````
where,                           	
n = the previous node on the path,
f(n) = total estimated cost of path through node n,
g(n) = the cost of the path from the start node to n,
h(n) = a heuristic that estimates the cost of the cheapest path from n to the target node.

Flow of Control
---------------
A* algorithm begins at the start node, and considers all adjacent cells. Once the list of adjacent cells has been populated, it filters out those which are inaccessible (walls, obstacles, out of bounds). It then picks the cell with the lowest cost, which is the estimated f(n). This process is recursively repeated until the shortest path has been found to the target node.

Heuristics
----------

Manhattan and Chebyshev heuristics have been used for this algorithm. These are the standard heuristics for a grid, and are both admissible, which means that they don't overestimate the cost to reach the goal . Manhattan is the default heuristic, except when diagonal movement has been enabled, in which case it becomes inadmissible. Then we use the Chebyshev heuristic.

Dijkstra Algorithm
--------
If h(n) = 0, A* becomes Dijkstra's algorithm, which is guaranteed to find the shortest path, as h(n) = 0 is admissible.

Time Complexity
---------------
the A* search algorithm has the worse case time complexity of O(E), where E is the number of edges in the graph.

Bi-directional A* Algorithm
------------------------
It runs two simultaneous searches: one forward from the initial state, and one backward from the goal, stopping when the two searches meet at a node. This makes the search faster and more efficient.
