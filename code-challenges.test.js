// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
// a describe method that lists the name of the function OR naming of the particular test.
describe("shuffle", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(shuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
      expect(shuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
  })

//   create a function shuffle
//   function takes in array 
//   slice to remove the first value of the array
//   use math.random to randomize the array

 
  const shuffle = (array) => {
      return array.slice(0).sort(() => Math.random() - 0.5)
  }

// ● shuffle › takes in an array, removes the first item from the array and shuffles the remaining content
// ReferenceError: shuffle is not defined


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minMax", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("that takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
        const nums2 = [109, 5, 9, 67, 8, 24]
        // Expected output: [5, 109]
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(minMax(nums1)).toEqual(expect.arrayContaining([-8, 90]))
      expect(minMax(nums2)).toEqual(expect.arrayContaining([5, 109]))
    })
  })
     
//   ● minMax › that takes an array of numbers and returns an array of the minimum and maximum numbers in that order

//   ReferenceError: minMax is not defined

// create a function minMax
// set 2 new variables equal to the max and min with spread opperator
// return the 2 vars in an array

// b) Create the function that makes the test pass.
const minMax = (array) => {
  let minArr = Math.min(...array)
  let maxArr = Math.max(...array)
  return [minArr, maxArr]
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("noDuplicate", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("that takes an artakes in two arrays as arguments and returns one array with no duplicate valuesray of numbers and returns an array of the minimum and maximum numbers in that order", () => {

        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(noDuplicate(testArray1, testArray2)).toEqual(expect.arrayContaining([3, 7, 10, 5, 4, 8, 2, 1]))
    })
  })

//   ● noDuplicate › that takes an artakes in two arrays as arguments and returns one array with no duplicate valuesray of numbers and returns an array of the minimum and maximum numbers in that order

//   ReferenceError: noDuplicate is not defined


// b) Create the function that makes the test pass.
// create a function that takes in 2 arrays
// set a new array equal to both arrays
// use new set to remove duplicates 
// return the new array

const noDuplicate = (array1, array2) => {
    let newArr = [...new Set([...array1,...array2])]
    return newArr
}

// i tried without using new Set and still recieved a passing.
// i tested the code and looked over the notes but from my understanding the ... wont remove duplicates but still passed the test.

// const noDuplicate = (array1, array2) => {
//     let newArr = [...array1,...array2]
//     return newArr
// }



