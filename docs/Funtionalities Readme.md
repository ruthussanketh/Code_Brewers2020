#### High Level Working of the Functionalities ####

Closest Destination
-------------------
This algorithm finds the Destination Point closest to the Start Point amongst the Multiple Destination Points provided by the user.
It takes one Start point and one default End Point and the grid as input.
Then it finds all the other End Points defined by the user on the grid.
It then finds the path from Start Point to all the End Points available using the for loop which uses the specified finder to find the path. In the for loop itself, it compares the lengths and keeps on updating the minimum length value and the path corresponding to it.
In the end, it returns an array consisting of the nodes sequentially aligned which constitutes the minimum path from Start Point to the End Point which is closest to the Start Point.

Multiple Visitation Points
--------------------------
This algorithm finds the shortest path starting from the Start Point and consisting of all the Visitation Points, in which it can end the path at any Visitation Point.
This algorithm takes one Start Point and one default Visitation Point and the grid as input.
Then it finds all the other Visitation Points defined by the user on the grid.
This algorithm now finds the path lengths, using the specified finder, from Start Point to all the Visitation Points for all the n! methods of sequencing n Visitation Nodes. It does so using a for loop and keeps on updating the sequence till the sequence covering all Visitation Points having minimum path length is found.
In the end, it returns an array of sequentially aligned nodes that constitute the above path.

Multiple Stop Points
--------------------
This algorithm finds the shortest path from the Start Point to Destination Point consisting of many Stop Points.
This algorithm uses the Prims algorithm to find the path having minimum path length.
It takes one Start Point and one default End Point and the grid as input.
Then it finds all the Stop Points defined by the user on the grid.
It finds the Stop Point closest to the Start Point and saves this path in an array. Then it updates the Start Point to the closest Stop Point and recursively calls the algorithm for all the other Stop Points from the updated Start Point.
After finding the shortest path from Default Start Point which covers all the Stop Points, it then finds the path from the last updated Start Point to the Destination Point and attaches it with the rest of the path.
In the end, it returns an array of sequentially aligned nodes that constitute the above path.

The pathfinding algorithms used as finders in these three algorithms are A Star Finder and Breadth First Finder.
The A star algorithm used here is implemented using list data structure rather than heap.
