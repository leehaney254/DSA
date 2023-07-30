// You are given an integer array `nums`. You are initially
// positioned at the array's **first index**, and each element in
// the array represents your maximum jump length at that position. 
//*Return true if you can reach the last index, or false otherwise.*

// ********************Example 1:********************

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// The Problem

// You are on a game board with squares, and each square has a number on it.
// That number tells you the maximum number of squares you can move forward from that 
//square. Your goal is to determine if you can reach the end of the game board starting
// from the first square.

// Here's an example:

// [2, 3, 1, 1, 4]

// You start at the first square (the one with the number 2 on it). This means you can move
// either one or two squares forward.

// If you move one square forward, you'll be on the square with the number 3 on it. From here, 
//you can move one, two, or three squares forward.
// If you move two squares forward, you'll be on the square with the number 1 on it. From here, 
//you can only move one square forward.
// The question is: can you choose your moves in such a way that you end up on the last square 
//(the one with the number 4 on it)?

// if I have two as the first number 1 step forward or steps forward
// if I have 3 I can move 1, 2, or 3 steps forward
// but the goal is to find a way I can reach the last element

// Id use the two pointer method
// one pointing at the current number while the second pointer is the one that is moving
// create two loops with one checking the value of the current element and second looping 
// over the other elements
// if I reach the last element I retrun true otherwise I return false
// Example
//i
// [2, 3, 1, 1, 4]
//j
// You start at the first square (the one with the number 2 on it). This means you can move
// either one or two squares forward.
// bigO O(n^2)

var maxProfit = function (prices) {
  let minNo = prices[0];
  let minIndex = 0, profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minNo) {
      minNo = prices[i];
      minIndex = i;
    }
  }
  console.log(minNo, minIndex)
  for (let i = minIndex; i < prices.length; i++) {
    if (prices[i] - minNo > profit) profit = prices[i] - minNo;
  }

  return profit;
};

console.log(maxProfit([1, 2]))







