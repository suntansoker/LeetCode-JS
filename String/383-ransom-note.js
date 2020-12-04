/** 
 * Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.


Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let arr = magazine.split('');
  for(let i=0; i<ransomNote.length; i++){
      if(arr.indexOf(ransomNote[i]) === -1)
          return false;
      else
          arr.splice(arr.indexOf(ransomNote[i]),1);
  }
  return true;
};