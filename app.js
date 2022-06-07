// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//Parameters 
//I need to make an array of sheeps some are missing.  Need a function to count in the array.  Need to account for bad values such as null and undefined
//Returns
//

function countSheeps(arrayOfSheep) {
  let counter = 0 
  for(let i = 0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i]) counter += 1 
  }
  return counter

  function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
  }
}