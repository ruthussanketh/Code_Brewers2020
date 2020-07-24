States and button labels/actions

before searching; no walls present - state B
- **Start Search** - to N
- **Pause Search** - button disabled (grayed out)
- **Draw Stops** - to St

before searching; all walls present - state W
- **Start Search** - to N
- **Pause Search** - button disabled (grayed out)
- **Clear Walls** - to B
- **Draw Stops** - to St

Clicking Draw Stop Button - to St

before searching; drawing stop positions rather than walls by clicking - state St
- **Start Search** - to N
- **Pause Search** - button disabled (grayed out)
- **Clear Walls** - to B

starting a new search - state N
This state clears any existing search progress and then immediately goes to state S.

during searching - state S
- **Restart Search** - to N
- **Pause Search** - to P
- **Clear Walls** - to B
- **Draw Stops** - button disabled (grayed out)

when search has finished - to F

search is paused - state P
- **Resume Search** - to S
- **Cancel Search** - to B
- **Clear Walls** - to B
- **Draw Stops** - button disabled (grayed out)

search has finished - state F
- **Restart Search** - to N
- **Clear Path** - to B
- **Clear Walls** - to B
- **Draw Stops** - button disabled (grayed out)

selecting a different algorithm or adding or deleting walls - to M

after search has finished and user has changed settings - state M
- **Start Search** - to N
- **Clear Path** - to B
- **Clear Walls** - to B
- **Draw Stops** - to St
