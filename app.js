// Variable types

/* 
1. string: These are alpha numeric characters in a single or double quote. the are used to hold items that names anything. productname, username, names, address, etc.

eg: 'charles', "Josiah and Sons nig LTD", 'kayode123',  '10'

2. Number: these are numeric characters without a single or double quote. They are used to store numbers
eg: 5, 8 , 112, 345, 124, etc

****************types of number*****************
    1. integer: This is a whole number.(ie: They donot have decimal points.). it is denoted with int
    2. float: These are decimal numbers.it is denoted with float

3. Boolean: it answers the question true or false.

4. Array: These is used to hold a list of items or data. the items are enclosed in a square bracket
eg: ["Charles", "Rice", 25, true]

5. object: they are used to store information about a data.it is created with a curly brace. multiple object is refered to as an array of object

    {
        name: "Camry",
        yearProduced: 2019,
        isReleased: false,

    }


    *************Declaring Variables*****************
    -keyword : var, let and const
    -variable name
    -assignment symbol
    -value(varaible type)

    let age = 99
    book shop => bookShop or book_shop  book-shop

*/
let age = 199
let school = "University of benin 001"
let isPayed = true

const Name = "Kayode"

// windows display properties
/*
    1. alert: it displays an information
    2. prompt: to take in users input
    3. confirm: to take a decision on an action

*/
// alert("I am going to school")
// alert(school)
// prompt('What is your Name?')
// confirm('Are you sure it is today?')
// alert(`My name is ${Name}, i am ${age} years old and i attend ${school}`)

// console
console.log("my name is Rat")



// operators
/*
1. plus +
2. substract
3. division /
4. multiply *
5. index(raise to power) **
6. modulus %


//  logical operators
1. greater than >
2.less than <
3. equal to == or ===
4. greater or equal to >=
5. less than or equal to <=
6.not !
7. not equal to != or !==
8. and &&
9. or ||



*/
// alert(6 > 10 )
// alert(6 == "6")
let a = 5
let b = 10
let c = 7
// let d = 52

// alert(6 === "6")
// alert(6 !== "6")

// alert((a < b))

// let grade = 67

// if (grade >= 50) {
//     console.log("intelligent student")
// } 
// else {
//     console.log("Big dullard")
// }

 let t = 10
 let y = 5
 let result = t % y

 console.log(result)


// functions
// let user= 'divine'

// console.log('welcome ${user}')

// function user(name){
//     return 'Welcome'
// }



// function num(a,b){
//     if (a%10 === b%10){
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(num(235,108))
// console.log(num(35,15))
// console.log(num(9,9))
// console.log(num(125,68))
// console.log(num(20,80))


function digit(dig){
    if (dig >= 40 && dig <= 70){
        return true
    }
    else{
        return false
    }
}
console.log(digit(50))
console.log(digit(5))
console.log(digit(37))
console.log(digit(84))
console.log(digit(62))


function checkNumbers(num1, num2){
    if ((num1 >= 35 && num1 <= 50 || num1 >= 60 && num1 <= 70) && (num2 >= 35 && num2 <= 50 || num2 >= 60 && num2 <= 70)){
        return true
    }
    else{
        return false
    }
}
console.log(checkNumbers(45,70))
console.log(checkNumbers(15,65))
console.log(checkNumbers(45,70))


function join(word){
    return word + "TCC"
}
console.log(join('Divine'))
console.log(join('Charles'))
console.log(join('Josiah'))



// String method

let hub ='Levelup'
// lenght: it is used to get the total number of characters in a string
console.log(hub.length)

// converting a string to uppercase
let word = "biscuit"
console.log(word.toUpperCase())


// converting a string to lowercase
let word1 = "bOOK"
console.log(word.toLowerCase())

//trim()
let aa = '        bo  ok    ' 
console.log(aa.trim()) 
console.log(aa.trimStart()) 
console.log(aa.trimEnd()) 

//replace()
let statement = 'Divine is a female'
console.log(statement.replace('Divine', 'Elizabeth'))

//concat
let d = 'divine'
let e = 'elizabeth'
console.log(d.concat(e, 'rat'))
console.log('female'.concat('rat'))

// Extracting characters from strings
let word5 = 'university of lagos'
console.log(word5.substring(3,10))
console.log(word5.substring(word5.length-1))

function extractword(name){
    let word1 = name.substring(0,3)
    let word2 = name.substring(14,17)
    return word1.concat(word2)
}
console.log(extractword('university of benin'))
console.log(extractword('university of uyo'))

// pad is use to add a character before a text or string
// padStart and padEnd
let word7 = 'book'
console.log(word7.padStart(5, '*'))
console.log(word7.padEnd(7, '*'))

// write a program to display phone numbers as 0814********

function hidenumber(phone){
    let  extphone = phone.substring(0,4)
    let result = extphone.padEnd(11, '*')
   return result
}
    console.log(hidenumber('081655376267386'))

// converting a string to an array (split method)
let word8 = 'biscuit'
console.log(word8.split(''))





// reverse method: to turn a string upside down but the string must have been splited first
console.log(word8.split('').reverse())

// join method: it joins characters in an array to become a string. it means it converts an array to a string

console.log(word8.split('').reverse().join(''))

let arr = ['rat', 'book', 'bad']
console.log(arr.join(''))

// getting characters of an array
 console.log(word8[5])
 console.log(word8.charCodeAt(2))




 // Event listeners

let num3 = document.getElementById('num3')
let num2 = document.getElementById('num2')
let display = document.getElementById('display')
// let btnCalculate = document.getElementById('btnCalculate')

// btnCalculate.addEventListener('click',()=>{
//     display.textContent =Number(num3.value) + Number(num2.value) 
// })

function help(text){
    text.forEach((element, index, arr) => {
        arr[index] = element +5
    });
    return text
}

console.log(help(['rat', 'book', 'bad']))