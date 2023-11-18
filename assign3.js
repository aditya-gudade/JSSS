function reverseString() {
    const inputString = document.getElementById("reverseString").value; const reversedString = inputString.split("").reverse().join("");
    document.getElementById("reversedResult").textContent = `Reversed String:
    ${reversedString}`;
}

function replaceCharacters() {
    const inputString = document.getElementById("replaceString").value; 
    const replaceChar = document.getElementById("replaceChar").value;
    const replacementChar = document.getElementById("replacementChar").value;
    const replacedString = inputString.replace(new RegExp(replaceChar, 'g'), replacementChar);
    document.getElementById("replacedResult").textContent = `Replaced String:
    ${replacedString}`;
}

function checkPalindrome() {
    const inputString = document.getElementById("palindromeString").value;
    const cleanedString = inputString.toLowerCase(); 
    console.log(cleanedString);
    const reversedString = cleanedString.split("").reverse().join("");

    const palindromeResult = cleanedString === reversedString ? "The string is a palindrome."
        : "The string is not a palindrome."; document.getElementById("palindromeResult").textContent = palindromeResult;
}
