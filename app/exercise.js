exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum : function(arr) {
    var sum = 0;

    for (var i = 0, len = arr.length; i < len; i++) {
      sum += arr[i];
    }

    return sum;
  },

  remove : function(arr, item) {
    var ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] !== item) {
        ret.push(arr[i]);
      }
    }

    return ret;
  },

  reverseString : function(str) {
    return str.split('').reverse().join('');
  },

  longestSubString : function(str) {
    var arr = str.split(' ');
    var longest = arr.reduce(function (a, b) { return a.length > b.length ? a : b; });
    return longest;
  },


  letterMoveForward : function(str) {
     var newStr = str.replace(/[a-zA-Z]/g, function(char) {
       switch (char) {
         case 'z': return 'a';
         case 'Z': return 'A';
         default: return String.fromCharCode(char.charCodeAt(0)+1);
       }
     });
     return newStr;
   },

  // letterMoveForward : function(str) {
//   var alphabet = "abcdefghijklmnopqrstuvwxyz";
//   var newStr = "";
//   var loc;
//
//   for (var i = 0; i < str.length; i++) {
//     loc = alphabet.indexOf(str[i]);
//     if (loc === 25) {
//       newStr = newStr + "a";
//     } else if (loc === -1) {
//       newStr = newStr + str[i];
//     } else {
//       newStr = newStr + alphabet[loc + 1];
//     }
//   }
//   return newStr;
// },

  capitalizeWords : function(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
};
