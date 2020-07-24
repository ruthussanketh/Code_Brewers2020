        
	var util       = require('../core/Util');
	var heuristic  = require('../core/Heuristic');
	
	function  multiple_stop_astar(t) {
          t = t || {
          },
          this.allowDiagonal = t.allowDiagonal,
         
          this.heuristic = t.heuristic || o.manhattan,
          this.weight = t.weight || 1
        }
       
  
       var A= this.heuristic,
       k = this.allowDiagonal,
     
       v = this.weight,
       w = Math.abs,
       x = Math.SQRT2;
       var p=[];
         var PL=10000000;
        multiple_stop_astar.prototype.findPath = function (t, e, r, o, grid) {  //t=startx,e=starty,r=endx,o=endy
         var d=grid.getNodeAt(t,e);
        var b=grid.getNodeAt(r,o);
         var stops=[];
         stops.push(b);
         for(var i=0;i<40;i++){
           for(var j=0;j<60;j++){
             if(grid.isNstopAt(j,i)==0){stops.push(grid.getNodeAt(j,i));}
           }
         }
         
         var vis=new Map([[d,1]]);
         
     
          var par =new Map([[d,-1]]);
          var final=algo_ast(d,stops,grid,vis,par,this.allowDiagonal,this.heuristic);
      
     
     var e = [
      [final[0].x,
      final[0].y]
    ]; 
    
    for(var i=1;i<final.length;i++){
        e.push([final[i].x,final[i].y]);
       
        
    }
    
    return e;
  },
         
         
        ast2 = function (t, e, r, o, grid,diag,heur) {//t=startx,e=starty,r=endx,o=endy,diag=this.allowDiagonal,heur=this.heuristic
          var SQRT2=Math.SQRT2;
          for(var x =0 ; x < 40; x++) {
            for(var y = 0; y < 60; y++) {
              grid.getNodeAt(y,x).f=0;
             
              grid.getNodeAt(y,x).h=0;
              grid.getNodeAt(y,x).g=0;
             
              grid.getNodeAt(y,x).parent = null;
            }  
          }
          var a,
         
          start = grid.getNodeAt(t, e),
          end = grid.getNodeAt(r, o);

          var openList   = [];
        var closedList = [];
        openList.push(start);

        while(openList.length > 0) {
    
          // Grab the lowest f(x) to process next
          var lowInd = 0;
          for(var i=0; i<openList.length; i++) {
            if(openList[i].f < openList[lowInd].f) { lowInd = i; }
          }
          var currentNode = openList[lowInd];
          //alert(currentNode.x);
          // End case -- result has been found, return the traced path
          if(currentNode===end) {
            var curr = currentNode;
            var ret = [];
            while(curr.parent) {
              ret.push(curr);
              curr = curr.parent;
            }
            ret.push(curr);
            
            return ret;
          }
    
          // Normal case -- move currentNode from open to closed, process each of its neighbors
          openList.splice(lowInd,1);
          closedList.push(currentNode);
          var neighbors = grid.getNeighbors( currentNode,diag);
    
          for(var i=0; i<neighbors.length;i++) {
           
            var neighbor = neighbors[i];
            if(closedList.findIndex(closedList => closedList === neighbor)!=-1) {
              // not a valid node to process, skip to next neighbor
              continue;
            }
            var x = neighbor.x;
            var y = neighbor.y;
            
            // g score is the shortest distance from start to current node, we need to check if
            //   the path we have arrived at this neighbor is the shortest one we have seen yet
            //var gScore = currentNode.g + 1; // 1 is the distance from a node to it's neighbor
            var gScore =  currentNode.g + ((x -  currentNode.x === 0 || y -  currentNode.y === 0) ? 1 : SQRT2);
            var gScoreIsBest = false;
    
    
            if(openList.findIndex(openList => openList === neighbor)===-1) {
              // This the the first time we have arrived at this node, it must be the best
              // Also, we need to take the h (heuristic) score since we haven't done so yet
    
              gScoreIsBest = true;
              neighbor.h = heur(Math.abs(x-end.x),Math.abs(y-end.y));
              openList.push(neighbor);
            }
            else if(gScore < neighbor.g) {
              // We have already seen the node, but last time it had a worse g (distance from start)
              gScoreIsBest = true;
            }
    
            if(gScoreIsBest) {
              // Found an optimal (so far) path to this node.   Store info on how we got here and
              //  just how good it really is...
              neighbor.parent = currentNode;
              neighbor.g = gScore;
              neighbor.f = neighbor.g + neighbor.h;
           
              //neighbor.debug = "F: " + neighbor.f + "<br />G: " + neighbor.g + "<br />H: " + neighbor.h;
            }
          }
        }
    
        // No result was found -- empty array signifies failure to find path
        return [];
              
        },
        
        algo_ast=function (start,dest,grid,vis,par,diag,heur){
          var f=0;
          
       
          for(var i=0;i<dest.length;i++){
             
              if(!(vis.has(dest[i])) || !(vis.get(dest[i]))){
                  f=1;
                  vis.set(dest[i],1);
                  par.set(dest[i],start);
                
                  var a=algo_ast(dest[i],dest,grid,vis,par,diag,heur);
    
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
               
                  var x1=ast2(par.get(start).x,par.get(start).y,start.x,start.y,grid,diag,heur);
                  for(var i=0;i<x1.length;i++)x.push(x1[i]);
                  start=par.get(start);
                  x.push(start);
              }
            
              return x;
              
          }
          else return p;
      },
        
      
      
        
        module.exports = multiple_stop_astar;      
