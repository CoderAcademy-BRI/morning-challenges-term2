/*
In this task you are given a number
and have to make it negative. 
But maybe the number is already negative?

Test your solution:
mocha 07_return_negative.js
*/

function makeNegative() {
    // Your code here
}

var assert = require('assert');

describe('return negative', function() {
    it('Should return the positive or negative opposite number', function() {
        assert.equal(makeNegative(42), -42);
    })
})