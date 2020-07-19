function (t, e) {
        function r(t) {
          t = t || {
          },
          this.allowDiagonal = t.allowDiagonal,
          this.dontCrossCorners = t.dontCrossCorners
        }
        var i = t('../core/Util');
var bfs=t('./BreadthFirstFinder');
        r.prototype.findPath = function (startx,starty,endx,endy, grid) {
var stops=[]
stops.push(grid.getNodeAt(endx,endy));
var min=INT_MAX;
var min_dest;
start=grid.getNodeAt(startx,starty);
for(var i=0;i<60;i++){

for(var j=0;j<40;j++){
if(grid.isNstopAt(j,i)==0)stops.push(grid.getNodeAt(i,j));
}
}
for(var k=0;k<stops.length();k++){
if(min>bfs.findPath(start,stop[k]).length()){
min=bfs.findPath(start,stop[k]);
min_dest=stop[k];
}
}
return bfs.findPath(min_dest);
}
e.exports = r
      },
      {
        '../core/Util': 6
'./BreadthFirstFinder': 13
      }
