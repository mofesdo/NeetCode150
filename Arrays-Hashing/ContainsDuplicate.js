/* Duplicate Integer
Solved 
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true
Example 2:

Input: nums = [1, 2, 3, 4]

Output: false
*/
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numSet = new Set();
        for(let i = 0; i < nums.length; i++){
            numSet.add(nums[i]);
        }
        return numSet.size != nums.length ? true:false;
    }
}