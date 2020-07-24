#### Functioning of the Breadth First Finder ####

Introduction
------------
Breadth First Finder is an algorithm used to approximate the shortest path in tree or graph data structures. It starts at the tree root, and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.

Flow of Control
--------------
The algorithm visits and marks all the key nodes in a graph in a breadthwise fashion. Then it selects a single node (initial or source point) in the graph and stores all the nodes adjacent to the selected node, one by one.

Once the algorithm visits and marks the starting node, then it moves towards the nearest stored and unvisited nodes and analyses their neighbors. Once visited, all nodes are marked visited. These iterations continue until all the nodes of the graph have been successfully visited and marked, or if the destination gets visited.

Time Complexity
---------------
The finder works in O(|V|+|E|) time, where V is number of vertices and E is the number of edges.
It can also be expressed in this form - Suppose the branching factor of tree is b and distance of goal vertex from source is d, then the Breadth First Finder's searching complexity would be O(b^d).

Bi-directional Breadth First Finder
--------------------------------------
The finder alternates between the two queues of forward and backward direction; basically in every iteration it chooses the smaller queue for the next iteration for the processing which effectively helps in alternating between the two queues only when the swapping between the two queues is profitable.
The time complexity is O(b^{d/2}) for each search and total time complexity is O(b^{d/2}+b^{d/2}) which is far less than O(b^d), i.e., bi-directional finder is faster.
