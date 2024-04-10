//let duplicateValue = [1, 3, 3, 55, 6, 8, 7, 7, 6, 99, 87, 67];

// 1-Duplicate Value
//================================================
// function removeDuplicateFun(arr){
//     return [... new Set(arr)];

// }

// console.log(removeDuplicateFun(duplicateValue))
//2...................................................................
// let removeDuplicate=duplicateValue.filter((value,index,self)=>{
//     return self.indexOf(value)===index
// })
//3.................................................................
// let removedupli=[];
// duplicateValue.forEach((value,index)=>{
//     if(!removedupli.includes(value)){
//         removedupli.push(value)
//     }
// })

// console.log(removedupli)
//---------------------------------------------------
//2-problem Reverse() Method
//============================================================

//let str ='Welcome to india';

// let result=str.split(' ').reverse().join(' ')
// //india to Welcome
// //without space jion and split aidni ot emocleW
// console.log(result)

// function reverseFun(pStr){
//     let reverValue=''

//     for(let i=pStr.length-1;i>=0;i--){
//         reverValue +=pStr[i]
//     }

//     return reverValue

// }

// console.log(reverseFun(str))
//................................................................

// let arr = ["apple", "banana", "orange", "grape"];

// let result= arr.join(' ').split(' ').reverse()
// out put:-(4) ['grape', 'orange', 'banana', 'apple']

// let result =arr.map((word)=>(word.split('').reverse().join("")))
// out put:-(4) ['elppa', 'ananab', 'egnaro', 'eparg']

// console.log(result)

//l-----------------------------------------------------------
// 3-Largest word
//===============================================================
//let str = "Hello Murali Developer Testnyyyyyyyyddd WelcomeToMurali";

// let words = str.split(" ");
// console.log(words);

// let reducerMethod = words.reduce(
//   (acc, cur) => {
//     if (cur.length > acc.maxLength) {
//       return { words: [cur], maxLength: cur.length };
//     } else if (cur.length === acc.length) {
//       acc.words.push(cur);
//     }
//       return acc;

//   },
//   { words: [], maxLength: 0 }
// ).words;

// console.log(reducerMethod);
//-------------------------------------------------------------------
//4-Find Second Largest Number:-
//=====================================================
//let arr = [2, 5, 8, 9, 34, 45, 7, 9, 23,566,78];
// let sortArrayValue=arr.sort((a,b)=>b-a);

// console.log(sortArrayValue[0]);
//------------------------------------------------------------
//5-COunt Vowels
//====================================================
// function countVowels(str) {

//     const vowelPattern = /[aeiou]/gi;

//     const vowels = str.match(vowelPattern);
//     return vowels ? vowels.length : 0;
// }

// let inputString = "Hello World laaaooooo";
// let vowelCount = countVowels(inputString);

// console.log("Number of vowels found:", vowelCount);
//......................................................

// function countVower(str){

// let vowels=['a','e','i','o','u'];
// let count=0;

// for(let char of str.toLowerCase()){
//     if(vowels.includes(char)){
//         count++
//     }

// }

// return count

// }

// console.log(countVower("banana"));
//------------------------------------------------------------

//6-Find Array length
//=====================================================================
//let arr = ["apple", "banana", "orange", "grape","pinApple"];

// let largestWord='';
// let maxlargestWordLength=0;

// for(let i=0;i< arr.length;i++ ){
//     if(arr[i]>maxlargestWordLength){
//         maxlargestWordLength=arr[i].length;
//         largestWord=arr[i]

//     }
// }

// console.log(largestWord)
//..................................................................
// let reduceMethod=arr.reduce((prevWord,currentWord)=>{
//     return(prevWord.length>currentWord.length)?prevWord:currentWord
// });
// console.log(reduceMethod);
//-----------------------------------------------------------------------

//7-Pillindrom method
//=====================================================================

// function pillindromFun(str){

//     let reverseValue= str.split('').reverse().join('')
//     return str===reverseValue

// }
// console.log(pillindromFun('madam'));
//-----------------------------------------------------------

//8-Anagrams
//======================================================================
// function anagramsFun(str1,str2){
//     let word1=str1.split("").sort().join('');
//     let word2=str2.split("").sort().join('');
//     return word1===word2

// }
// console.log(anagramsFun("listen","silent"));
//------------------------------------------------------------
//9-How to find primeNumber
//PrimeNumber
//=====================================================

// function isPrimeNumber(number) {
//   if (number === 1) {
//     return false;
//   }
//   for (let i = 2; i <= number / 2; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//     return true;
//   }
// }

// console.log(isPrimeNumber(11));
//----------------------------------------------------------
//10-FlattenArray
//==================================================
// let arr = [3, 4, 5, [6, 7, 8], 9, [23, 24], 90];

// function flattenArray(arrValue){
//     let result= arrValue.reduce((acc,curr)=>{
//         return Array.isArray(curr)?acc.concat(flattenArray(curr)):acc.concat(curr);
//     },[])

//     return  result
// }

// console.log(flattenArray(arr));
//....................................................................
// let arr = [3, 4, 5, [6, 7, 8], 9, [23, 24], 290,78];

// let result=arr.flatMap((item)=>Array.isArray(item)?item:[item])

// console.log(result);
//--------------------------------------------------------------------------------------
// 11-Find Factorial
//=====================================================================================


// function factorial(number2) {
// if(typeof number2==='number'){
//     if(number2===1 ||number2===0){
//         return 1
//     }else{
//         return number2*factorial(number2-1)
//     }

// }else{
//     return "Enter the Number"
// }
// }

// console.log(factorial(0));
// console.log(x);
// var x=20
// function fun(){

//     // var x=21
// }
// 
//=====================================================
let view;

function likeVideo() {
    let count = 0;
    return function () {

        if (count > 0) {
            console.log("this already call");


        } else {
            view = "yes";
            console.log(view)
            count++
        }
    }

}
let callFunc=likeVideo();
callFunc();
callFunc();
callFunc();

