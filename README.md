PathFinder.js - Team Code Brewers, IIT Kharagpur
==============
#### The Mars Colonization Program to build a pathfinder with Acehacker, in Engage  2020 ####

Introduction
------------

The aim of this project is to build a pathfinder that finds the shortest path between two or multiple points and integrate it into finding and solving more complex problems that may be encountered by a Mars Rover on Mars.

To view an online demo of the execution of the pathfinders, download the repo, and then open the index.html file on your browser. The index.html file is located in the visual folder.

online demo - (https://ruthussanketh.github.io/Code_Brewers2020/visual)

Server
------

If you want to use it in Node.js, you may install it via `npm`.

```bash
npm install pathfinding
```

Then, in your program:

```javascript
var PF = require('pathfinding');
```

See the `Basic Usage` section below for usage details.


Browser
-------

If you have bower installed then you can install it with the following command:

```bash
bower install pathfinding
```

By default bower will install pathfinding under the bower_components folder, so to include it in your page do something like:

```html
<script type="text/javascript" src="path/to/bower_components/pathfinding/pathfinding-browser.min.js"></script>
```

Basic Usage
-----------

To build a grid-map of width 6 and height 4:

```javascript
var grid = new PF.Grid(6, 4);
```
By default, all the nodes in the grid will be able to be walked through.
To set whether a node at a given coordinate is walkable or not, use the `setWalkableAt` method.

For example, to set the node at (0, 1) to be un-walkable, where 0 is the x coordinate (from left to right), and
1 is the y coordinate (from up to down):

```javascript
grid.setWalkableAt(0, 1, false);
```

You may also pass in a matrix while instantiating the `PF.Grid` class.
It will initiate all the nodes in the grid with the same walkability indicated by the matrix.
0 for walkable while 1 for blocked.

```javascript
var matrix = [
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0],
];
var grid = new PF.Grid(matrix);
```

Currently there are 3 path-finders bundled in this library, along with their bi-directional counterparts, namely:

*  `AStarFinder`
*  `BreadthFirstFinder`
*  `DijkstraFinder`
*  `BiAStarFinder`
*  `BiBreadthFirstFinder`
*  `BiDijkstraFinder`

-> A* finder is guaranteed to find the shortest path since the heuristic used is admissible, i.e, we use the Manhattan heuristic.
-> Dijkstra finder is guaranteed to find the shortest path since the edge costs are positive.
-> Breadth First Finder is guaranteed to find the shortest path since the nodes are unweighted.

To build a path-finder, say, the `AStarFinder`:

```javascript
var finder = new PF.AStarFinder();
```

To find a path from (1, 2) to (4, 2), (Note: both the start point and end point should be walkable):

```javascript
var path = finder.findPath(1, 2, 4, 2, grid);
```

`path` will be an array of coordinates including both the start and end positions.

For the `matrix` defined previously, the `path` will be:

```javascript
[ [ 1, 2 ], [ 1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 3, 2 ], [ 4, 2 ] ]
```

Be aware that `grid` will be modified in each path-finding, and will not be usable afterwards. If you want to use a single grid multiple times, create a clone for it before calling `findPath`.

```javascript
var gridBackup = grid.clone();
```

Advanced Usage
--------------

When instantiating path-finders, you may pass in additional parameters to indicate which specific strategies to use.

For all path-finders, you may indicate whether diagonal movement is allowed. The default value is `false`, which means that the path can only go orthogonally.

In order to enable diagonal movement:

```javascript
var finder = new PF.AStarFinder({
    allowDiagonal: true
});
```

You can also choose which heuristic function to use, from two heuristics - Manhattan, or Euclidean. Take a look at the ./core/Heuristic file to get a hang of what these heuristics do.

To use the Manhattan heuristic:

```javascript
var finder = new PF.AStarFinder({
    heuristic: PF.Heuristic.manhattan
});
```

To build a `BreadthFirstFinder` with diagonal movement allowed and a custom heuristic function:

```javascript
var finder = new PF.BestFirstFinder({
    allowDiagonal: true,
    heuristic: function(dx, dy) {
        return Math.min(dx, dy);
    }
});
```

To smoothen the path, you may use `PF.Util.smoothenPath`. This routine will return
a new path with the original one unmodified.

```javascript
var newPath = PF.Util.smoothenPath(grid, path);
```

Note that the new path will be compressed as well, i.e. if the original path is
`[[0, 1], [0, 2], [0, 3], [0, 4]]`, then the new path will be `[[0, 1], [0, 4]]`.

To just compress a path without smoothing it, you may use `PF.Util.compressPath`.

```javascript
var newPath = PF.Util.compressPath(path);
```

To expand the compressed path like `[[0, 1], [0, 4]]` back to `[[0, 1], [0, 2], [0, 3], [0, 4]]`,
you may use `PF.Util.expandPath`.

```javascript
var newPath = PF.Util.expandPath(path);
```

Development
------------

Layout:

    .
    |-- benchmark    # benchmarks
    |-- docs         # user guides
    |-- src          # source code (algorithms)
    |-- test         # test scripts	  
    |-- visual       # visualization

Make sure you have `node.js` installed, then use `npm` to install the dependencies:

    npm install -d

The build system uses gulp, so make sure you have it installed:

    npm install -d -g gulp

To build the browser distribution:

    gulp compile

To run the tests
(algorithms only, not including the visualization) with
[mocha](http://mochajs.org/) and [should.js](https://github.com/visionmedia/should.js)
First install mocha:

    npm install -d -g mocha

Then run the tests:

    gulp test

To run the benchmarks:

    gulp bench

Or if you want to automate everything xD, the default gulp task does everything(except running the benchmarks):

    gulp

License
-------

[MIT License](http://www.opensource.org/licenses/mit-license.php)

&copy; 2019-2020 Ruthu S Sanketh &lt;ruthu.sankethi@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
