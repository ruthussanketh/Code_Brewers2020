	var util       = require('../core/Util');
        function closest_destination_bfs(t) {
          t = t || {
          },
          this.allowDiagonal = t.allowDiagonal,
          this.dontCrossCorners = t.dontCrossCorners
        }
        
        closest_destination_bfs.prototype.findPath = function (startx, starty, endx, endy, grid) {
          var p=[];
          var c = this.allowDiagonal,
          f = this.dontCrossCorners,
          start= grid.getNodeAt(startx, starty),
          end = grid.getNodeAt(endx, endy);
          var stops=[]; //stops storing all destination points
         
          
          stops.push(end);
         
          
          for(var i=0;i<40;i++){

          for(var j=0;j<60;j++){
          if(grid.isNstopAt(j,i)==0){stops.push(grid.getNodeAt(j,i));}
          }
          }
          for (p.push(start), start.opened = !0; p.length; ) {
            if (u = p.shift(), u.closed = !0) {
              for(var k=0;k<stops.length;k++){
                
                if(u===stops[k]){return util.backtrace(u);}}//return array having min path length from the start node
              }
              
            for (s = grid.getNeighbors(u, c, f), h = 0, l = s.length; l > h; ++h) a = s[h],
            a.closed || a.opened || (p.push(a), a.opened = !0, a.parent = u)//getting neighbours and stored the closed and opened values
          }
          return [];
        };
        module.exports = closest_destination_bfs;
      
      
    
