// let x = 5
// if(x == 3){
//     console.log("hello")
// }
// else {
//     console.log("ay  7aga")
// }

// const log = console.log
// let age = 25
// is chalid => age between 0 7 , 7 18 teen. 18 40 adult, 40 60 man.  60 and above old
// if(age<0) console.log("invalid age format")
// else if(age<=7) log("child")
// else if(age<=18) log("teen")
// else if(age<=40) log("adult")
// else if(age<=60) log("man")
// else log("old")


// let userW= prompt("user 1 w")
// let userH= prompt("user 1 h")
// let bmi1 = userW / userH ** 2
// userW= prompt("user 2 w")
// userH= prompt("user 2 h")
// let bmi2 = userW / userH ** 2

// bmi1> bmi2 ? console.log("1>2"): log("2>1")

// const day = 19
// 1 => 7. sat=> fri
// switch(day){
//     case 1: log("sat");break
//     case 2: log("sun");break
//     case 3: log("mon");break
//     case 4: log("tue");break
//     case 5: log("thu");break
//     case 6: log("wed");break
//     case 7: log("fri");break
//     default: log("invalid day number")
// } 


// for while do while foreach for of for in

// for(let i = 0; i < 10; i+=2 ){
//     if(i == 6) break
//     log(i)
// }

//
// for(i=5;;i++){
//     if(i==10) break
// }
// let ch 
// while(ch!=0){
//all commands
//     ch = prompt("ch")
// }


// let inputNumber = +prompt("enter new number"), count =0, sum = 0
// while(inputNumber>0){
//     count++
//     sum += inputNumber
//     inputNumber =  +prompt("enter new number")
// }

// template string
// log(`number total = ${sum} and count is ${count} 
// average will be result of ${sum} / ${count} = ${sum/count}`)

// let inputNumber, count=0, sum=0
// do{
//     inputNumber =  +prompt("enter new number")
//     count++
//     sum += inputNumber
// }while(inputNumber>0)


// log(`number total = ${sum} and count is ${count} 
// average will be result of ${sum} / ${count} = ${sum/count}`)

// 58301
// %10 = 1  /10 5830
// 10385

// let num = 58301, newNum =0, result
// while(num>0){
//     result = num%10
//     num = parseInt(num/10)
//     newNum = newNum*10 + result //  1 , 10+8 = 18, 180+3 = 183, 1830+8=1838, 18380+5 = 18385
//     console.log(newNum)
// }

// console.log(this)
// function

// funName(5,3)

// function funName( x , y ){
//     console.log(x+y)
// }

// const myNewFun = function(a,b){
//     console.log(a,b)
// }

// myNewFun(2,5)
// arrow function
// const myArrow = (a,b) => {
//     log(a,b)
// }
// self invoke function
// (function(){
//     console.log("test")
// }())

// const add = (a,b) => {
//     return a+b
// }

// let res = add(2,3)
// console.log(res);

// const myFun = (a, b=1 ) =>{
//     console.log(a,b);
    
// }

// myFun(3, 8)

// Arrays
// let arr = [1, "a", false, 1.5, "test" , null, undefined]

// console.log(arr[0]);
// console.log(arr.length);
// for(let index = 0; index<arr.length; index++){
    //     console.log(arr[index])
    // }
const numbers = [1, 2, 3, 4, 5];
// let sum = 0
// for(let i=0; i<numbers.length; i++){
//     sum+=numbers[i]
// }

// numbers.forEach( (el, i, arr) =>{
//     console.log(`${i} => ${el} => ${arr}`);  
// })
// numbers.push("test")
// console.log(numbers);
// numbers.unshift("abc")
// console.log(numbers);
// numbers.shift()
// console.log(numbers)
// numbers.pop()
// console.log(numbers);
// let res = numbers.splice(1,2)
// console.log(res);
// console.log(numbers) 
// res = numbers.splice(1,2)
// console.log(res);
// console.log(numbers)
// let data = ["Marwa", "M", "Radwan"]
// let name = data.join(" ")
// console.log(name);
// console.log(data.indexOf("Marw"))
// const names = [
//   "Alice",
//   "Bob",
//   "Charlie",
//   "Diana",
//   "Ethan",
//   "Fiona",
//   "George",
//   "Hannah",
//   "Ian",
//   "Julia",
//   "Kevin",
//   "Laura",
//   "Mike",
//   "Nina",
//   "Oscar",
//   "Paula",
//   "Quentin",
//   "Rachel",
//   "Steve",
//   "Tina"
// ];


// let result = names.filter(name => { return name.includes("a")})
// console.log(result);


// object
// let user = {
//     name: "marwa",
//     age: 40
// }

// console.log(user.name);
const users = [
  { id: 1, name: "Alice Johnson", age: 28, email: "alice.johnson@example.com" },
  { id: 2, name: "Bob Smith", age: 34, email: "bob.smith@example.com" },
  { id: 3, name: "Charlie Davis", age: 22, email: "charlie.davis@example.com" },
  { id: 4, name: "Diana Lopez", age: 30, email: "diana.lopez@example.com" },
  { id: 5, name: "Ethan Brown", age: 25, email: "ethan.brown@example.com" },
  { id: 6, name: "Fiona Clark", age: 27, email: "fiona.clark@example.com" },
  { id: 7, name: "George Miller", age: 31, email: "george.miller@example.com" },
  { id: 8, name: "Hannah Wilson", age: 29, email: "hannah.wilson@example.com" },
  { id: 9, name: "Isaac Lee", age: 26, email: "isaac.lee@example.com" },
  { id: 10, name: "Julia Martinez", age: 33, email: "julia.martinez@example.com" }
];

let res = users.filter(user=>{
    return user.id > 8
})
console.log(res);
