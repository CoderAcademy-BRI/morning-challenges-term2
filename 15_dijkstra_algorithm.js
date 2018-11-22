/*
Strongly recommend to attempt this in pairs or groups.

Using const problem write a method which will get from point A to point F
in the shortest possible route. 

Test your solution: mocha 15_dijkstra_algorithm.js

Hints:
If you are having trouble making a start try drawing
a layout of the diagram and thinking about how you could move around
the object.

Using Google will also help a lot for coming up with ideas.
*/

const problem = {
  A: {B: 2, C: 7},
  B: {D: 1, E: 8},
  C: {B: 3, E: 12},
  D: {E: 4, F: 9},
  E: {F: 4},
  F: {}
};

const dijkstra = (graph, start, end) => {
  // Your code here
};


var assert = require('assert');

describe('Find shortest path', () => {
  it('Should return the total length of the shortest distance', () => {
    assert.deepEqual({ distance: 11, path: [ 'A', 'B', 'D', 'E', 'F' ] }, dijkstra(problem, 'A', 'F'));
    assert.deepEqual({ distance: 9, path: [ 'B', 'D', 'E', 'F' ] }, dijkstra(problem, 'B', 'F'));
  });
  it('Should return infinity if the distance cannot be completed', () => {
    assert.deepEqual({ distance: Infinity, path: [] }, dijkstra(problem, 'B', 'A'));
  });
  it('Should return the letter in the path if it stays at the same letter', () => {
    assert.deepEqual({ distance: 0, path: ['B'] }, dijkstra(problem, 'B', 'B'));
  });
});
