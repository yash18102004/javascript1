// function addTwoNumber(Number1,Number2){

//     console.log(Number1+Number2)
// }

// addTwoNumber(3,"4")

//+++++++++++++++++++++++++++++++

// function addTwoNumber(Number1,Number2){

//   // let result = Number1 + Number2
//   // return result


//   return Number1+Number2
// }

// const result  =  addTwoNumber(3,4)


// console.log("result:",result);

function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter a username")
    return
  }

  return `${username} just logged in`
}



function calculateCartPrice(val1, val2, ...num1) {
  return num1
}

// console.log(calculateCartPrice(200,300,400,2000))

//funcion in object
const user = {
  username: "yash",
  District: "Amreli"
}

function handleObject(anyObject) {
  console.log(`My name is ${anyObject.username} from ${anyObject.District} `)
}
// handleObject(user)
// handleObject(
//   {
//     username: "yash",
//     District: "Amreli"
//   }
// )

//array in object 

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200,440,550,800,6666,]))