let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())

// let myCreateDate = new Date (2023,0,23,3,4)
let myCreateDate = new Date ("2023-03-14")
// console.log(myCreateDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getMilliseconds())

newDate.toLocaleString('default',{
    weekday:"long",
  
})