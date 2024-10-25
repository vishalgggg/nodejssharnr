console.log("hello world")
a=(b,c)=>b*c
console.log(a(12,3))
const student = {
    name:"vishal",
    age : 23,
    greet(){
        console.log("vishal")
    }
}
const student1 = {
    name:"vishal",
    age : 23,
    greet:function(){
        console.log("vishal")
    }
}
student1.greet()
let array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
// let m = array.map(function(s){
//     if(s.length == 0) s = 'empty string'
// })
// console.log(m)
let fruits = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];
let transformed = fruits.map(function(fruit) {
    return fruit === ' ' ? 'empty string' : fruit;
});
console.log(transformed); 
// Output: ['apple', 'oranges', 'empty string', 'mango', 'empty string', 'lemon']
