# Word Race
[word-race-bice.vercel.app](word-race-bice.vercel.app)

A word game designed to improve QWERTY typing rate and efficiency.

## Project Approach

1. Started off by doing a course on React and created the interface of the game.

2. Figured I would have to use Stack manipulation with the displayed words.
```
1. after every n seconds, add a word to the queue.
2. if queue is full, "Game over"
3. else: if front === userInput, dequeue() and (score++)
4. after a set time interval, multiplier +=1 && n/=2
```
3. Added on-screen feedback for the player to see what key they have pressed.

## To-do

- learn contexts in JS and implement stack manipulation
- Connect it to a database; save progress
- A leaderboard with top ten scores; stats
