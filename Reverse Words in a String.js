// https://leetcode.com/problems/reverse-words-in-a-string-iii/
const reverseWords = function(s) {
    return s.split(' ').map( word => word.split('').reverse().join('')).join(' ');
};
reverseWords("Let's take LeetCode contest");