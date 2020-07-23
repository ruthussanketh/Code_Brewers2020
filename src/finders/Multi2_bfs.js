15: [
      function (t, e) {
        
        function r(t) {
          t = t || {
          },
          this.allowDiagonal = t.allowDiagonal,
          this.dontCrossCorners = t.dontCrossCorners
        }
        //var diag=t.allowDiagonal;
      var PL=10000000;
      var p=[];
      var util = t('../core/Util');
     // var nr=new r;

     r.prototype.findPath=function(t, e, r, n, grid) {
      var s,
      a,
      u,
      h,
      l,
      p = [
      ],
      c = this.allowDiagonal,
      f = this.dontCrossCorners,
      d = grid.getNodeAt(t, e),
      g = grid.getNodeAt(r, n);
      var stops=[];
      var l=1;
      
      //var e=grid.getNodeAt(endx,endy);
     // stops.push(grid.getNodeAt(r,n));
     // var min=10000000000;
      //var min_dest=grid.getNodeAt(endx,endy);
      
      for(var i=0;i<40;i++){

      for(var j=0;j<60;j++){
      if(grid.isNstopAt(j,i)==0){l++;stops.push(grid.getNodeAt(j,i));}
      }
      }
      var vis=new Map([[d,1]]);
     // alert(stops.length);
      var par =new Map([[d,-1]]);
      var final=[];
      
      var node=d;
      multi2=function(start,vis,stops){
        var prev=[];
      var pr=100000000;
      var node=start;
      for(var i=0;i<stops.length;i++){
        if(!(vis.has(stops[i])) || !(vis.get(stops[i]))){
        var x=bfs(start,stops[i],grid);
        if(x.length<pr){
          pr=x.length;
          prev=x;
          node=stops[i];
        }}
      }
      //alert(node.x);
      vis.set(node,1);
      
      return prev;}
      //var f=0;
      final.push(d);
      //alert(node.x);
      var x1=multi2(node,vis,stops);
      while(x1.length){
        //alert(1);
       
       for(var i=0;i<x1.length;i++)final.push(x1[i]);
       node=final[final.length-1];
       //vis.set(node,1);
       //alert(node.x);
       x1=multi2(node,vis,stops);
      }
      
      var ff=bfs(node,g,grid);
      //alert(node.x);
       for(var i=0;i<ff.length;i++){final.push(ff[i]);}
      
     // final.push(d);
     /* vis.set(node,1);
      //for(var i=0;i<prev.length;i++)final.push(prev[i]);
      for(var i=0;i<prev.length;i++)final.push(prev[i]);
      for(var i=0;i<stops.length;i++){
        if(!(vis.has(stops[i])) || !(vis.get(stops[i]))){
          vis.set(stops[i],1);
          //node=stops[i];
          //final.push(stops[i]);}
        var prev=[];
        var pr=10000000;
        for(var j=0;j<stops.length;j++){
          if(i!=j && (!(vis.has(stops[j])) || !(vis.get(stops[j])))){
            var x=bfs(stops[i],stops[j],grid);
            if(x.length<pr){
              
              //if(prev.length()>0 && final.length>0)final.pop();
              pr=x.length;
              prev=x;
              node=stops[j];
            }
          }

        
        }
        vis.set(node,1);
        for(var i=0;i<prev.length;i++)final.push(prev[i]);
      }}
      var x=bfs(node,g,grid);
      for(var i=0;i<x.length;i++)final.push(x[i]);
      //alert(final.length);
     // final.push(d);*/
      for(var i=0;i<final.length-1;i++){
        final[i].parent=final[i+1];
        alert(final[i].y);
      }
      alert(final[i].y);
      final[i].parent=0;
      return util.backtrace(final[0]);
        
      },
      
      
  bfs=  function(start,end,grid){
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
              //x.push(t);
              x.reverse();
              return x;
          }
          var ne=[];
         
          ne = grid.getNeighbors(t1,this.allowDiagonal,this.dontCrossCorners);
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
      
  },
  e.exports = r
},
  
      
        
      {
        '../core/Util': 6
      }
      
    ],
