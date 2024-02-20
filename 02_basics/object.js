// const jsuser = {
//     name : "yash",
//     "full name": "yash",
//     mySym: "mykey1",
//     age:18,
//     location:"gujrat",
//     isLoggedin : false,
//     lastLoginDays : ["Monday","saturday"],


    
// }

// jsuser.greeting = function(){
//     console.log('hello js user');
// }
// jsuser.greeting1 = function(){
//     console.log(`hello js user ${this.name}`);
// }

// console.log(jsuser.greeting());

// console.log(jsuser.greeting1())

const obj1 = {1: "a", 2 : "b"}
const obj2= {3: "a", 4 : "b"}

//assign operator
// const obj3 = Object.assign({},obj1,obj2)


//spread operator
const obj3 = {...obj1,...obj2}
console.log(obj3);


//array object

const user = [ 
    {
        id:1,
        email: "yash@gmail.com"
    },
    {
        id:1,
        email: "yash@gmail.com"
    },
    {
        id:1,
        email: "yash@gmail.com"
    },
]
user[1].email

let tinderUser ={}
    tinderUser.id = "123abc"
    tinderUser.name = "yash"
    tinderUser.isLoggedin = false



// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) //array in array
// console.log(tinderUser.hasOwnProperty('isLoggedin')); //know a have key or not 

//destructor
const course = {
    coursenName : "js in hindi",
    price : "1000",
    courseInstructor : "yash"
}
const {courseInstructor : instructor} = course


console.log(instructor)