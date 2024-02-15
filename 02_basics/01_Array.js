//array
//concat 


let arr1 = [1,2,3]
let arr2 = [4,5,6]

const arr3 = arr1.concat(arr2)
// console.log(arr3)


const arr4 = [...arr1,...arr2]

// console.log(arr4)



let nested = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_nested = nested.flat(Infinity)
// console.log(real_nested)



// console.log(Array.isArray("Bhadani"));
// console.log(Array.from("Bhadani"));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
