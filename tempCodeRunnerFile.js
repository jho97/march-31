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