var util = require('../core/Util');
var heuristic = require('../core/Heuristic');
var DiagonalMovement = require('../core/DiagonalMovement');


function closest_destination_astar(opt) {
    opt = opt || {},
        this.allowDiagonal = opt.allowDiagonal,

        this.heuristic = opt.heuristic || heuristic.manhattan,
}

var heuristic = this.heuristic,
    diagonalMovement = this.allowDiagonal,
    abs = Math.abs,
    SQRT2 = Math.SQRT2;

function closest_destination_astar.prototype.findPath = function(startx, starty, endx, endy, grid) {
        var end = grid.getNodeAt(endx, endy);
        var stops = [];
        stops.push(end);
        for (var i = 0; i < 40; i++) {
            for (var j = 0; j < 60; j++) {
                if (grid.isNstopAt(j, i) == 0) {
                    stops.push(grid.getNodeAt(j, i));
                }
            }
        }

        var p;
        var final = [];

        var PL = 10000000;
        var node = end;

        for (var i = 0; i < stops.length; i++) {

            var a = (ast(startx, starty, stops[i].x, stops[i].y, s, this.allowDiagonal, this.heuristic));

            if (a.length < PL) {
                final = a;
                PL = a.length;
                node = stops[i];
            }
        }

        var e = [
            [final[0].x, final[0].y]
        ];

        for (var i = 1; i < final.length; i++) {
            e.push([final[i].x, final[i].y]);


        }

        return e;

        ast = function(startX, startY, endX, endY, grid, diag, heur) {
            var SQRT2 = Math.SQRT2;
            for (var x = 0; x < 40; x++) {
                for (var y = 0; y < 60; y++) {
                    grid.getNodeAt(y, x).f = 0;

                    grid.getNodeAt(y, x).h = 0;
                    grid.getNodeAt(y, x).g = 0;

                    grid.getNodeAt(y, x).parent = null;
                }
            }
            var start = grid.getNodeAt(startX, startY),
                var end = grid.getNodeAt(startX, startY);

            var openList = [];
            var closedList = [];
            openList.push(start);
            // alert(start.x);
            while (openList.length > 0) {

                // Grab the lowest f(x) to process next
                var lowInd = 0;
                for (var i = 0; i < openList.length; i++) {
                    if (openList[i].f < openList[lowInd].f) {
                        lowInd = i;
                    }
                }
                var currentNode = openList[lowInd];

                // End case -- result has been found, return the traced path
                if (currentNode === end) {
                    var curr = currentNode;
                    var ret = [];
                    while (curr.parent) {
                        ret.push(curr);
                        curr = curr.parent;
                    }
                    ret.push(curr);

                    return ret.reverse();
                }

                // Normal case -- move currentNode from open to closed, process each of its neighbors
                openList.splice(lowInd, 1);
                closedList.push(currentNode);
                var neighbors = grid.getNeighbors(currentNode, diag);

                for (var i = 0; i < neighbors.length; i++) {

                    var neighbor = neighbors[i];
                    if (closedList.findIndex(closedList => closedList === neighbor) != -1) {
                        // not a valid node to process, skip to next neighbor
                        continue;
                    }
                    var x = neighbor.x;
                    var y = neighbor.y;

                    // g score is the shortest distance from start to current node, we need to check if
                    //   the path we have arrived at this neighbor is the shortest one we have seen yet
                    //var gScore = currentNode.g + 1; // 1 is the distance from a node to it's neighbor
                    var gScore = currentNode.g + ((x - currentNode.x === 0 || y - currentNode.y === 0) ? 1 : SQRT2);
                    var gScoreIsBest = false;


                    if (openList.findIndex(openList => openList === neighbor) === -1) {
                        // This the the first time we have arrived at this node, it must be the best
                        // Also, we need to take the h (heuristic) score since we haven't done so yet

                        gScoreIsBest = true;
                        neighbor.h = heur(Math.abs(x - end.x), Math.abs(y - end.y));
                        openList.push(neighbor);
                    } else if (gScore < neighbor.g) {
                        // We have already seen the node, but last time it had a worse g (distance from start)
                        gScoreIsBest = true;
                    }

                    if (gScoreIsBest) {
                        // Found an optimal (so far) path to this node.   Store info on how we got here and
                        //  just how good it really is...
                        neighbor.parent = currentNode;
                        neighbor.g = gScore;
                        neighbor.f = neighbor.g + neighbor.h;


                    }
                }
            }

            // No result was found -- empty array signifies failure to find path
            return [];

        };


        module.exports = closest_destination_astar;
      
