// How to count numbers of charachters in a string
// function countChars(str) {
//     var count = 0;

//     for (let index = 0; index < str.length; index++) {
//         count++;
//     }
//     console.log(count);
//     return count;
// }

// countChars("interview")

// shift and unshift methods
/* var myList = ["this" , "is"];
console.log("~~~~~ This myList",myList);
myList.push("Awesome!")
console.log("~~~~~ This is for push",myList);

myList.unshift("Wow")
console.log("~~~~~ This is for unshift", myList);
myList.shift()
console.log("~~~~~ This is for shift", myList);
myList.pop();
console.log("~~~~~ This is for pop", myList);
 */
// myList.unshift()
// console.log(myList);

// how to find if array is unique or not unique

/* function isUnique(array) {
    let result = true;
    for (let index = 0; index < array.length; index++) {
        console.log(`~~~~~~~ Outer LOOP ~~~~~~ === ${index}`);

        for (let indexInner = 0; indexInner < array.length; indexInner++) {
            console.log(`~~~~~~~ INNER loop ~~~~~ === ${indexInner}`)
            if( index !== indexInner && array[index] === array[indexInner]){
                result = false;
            }
        }
    }
    return result
}

console.log(isUnique([1, 2, 2]));  */

// A better way to check the uniqueness

/* const isUnique = (array) => {
    const object = {}
    let result = true

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if ( object[element] ) {
            result = false;
        } else {
            object[element] = true
        }
    }

    result === true ? console.log(`Array is Unique`) : console.log(`Array is not Unique`);
    return result;
}

isUnique([1,2,3]) */

// Sorting an Array

/* const sortArray = (array) => {
    const sortedArray = array.sort((a,b) => a - b)
    console.log(sortedArray);
    return sortedArray
}

sortArray([9,6,5,4,7,8,8,9,6,3,2,5,7,]) */

// Sort an array and remove the duplicates

/* const removeDuplicates = (array) => {
  const memoryObject = {};
  const result = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (!memoryObject[element]) { //* Since object have key value pairs, what we do here is, we are not looking for 'key': 'value" paris, we do a lookup whether it has the value
      result.push(element);
      memoryObject[element] = true; //* here we are setting 'element : true' so when we check after words above, it'll be on memmory object as true
    }
  }
  sortedUniqueArray = result.sort((a, b) => a - b);
  console.log(`This is the unique sorted array ===  ${sortedUniqueArray}`);
  return sortedUniqueArray;
};

removeDuplicates([5, 6, 8, 9, 5, 6, 3, 2, 1]);
 */

// Implement linear search

/* function linearSearch(list, item) {
    let index = -1;
    list.forEach((listItem, currentIndex) => {
        if ( listItem === item){
            index = currentIndex;
        }
    });
    console.log(`90 is on ${index} index of the array`);
    return index;
}

linearSearch([2,10,25,90,103], 90)
 */

// binary search
/* 
function binarySearch(list, item) {
  var min = 0;
  var max = list.length - 1;
  var guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (list[guess] === item) {
      console.log(`The item you searched for is loacated inside ${guess} place of the list`);
      return guess;
    } else {
      if (list[guess] < item) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }

  return -1;
}

binarySearch([2, 6, 7, 90, 103], 90);

 */

// how to reverse a string

/* function reversTheString(string) {
  const reversedString = string.split("").reverse().join("")
  console.log(`Your resversed string is "${reversedString}"`);
  return reversedString
}

reversTheString("Hashan") */

// how to find the maximum character of a string

/* function findMaximumCharacter(string) {
  let obj = {}
  for (const character of string) {
    !obj[character] ? obj[character] = 1 : obj[character] ++;
  }
  console.log(`This is the object of string : ${JSON.stringify(obj)}`);
}
findMaximumCharacter("Hashan") */

/*
function uniqueSort(arr) {
  const x = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!x[arr[i]]) {
      result.push(arr[i]);
      x[arr[i]] = true;
    }
  }
  return result.sort((a, b) => a - b);
}
*/

/*
const isUnique = (arr) => {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    `~~~~ This is the ${i}th position first loop`;
    for (let j = 0; j < arr.length; j++) {
      `~~~~ This is the ${j}th position second loop`;
      if (i !== j && arr[i] === arr[j] ){
        result = false;
      }
    }
  }
  return result;
};

*/

/*
const isUnique = (arr) => {
  let result =  false

  const newObj = new Set(arr)
  if (newObj.size === arr.length){
    result = true
  }

  return result
}

console.log(isUnique([3,5,7]));
*/
/*
const calculation = (n) => {
  return n * 10;
}

const memoObj  = {}

const memoTimes10 = (n) => {
  let result;

  if (n in memoObj) {
    console.log('From memory objectn n = ', n)
    result = memoObj[n]
    return result
  }  else {
    console.log('Calculating the result inside the else loop')
    memoObj[n] = calculation(n)
    result = memoObj[n]
    return result
  }

}

console.log('Calculation func', calculation(9))
console.log('Memory func', memoTimes10(9))
console.log('Memory func', memoTimes10(9))
console.log('Memory func', memoTimes10(10))
*/

// closure
/*
const myAlert = () => {
  const x = "Hi! Iam practicing for the Interview!";
  let counter = 0;
  const alerter = () => {
    console.log(`${x} ${++counter}`);
  };
  return alerter;
};

const functionLog1 = myAlert();
console.log(functionLog1);
const functionLog2 = myAlert();
console.log(functionLog2);
functionLog1()
functionLog1()
functionLog1()
functionLog2()
functionLog2()

*/
/*
const memoClosureCalc = () => {
  const memoObj = {};
  const caclc = (n) => {
    if (n in memoObj) {
      console.log('From memory object', n)
      return memoObj[n];
    } else {
      console.log('Calculating the result');
      return (memoObj[n] = n * 10);
    }
  };

  return caclc;
};

console.log(memoClosureCalc());
const closureFunc = memoClosureCalc();
console.log(closureFunc(9))
console.log(closureFunc(9))
*/

/**
 * 
 * @param {*} m 
 * @returns 
 */
/*
const times10 = (m) => {
  return m * 10
}

const memoClosureAnything = (callBack) => {
  const memoObj = {};
  const caclc = (n) => {
    if (n in memoObj) {
      console.log("From memory object", n);
      return memoObj[n];
    } else {
      console.log("Calculating the result");
      return (memoObj[n] = callBack(n));
    }
  };

  return caclc;
};

const memoCalc = memoClosureAnything(times10)
console.log(memoCalc(9))
console.log(memoClosureAnything());
*/