// CHALLENGE 1
function createFunction() {
function Hello(){
  console.log('hello')
}
  return Hello;
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
function ShowInp(){
  console.log(input)
}
  return ShowInp;
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
 //willCounter();//1
 //willCounter();//2
 //willCounter();//3

 //jasCounter(); //  1
 //willCounter();// 4


function addByX(x) {
function addByInp(inp){
  //console.log (x+inp)
  return x+inp
}
  return addByInp;
}

// /*** Uncomment these to check your work! ***/
 const addByTwo = addByX(2);
 //addByTwo(1); // => should return 3
 //addByTwo(2); // => should return 4
 //addByTwo(3); // => should return 5

 //const addByThree = addByX(3);
 //addByThree(1); // => should return 4
 //addByThree(2); // => should return 5

 //const addByFour = addByX(4);
 //addByFour(4); // => should return 8
 //addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {

	function callCallback(valInp){
  	const val = func(valInp)
  	return val
	}
  return callCallback;
  
}

// /*** Uncomment these to check your work! ***/
 const onceFunc = once(addByTwo);

 //console.log(addByTwo);  
 //console.log(onceFunc);  // => should log 6

 //console.log(onceFunc(4));  // => should log 6
 //console.log(onceFunc(10));  // => should log 6
 //console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
	let called = 0;
  function calledNow(){
    called ++ ;
    if(called == count){
      return func();
    }
  }
  return calledNow;
}

// /*** Uncomment these to check your work! ***/
 //const called = function() { console.log('hello') };
 //const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
 //afterCalled(); // => nothing is printed
 //afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait) {
  function waitCall (){
		return setTimeout(func, wait)
  }
  return waitCall;
}

//const called = function() { console.log('hello') };
//const WaitCalled = delay(called, 3000);
//WaitCalled();

// CHALLENGE 7
function rollCall(names) {
  let count = 0;
  function callName(){
    
    if(count >= names.length){
      console.log('Everyone accounted for')
      return
    }
    console.log(names[count])
    count ++;
    
  }
  return callName;
}

// /*** Uncomment these to check your work! ***/
 //const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth', 'Narjiss'])
 //rollCaller() // => should log 'Victoria'
 //rollCaller() // => should log 'Juan'
 //rollCaller() // => should log 'Ruth'
 //rollCaller() // => should log 'Narjiss'
 //rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
  let passkey_output = {}
  let res = {}
  function createFunct(param){
 //console.log({paramNum:func(paramNum)})
    
    if(magicWord === param){

      return passkey_output;
    }
    // Object.assign(passkey_output, { [param] :func(param) })
    passkey_output = {...passkey_output,[param] :func(param)  }
    
    return func(param);
  }
	return createFunct;
}

// /*** Uncomment these to check your work! ***/
 //const multiplyBy2 = function(num) { return num * 2; };
 //const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
 //console.log(multBy2AndLog(2)); // => should log 4
 //console.log(multBy2AndLog(9)); // => should log 18
 //console.log(multBy2AndLog(4)); // => should log 8
 //console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
  let count = 0;
  function showArrayElm(){
    if (count == array.length){
      count = 0;
    }
    let res = array[count]
    count ++;
		return res;
    
  }
  return showArrayElm;
}

// /*** Uncomment these to check your work! ***/
 //const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
 //const getDay = cycleIterator(threeDayWeekend);
 //console.log(getDay()); // => should log 'Fri'
 //console.log(getDay()); // => should log 'Sat'
 //console.log(getDay()); // => should log 'Sun'
 //console.log(getDay()); // => should log 'Fri'



// CHALLENGE 10
function defineFirstArg(func, arg) {
  function createFunct(nbr){
    return func(arg,nbr)
  }
  return createFunct;
}

// /*** Uncomment these to check your work! ***/
 //const subtract = function(big, small) { return big - small; };
 //const subFrom20 = defineFirstArg(subtract, 20);
 //console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
  function createFunct(nbr){
    let currentDate = new Date().toDateString();
    return {date: currentDate, output: func(nbr)}
  }
  return createFunct;

}

// /*** Uncomment these to check your work! ***/
 //const stampedMultBy2 = dateStamp(n => n * 2);
 //console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
 //console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
  let twoStrings = {};
	function createFunc(str1, str2){
    if (str1 && str2){
      twoStrings = {...twoStrings, [str1]: str2 }
      return ;
    }
    
    let newSentence = str1;
    if (str1){
      let sentenceClean = str1.replace(/[^a-zA-Z ]/g, ''); // delete anything that's not letter
      	let sentence = sentenceClean.split(' ') // all words
        for (const word of sentence)
          //console.log(word)
          for(const elm in twoStrings ){
              //console.log(elm , word, twoStrings[elm])
            
            if (elm == word ){              
               newSentence = newSentence.replace(word, twoStrings[elm])
              //console.log(newSentence)
            }
    			}
    		}
    		return newSentence
    }
  return createFunc;
}

// /*** Uncomment these to check your work! ***/
 //const changeScene = censor();
 //changeScene('dogs', 'cats');
 //changeScene('quick', 'slow');
//console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {

 
  
  function getSecret(){
    return secret;
  }
  function setSecret(newSecret){
    secret = newSecret;
    return secret;
  }
  

  
}

// /*** Uncomment these to check your work! ***/
//obj = createSecretHolder(5)
 //obj.getSecret() // => returns 5
 //obj.setSecret(2)
// obj.getSecret() // => returns 2


// CHALLENGE 14
function callTimes() {
	let count = 0
  function createdFunc(){
    count ++
    console.log(count)
    return count
  }
  return createdFunc;
}

// /*** Uncomment these to check your work! ***/
 //let myNewFunc1 = callTimes();
 //let myNewFunc2 = callTimes();
 //myNewFunc1(); // => 1
 //myNewFunc1(); // => 2
 //myNewFunc2(); // => 1
// myNewFunc2(); // => 2


// CHALLENGE 15
function roulette(num) {
	function createdFunc(){
    num = num -1;
    if(num > 0)
    return 'spin'
    if(num == 0)
    return 'win'
    if(num < 0)
    return 'pick a number to play again'
  }
  return createdFunc;
}

// /*** Uncomment these to check your work! ***/
 //const play = roulette(3);
 //console.log(play()); // => should log 'spin'
 //console.log(play()); // => should log 'spin'
 //console.log(play()); // => should log 'win'
 //console.log(play()); // => should log 'pick a number to play again'
 //console.log(play()); // => should log 'pick a number to play again'


// CHALLENGE 16
function average() {

  let numbers = [];
  function createFunc(num){
     if(!num && numbers.length == 0) return 0;
    
    if(num){
      numbers.push(num)
    }
    
   let sum = numbers.reduce((a, b)=> a+b,0)
      let avr = (sum / numbers.length)
      return avr;
    
 
  } 
  return createFunc;
}

// /*** Uncomment these to check your work! ***/
 //const avgSoFar = average();
 //console.log(avgSoFar()); // => should log 0
 //console.log(avgSoFar(4)); // => should log 4
 //console.log(avgSoFar(8)); // => should log 6
 //console.log(avgSoFar()); // => should log 6
 //console.log(avgSoFar(12)); // => should log 8
 //console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  function createFunc(callback){
    let isSame = 0
    for(let tab of arrOfTests){
      let val1 = callback(tab[0])
      let val2 = callback(tab[1])
      console.log([val1, val2])
      if(val1 == val2){
        isSame ++
      }
    }
    if (isSame == arrOfTests.length) return true
  }
  return createFunc;
  
}

// /*** Uncomment these to check your work! ***/
 //const capLastTestCases = [];
 //capLastTestCases.push(['hello', 'hellO']);
 //capLastTestCases.push(['goodbye', 'goodbyE']);
 //capLastTestCases.push(['howdy', 'howdY']);
 //const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
 //const capLastAttempt1 = str => str.toUpperCase();
 //const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
 //console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false (for me it return true !)
 //console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {

  let strHistory = [];
  function createFunc(str){
    if(strHistory.length > limit)
      strHistory.shift()
    if(str == 'undo' ){
      if(strHistory.length == 0){
        return 'nothing to undo';
      }
      let lastElm = strHistory[strHistory.length -1];
      strHistory.pop();
    	return lastElm + ' undone'
    }
    strHistory.push(str)
    return str + ' done'
  }
  return createFunc;
}

// /*** Uncomment these to check your work! ***/
 //const myActions = makeHistory(2);
 //console.log(myActions('jump')); // => should log 'jump done'
 //console.log(myActions('undo')); // => should log 'jump undone'
 //console.log(myActions('walk')); // => should log 'walk done'
 //console.log(myActions('code')); // => should log 'code done'
 //console.log(myActions('pose')); // => should log 'pose done'
 //console.log(myActions('undo')); // => should log 'pose undone'
 //console.log(myActions('undo')); // => should log 'code undone'
 //console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(array) {
	let firstCall = true;
  let indicCurrectElmArray = 0
  let result = null;
  let isDone = false;
  
  function dealer(nbr1, nbr2){
    function player(){
    if (isDone){
      return ' you are done ! '
    }
    if(firstCall){
      result = nbr1 + nbr2
      firstCall = false
      return result
    }
    
    result = result + array[indicCurrectElmArray];
      if (result > 21 ){
      isDone = true
      return ' bust '
    }
      
    indicCurrectElmArray ++
    return result
    }
    
    return player;
  }
  return dealer;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
 const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
 const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
 console.log(i_like_to_live_dangerously()); // => should log 11
 console.log(i_like_to_live_dangerously()); // => should log 17
 console.log(i_like_to_live_dangerously()); // => should log 18
 console.log(i_like_to_live_dangerously()); // => should log 'bust'
 console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
 console.log(i_like_to_live_dangerously()); // => should log 'you are done!'


// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
 const i_TOO_like_to_live_dangerously = deal(2, 2);
 console.log(i_TOO_like_to_live_dangerously()); // => should log 4
 console.log(i_TOO_like_to_live_dangerously()); // => should log 15
 console.log(i_TOO_like_to_live_dangerously()); // => should log 19
 console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
 console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
 console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!



// Note By Narjiss : 
/*
What i have left in these challenges: 
-Challenge 4
-Challenge 13
-Chanllenge 17 (i should have finished it correctly, but the execution doesn't match the requirements!)
-Challenge 19 (i still have the Bonus part)
*/
