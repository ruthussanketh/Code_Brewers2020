#### Functioning of the Dijkstra Algorithm ####

Introduction
-----------
Dijkstra’s algorithm solves the single-source shortest-path problem on a weighted, directed graph G = (V, E) when all edge weights are non-negative. When the heuristic is zero for A* algorithm, it becomes Dijkstra. An SPT (shortest path tree) is generated with given source as root. Two sets are maintained, where one set contains vertices included in shortest path tree, and other set includes vertices not yet included in shortest path tree. At every step of the algorithm, a vertex which is in the set of vertices not yet included and has a minimum distance from the source is found.

Flow of Control
---------------
A shortest path tree set that keeps track of vertices included in shortest path tree, i.e., whose minimum distance from source has been calculated is created. Vertices which are not there in the shortest path tree set and have the minimum distance value are picked and added to the tree set.

The distance value of all adjacent vertices of these vertices are updated if the sum of distance value of these vertices from the source and the weight of the edge between the 2 adjacent vertices is less than the distance value of the adjacent vertices from the source. When all the vertices have been visited, the algorithm ends.

Time Complexity
--------------
The time complexity of the implementation is O(V^2). If the input graph is represented using an adjacency list, it can be reduced to O(E+VLogV) with the help of a binary heap (which we have made use of in our algorithm), where V is number of vertices and E is the number of edges.

Bi-directional Dijkstra’s Algorithm
-----------------------------------
Bi-directional search replaces single search graph(which is likely to grow exponentially) with two smaller sub graphs – one starting from initial vertex and other starting from goal vertex. The search terminates when two graphs intersect. Bi-directional search can be guided by a heuristic estimate of the remaining distance to the goal (in the forward tree) or from the start (in the backward tree).
