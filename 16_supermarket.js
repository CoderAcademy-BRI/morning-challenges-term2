/*
There is a queue for the self-checkout tills at the supermarket. 
Your task is write a function to calculate the total time required for 
all the customers to check out!

The function has two input variables:
    customers: an array of positive integers 
            representing the queue. Each integer represents a customer, 
            and its value is the amount of time they require to check out.
    n: a positive integer, the number of checkout tills.

The function should return an integer, the total time required.

Check your solutions with mocha 16_supermarket.js
*/

function queueTime(customers, n) {
    // Your code here
};

const assert = require('assert');

describe('queueTime', function() {
    it('Should return the correct queue time', function() {
        assert.equal(queueTime([1,2,3,4], 1), 10);
        assert.equal(queueTime([2,2,3,3,4,4], 2), 9);
    })
    it('Should return 0 if there are no customers', function() {
        assert.equal(queueTime([], 1), 0);
        assert.equal(queueTime([], 5), 0);
    })
    it('Should return the correct queue time if tills is greater than customers', function() {
        assert.equal(queueTime([1,2,3,4,5], 100), 5);
    })
})