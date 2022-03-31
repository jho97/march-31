// Write your code below
const isPalindrom  = (str) => {
    let newStr = str.length
     for (let i = 0; i < newStr / 2; i++) {
         if (str[i] !== str[newStr - 1 - i]) {
             return false
            }
        }
        return true
    }
    console.log(isPalindrom('kayak'))
    
    var a = "AmanaplancanalPanama"
    console.log(a.length)
    
// function palindrome(s) {
//     var reverseString = s.split("").reverse().join("");
//     if(s==reverseString)
//        console.log("palindrome");
//     else
//        console.log("not palindrome");
//  }
//  palindrome("Pop");


//  function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return false;
//       }
//     }
//     return true;
//    }
// console.log(palindrome("A man, a plan, a canal. Panama"))
