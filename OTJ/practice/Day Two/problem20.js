

function isPalindrome(str){
    let index = str.length - 1
    let findPalindrome = true
    for (let loops = 0; loops < str.length / 2; loops++) {
        if(str[loops] != str[index] && findPalindrome == true){ 
            console.log(`${str} is not a palindrome`);}
            findPalindrome = false
        index--;      
    }
    if (findPalindrome == false) {
          console.log(`${str} is a palindrome`);
    }
  
    
        
        
    };


isPalindrome("racecar")
isPalindrome("hello")