#### Functioning of the Prim's Finder ####

Introduction
------------
Prim’s Finder is a popular greedy algorithm used for finding the Minimum Spanning Tree (MST) of a given graph. To apply Prim’s algorithm, the given graph must be weighted, connected and undirected.

Flow of Control
---------------
The finder moves from the vertex connected to the edge with the least weight, to other edges connected to other vertices, with the least weight. This way, it covers all the vertices, through edges that have the least weight, giving us the least weighted total path to the target vertex.

Time Complexity
--------------
The worst case time complexity of Prim’s Finder is-
· O(ElogV) using a binary heap
· O(E + VlogV) using a Fibonacci heap
