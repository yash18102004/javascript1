const jsuser = {
    name : "yash",
    "full name": "yash",
    mySym: "mykey1",
    age:18,
    location:"gujrat",
    isLoggedin : false,
    lastLoginDays : ["Monday","saturday"],


    
}

jsuser.greeting = function(){
    console.log('hello js user');
}
jsuser.greeting1 = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsuser.greeting());

console.log(jsuser.greeting1())