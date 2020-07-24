
        var util  = require('../core/Util');
        var DiagonalMovement = require('../core/DiagonalMovement');
        function multiple_visitation_bfs(opt) {
          opt = opt || {
          },
          this.allowDiagonal = opt.allowDiagonal
          
        }
        
      var PL=10000000;
      var p=[];
    
     
     multiple_visitation_bfs.prototype.findPath=function(startx,starty,endx,endy, grid) {

      diagonalMovement = this.allowDiagonal,
      start = grid.getNodeAt(startx,starty),
      end = grid.getNodeAt(endx,endy);
      var stops=[];
     
      for(var i=0;i<40;i++){

      for(var j=0;j<60;j++){
      if(grid.isNstopAt(j,i)==0){stops.push(grid.getNodeAt(j,i));}
      }
      }
      var vis=new Map([[start,1]]); //visited map
     
      var par =new Map([[start,-1]]);//parent map
      var final=[];
      
      var node=start;
      multi2=function(start,vis,stops,grid,diag){ //greedy function choosing the nearest node from start node
       var prev=[];
      var pr=100000000;
      var node=start;
      for(var i=0;i<stops.length;i++){
        if(!(vis.has(stops[i])) || !(vis.get(stops[i]))){
        var x=bfs(start,stops[i],grid,diag);
        if(x.length<pr){
          pr=x.length;
          prev=x;
          node=stops[i];
        }}
      }
  
      vis.set(node,1);
      
      return prev;}
     
      final.push(start);
      var x1=multi2(node,vis,stops,grid,this.allowDiagonal);
      while(x1.length){

       for(var i=0;i<x1.length-1;i++){final.push(x1[i]);}
       final.push(x1[i]);
       node=final[final.length-1];
      
       x1=multi2(node,vis,stops,grid,this.allowDiagonal);
      }
      
      var ff=bfs(node,end,grid,this.allowDiagonal);
  
       for(var i=0;i<ff.length;i++){final.push(ff[i]);}
     
     var e = [
      [final[0].x,
      final[0].y]
    ]; 
    
    for(var i=1;i<final.length;i++){
        e.push([final[i].x,final[i].y]);
       
        
    }
    
    return e;
     
        
      },
      
      
  bfs=  function(start,end,grid,diag){//function for finding the min path b/w start and end nodes
      var x=[];
      var vi=new Map([[start,1]]);//visited map
      var parent=new Map([]);//parent map
      var queue=[];
      queue.push(start);
      while(queue.length){
          var t1=queue.shift();
          if(t1==end){

              //storing the shoretst path in an array
              while(t1!=start){
                  x.push(t1);
                  t1=parent.get(t1);
                  
              }
              
              x.reverse();
              return x;
          }
          var ne=[];
         
          ne = grid.getNeighbors(t1,diag);
          for (var i = 0;i<ne.length; ++i) {
              neighbor = ne[i];

              // skip this neighbor if it has been inspected before
              if (vi.has(neighbor)) {
                  continue;
              }

              queue.push(neighbor);
              vi.set(neighbor,1);
              parent.set(neighbor,t1);
            
          }
      
      }
      
  };
  module.exports = multiple_visitation_bfs;

