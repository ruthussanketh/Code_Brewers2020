	var util  = require('../core/Util');
	var DiagonalMovement = require('../core/DiagonalMovement');
        function closest_destination_bfs(t) {
          t = t || {
          },
          this.allowDiagonal = t.allowDiagonal,
          this.dontCrossCorners = t.dontCrossCorners
        }
        
        closest_destination_bfs.prototype.findPath = function (startx, starty, endx, endy, grid) {
          var openlist=[];
          var diagonalMovement = this.allowDiagonal,
         
          start= grid.getNodeAt(startx, starty),
          end = grid.getNodeAt(endx, endy);
          var stops=[]; //stops storing all destination points
         
          stops.push(end);
         
          for(var i=0;i<40;i++){

          for(var j=0;j<60;j++){
          if(grid.isNstopAt(j,i)==0){stops.push(grid.getNodeAt(j,i));}
          }
          }
	  openList.push(start);
	  start.opened=!0;
	  while (openList.length) {
		// take the front node from the queue
		node = openList.shift();
		node.closed = true;

		// reached the end position
		if (node === endNode) {
		    return Util.backtrace(endNode);
		}

		neighbors = grid.getNeighbors(node, diagonalMovement);
		for (i = 0, l = neighbors.length; i < l; ++i) {
		    neighbor = neighbors[i];

		    // skip this neighbor if it has been inspected before
		    if (neighbor.closed || neighbor.opened) {
			continue;
		    }

		    openList.push(neighbor);
		    neighbor.opened = true;
		    neighbor.parent = node;
		}
	    }
         
        module.exports = closest_destination_bfs;
      
      
    
