PathFinder.js - Team Code_Brewers, IIT Kharagpur
==============
#### The Mars Colonization Program to build a virtual pathfinder with Acehacker, in Microsoft Engage  2020 ####

Introduction
------------

The aim of this project is to build a pathfinder that finds the shortest path between two or multiple points and integrate it into finding and solving more complex problems that may be encountered by a Mars Rover on Mars.

To view an online demo of the execution of the pathfinders, download the repo, and then open the index.html file on your browser. The index.html file is located in the visual folder.

```
Online Demo - (https://ruthussanketh.github.io/Code_Brewers2020/visual)
```

Solution Functionalities
------------------------
A Mars Rover is a rover whose ultimate aim it to be able to explore the surface of Mars autonomously. It's uses may be to collect data of the surface for Mars, such as photos, rocks, sand samples, etc., which may later be used in the colonization of the planet. We built this virtual pathfinder with the aim to use it in a rover to perform multiple functionalities -

1. Finding the shortest path between 2 points, using multiple parameters of distance estimation, and multiple algorithms to find such path. This could make the rover more functional and productive in lesser time.

2. Finding the closest point at which data or samples can be found, thereby saving time, energy, and power, by calculating the distance to each of the points at which data is available and finding the closest point.

3. Finding the least expensive path in terms of computational power as well as energy and resources, by finding the shortest path which can cover multiple data collection points, while finishing at any point.

4. Finding the least expensive path, in terms of computational power as well as energy and resources, by finding the shortest path to cover multiple data collection points, and circuit back to the spacecraft's collection point, a.k.a, the end point.

Algorithms Applied
------------------
The algorithms which have been implemented to find the shortest path -
1. Breadth First Finder
2. A* Finder
3. Dijkstra Finder
4. Bi Breadth First Finder
5. Bi A* Finder
6. Bi Dijkstra Finder,

where the Bi prefix enables the algorithm to be much faster as it searches for an optimal path from both the start and the end points.

Diagonal movement has also been implemented in the algorithms, wherein enabling the diagonal movement allows the path to go from one corner of a node to another, and shorter paths can be found, where the measure of length is the number of nodes crossed to reach the destination.

The algorithms implemented to find closest destination -
1. Breadth First Finder
2. A* Finder

The algorithms implemented to find the least expensive path, while ending at any point -
1. Prim's Finder
2. Floyd Warshall's Finder
3. Brute Breadth First Finder
4. Brute A* Finder

The algorithms implemented to find the least expensive path with a definite end point -
1. Floyd Warshall's Finder
2. Brute Breadth First Finder
3. Brute A* Finder

Supporting Documents
--------------------
Supporting docs, including a high level diagram, a low level diagram, and control flow explanations of each of the algorithms used above been included in the ./docs folder.

Future Possible Functionalities
-------------------------------
Possible functionalities which can be implemented -
1. Weighted points, where the weights stand for the safety of that position on Mars, For example, a crater, or a very hot area will have higher weight, as it is more dangerous for the rover to go over such terrain. An algorithm may then be implemented to optimize for the weighted path, leading to finding the safest path for the rover to follow.
2. Treasure points, where rich samples of sand, etc., can be found, but where the rover need not necessarily go. An algorithm can be implemented to maximize the rover's reward/treasure, while also minimizing the distance travelled, basically, an optimum path by varying 2 parameters.

Some of the visual code was used from an existing, free, and open repository, whose license has been included below.

License
-------

[MIT License](http://www.opensource.org/licenses/mit-license.php)

&copy; 2019-2020 Ruthu S Sanketh &lt;ruthu.sankethi@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
