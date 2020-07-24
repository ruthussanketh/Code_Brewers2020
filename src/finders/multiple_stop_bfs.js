       var DiagonalMovement = require('../core/DiagonalMovement');
       var util  = require('../core/Util'); 
        function multiple_stop_bfs(t) {
          t = t || {
          },
          this.allowDiagonal = t.allowDiagonal
          
        }
     
      var PL=10000000;
      var p=[];



     multiple_stop_bfs.prototype.findPath=function(startx, starty, endx, endy, grid) {//t=startx,e=starty,r=endx,o=endy
      
      var start = grid.getNodeAt(startx,starty),
      end = grid.getNodeAt(endx, endy);
      var stops=[];
      var l=1;
      stops.push(end);
      for(var i=0;i<40;i++){

      for(var j=0;j<60;j++){
      if(grid.isNstopAt(j,i)==0){l++;stops.push(grid.getNodeAt(j,i));}
      }
      }
      var vis=new Map([[start,1]]);
   
      var par =new Map([[start,-1]]);
      var x=algo(start,stops,grid,vis,par,this.allowDiagonal);//final array e storing shortest path
 
      var e = [ [x[0].x,x[0].y]; 
      
      for(var i=1;i<x.length;i++){
          e.push([x[i].x,x[i].y]);
         
          
      }
      
      return e;
      
    }
    
  
 

  
    bfs3=  function(start,end,grid,diag){ //finding shortest path b/w start and end nodes
      var x=[];
        var vi=new Map([[start,1]]);
        var parent=new Map([]);
        var queue=[];
        queue.push(start);
        while(queue.length){
            var t1=queue.shift();
            if(t1==end){

                while(t1!=start){
                    x.push(t1);
                    t1=parent.get(t1);
                
                }
                
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
        
    }
    algo=function (start,dest,grid,vis,par,diag){ //recursive function for brute force
      var f=0;
      

      for(var i=0;i<dest.length;i++){
        
          if(!(vis.has(dest[i])) || !(vis.get(dest[i]))){
              f=1;
              vis.set(dest[i],1);
              par.set(dest[i],start);
              
              var a=algo(dest[i],dest,grid,vis,par,diag);

              if(a.length<PL){
                  p=a;
                  PL=p.length;
              }
              vis.set(dest[i],0);
              par.set(dest[i],-1);
          }
      }
      if(f==0){
          var x=[];
          
          
          while(par.get(start)!=-1){
          
              var x1=bfs3(par.get(start),start,grid,diag); //calling bfs3 for calculating shortest path b/w 2 nodes
              for(var i=0;i<x1.length;i++)x.push(x1[i]);
              start=par.get(start);
              x.push(start);
          }
        
          return x;
          
      }
      else return p;
  };
  module.exports = multiple_stop_bfs;

