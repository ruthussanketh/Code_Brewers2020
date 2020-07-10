# Diagonal Movement
To disable diagonal movement you need to configure the finder. The finder takes
a configuration object with an option called `diagonalMovement`. Setting this
option to `DiagonalMovement.Never` will disable diagonal movement completely.
Let us try it.

```javascript
var finder = new PF.AStarFinder({
    diagonalMovement: PF.DiagonalMovement.Never
});
```

The `diagonalMovement` option can take any of the following values:

* Always
* Never
* IfAtMostOneObstacle
* OnlyWhenNoObstacles

To understand them consider the following four simple maps labelled A, B, C and
D. A has no obstacles for diagonal movement from green to orange cell, B and C
have one obstacle and D has two obstacles.

## Always
With this option PathFinding.js will always find a diagonal path, irrespective
of the obstacles when moving diagonally.

## Never
With this option PathFinding.js will only find straight paths and will never
find any diagonal paths.

## IfAtMostOneObstacle
With this option PathFinding.js will find diagonal paths only if there is at
most one obstacle for the diagonal path.


## OnlyWhenNoObstacles
With this option PathFinding.js will find diagonal paths only if there are no
obstacles for the diagonal path.
