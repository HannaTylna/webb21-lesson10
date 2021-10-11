/* let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }};
    function sumSalaries(department) {
        if (Array.isArray(department)) {
            return department.reduce((prev, current) => prev + current.salary, 0);
        } else {
            let sum = 0;
            for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }
} 
console.log(sumSalaries(company)); */

/* let array = [
    "John",
    {
      type: "JS",
      age: 36
    },
    true,
    function () {
        console.log('Hello, I am John');
    }
];
console.log(array);
console.log(array[0]);
console.log(array[1].type);
console.log(array[2]);
array[3](); */

/* // Delete the item
let arr = [ 1, 2, 3, 4,];
arr.splice(1, 1);
console.log(arr);
//result [ 1, 3, 4 ]

//Delete the element and return it to the variable
let arr1 = [ 1, 2, 3, 4,];
let removed = arr1.splice(1, 1);
console.log(removed);
//result [2]

//Replace the element
let arr2 = [ 1, 2, 3, 4,];
arr2.splice(0, 1, 8);
console.log(arr2);
//result [ 8, 2, 3, 4 ]

//Add an element
let arr3 = [ 1, 2, 3, 4,]
arr3.splice(1, 0, 6, 7)
console.log(arr3)
// result [ 1, 6, 7, 2, 3, 4 ] */

let arr = [ 1, 2, 3, 4, 10, 15];
let sum = arr.reduce((prev, item) => {
    return item + prev
}, 0);
console.log(sum);
// result 35

