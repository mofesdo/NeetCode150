/* Is Palindrome
Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true
Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

Example 2:

Input: s = "tab a cat"

Output: false
Explanation: "tabacat" is not a palindrome.

Constraints:

1 <= s.length <= 1000
s is made up of only printable ASCII characters.
*/
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //First make the string all lowercase and only letters.
        s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        console.log(s);
        //split string in half and check if front and back match
        for(let i = 0; i < s.length/2; i++){
            if(s[i] != s[s.length-1-i]){
                console.log(s[i]);
                console.log(s[s.length-1-i]);
                return false;
            }
        }
        return true;
    }
}
