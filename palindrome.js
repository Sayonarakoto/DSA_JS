function ispalindrome(str) {
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

let str="madam";
ispalindrome(str) ?  console.log("Palindrome") : console.log("Not a Palindrome");