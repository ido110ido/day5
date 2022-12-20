
//EX1
//Write a JavaScript function to print (console.log()) the “Hello World” message
function printHello(){
    console.log("hello world");
}

//Write a function that returns the square of a number
function square(num){
    return num * num;
}

//Write a function to convert Celsius to Fahrenheit and return the conversion
function CelsiusToFahrenheit(degrees){
    return degrees* 9 / 5 + 32;
}

//Write a function to print a random number. Check out Math.random()
function randomNum(){
    return Math.random();
}

/*
Write a function named tellFortune that:
1. takes 4 arguments: number of children, partner's name, geographic location, job title.
2. Alert your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
3. Call that function 3 times with 3 different values for the arguments.
 */
function tellFortune(numOfChildren,partnerName,geoLocation,jobTitle){
    alert(`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numOfChildren} kids.`);
}

tellFortune(2,'amit','hadera','cleaner');
tellFortune(7,'amit','hadera','cleaner');
tellFortune(5,'amit','hadera','cleaner');

/*
Write a function that takes in a 7 digits number and returns
 the number as a string with commas as thousand separators. 
 For example, the number 1234567 should be returned as "1,234,567"
 */
function addingCommas(num){
    if(num > 10000000 ){
        return "too long"
    }
    else if(num < 1000000){
        return'too short'
    }
    let lestTripleNum = num%1000;
    let middleTripleNum =Math.trunc((num/1000)%1000);
    let firstNums = Math.trunc(num/1000000);
    return `${firstNums},${middleTripleNum},${lestTripleNum}`
}
console.log(addingCommas(1234567))

/*
Write a function that takes in a string and returns a
new string with the first letter of each word capitalized.
 For example, the string "hello, world!" should be returned as "Hello, World!".
*/
function toUpper(words){
    let splitWords = words.split(' ');
    for (let i = 0; i< splitWords.length; i++){
        splitWords[i] = splitWords[i].charAt(0).toUpperCase() + splitWords[i].substring(1)
    }
    return splitWords.join(' ');
}

/*Write a function that takes in a string and returns the string with
 all vowels removed. For example, the string "Hello, World!" 
 should be returned as "Hll, Wrd!".
 */
function removedVowels(text){
    if(typeof text != String){
        return "erro"
    }
    return text.replace(/[aeiou]/gi, '');
}

/*Write a function that takes in a number and returns the number rounded
 to the nearest integer. For example, the number 4.6 should be returned as 5,
  and the number 4.4 should be returned as 4. (check out Math methods and properties)*/
function rounded(num){
    return Math.round(num);
}


/*
Save the hostname of the current URL as a variable (check location.hostname)  
Alert the sentence: “Hello, your hostname is _(your variable)_ . Welcome!”
*/
function hostname(){
    alert(`Hello, your hostname is ${location.hostname}. Welcome!`)
}
