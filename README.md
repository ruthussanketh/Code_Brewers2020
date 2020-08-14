PathFinder.js - Team Code_Brewers, IIT Kharagpur
==============
#### The Mars Colonization Program to build a virtual pathfinder with Acehacker, in Microsoft Engage  2020 ####

Introduction
------------

The aim of this project is to build a pathfinder that finds the shortest path between two or multiple points and integrate it into finding and solving more complex problems that may be encountered by a Mars Rover on Mars.

To view an online demo of the execution of the pathfinders, download the repo, and then open the index.html file on your browser. The index.html file is located in the visual folder. This demo works on Microsoft Edge, Google Chrome, Firefox, and Safari.

[Online Demo](https://ruthussanketh.github.io/Code_Brewers2020/visual)

Solution Functionalities
------------------------
A Mars Rover is a rover whose ultimate aim is to be able to explore the surface of Mars autonomously. It's uses may be to collect data of the surface for Mars, such as photos, rocks, sand samples, etc., which may later be used in the colonization of the planet. We built this virtual pathfinder with the aim to use it in a rover to perform multiple functionalities -

1. Finding the shortest path between 2 points, using multiple parameters of distance estimation, and multiple algorithms to find such path. This could make the rover more functional and productive in lesser time. This is the ````standard```` button functionality in the algorithm panel in the online demo.

2. Finding the closest point at which data or samples can be found, thereby saving time, energy, and power, by calculating the distance to each of the points at which data is available and finding the closest point. This is the ````closest destination```` button in the functionality in the algorithm panel in the online demo.

3. Finding the least expensive path in terms of computational power as well as energy and resources, by finding the shortest path which can cover multiple data collection points, while finishing at any point. This is the ````multiple stop nodes```` button functionality in the algorithm panel in the online demo.

4. Finding the least expensive path, in terms of computational power as well as energy and resources, by finding the shortest path to cover multiple data collection points, and circuit back to the spacecraft's collection point, a.k.a, the end point. This is the ````multiple visitation nodes```` button functionality in the algorithm panel in the online demo.

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

Diagonal movement has also been implemented in all the algorithms and functionalities, wherein enabling the diagonal movement allows the path to go from one corner of a node to another, and shorter paths can be found, where the measure of length is the number of nodes crossed to reach the destination.

The algorithms implemented in the functionalities -
1. Breadth First Finder
2. A* Finder
3. Prim's Algorithm

Supporting Documents
--------------------
Supporting docs, including a high level diagram (HLD), a low level diagram (LLD), explanations of the states in the dynamic online interface, and control flow explanations of each of the algorithms and functionalities used above have been included in the ./docs folder. We have made use of existing libraries such as StateMachine.js to process various inputs and states and Raphael.js to create the SVG (scalable vector graphic) scenes programmatically.

Programming Languages Used  
--------------
1. Javascript
2. CSS
3. HTML

Future Possible Functionalities
-------------------------------
Possible functionalities which can be implemented -
1. Weighted points, where the weights stand for the safety of that position on Mars, For example, a crater, or a very hot area will have higher weight, as it is more dangerous for the rover to go over such terrain. An algorithm may then be implemented to optimize for the weighted path, leading to finding the safest path for the rover to follow.
2. Treasure points, where rich samples of sand, etc., can be found, but where the rover need not necessarily go. An algorithm can be implemented to maximize the rover's reward/treasure, while also minimizing the distance travelled, basically, an optimum path by varying 2 parameters.

Future Possible Algorithms
--------------------------
Possible algorithms which can be applied for the functionalities, which we are working on currently-
1. Floyd Warshall Finder

Medium Articles
---------------
To read an article on my entire experience with Microsoft Engage 2020, click [here](https://medium.com/@ruthussanketh/mars-colonisation-program-microsoft-bbf8981eae0d).
To read a more detailed article on this project, and the code flow, click [here](https://medium.com/@ruthussanketh/pathfinding-js-in-microsoft-engage-8d6256be3f16).

License
-------
Some of the visual code was used from an existing, free, and open repository, whose license has been included below.

[MIT License](http://www.opensource.org/licenses/mit-license.php)

&copy; 2019-2020 Ruthu S Sanketh &lt;ruthu.sankethi@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
