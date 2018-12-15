
let num = [1, 2, 3];
let numArray = [100, 200, 300];


num.forEach((number) => {
    console.log(number);
});


let myCustomForEach = (arr, customFunction) => {

    arr.forEach((number) => {
        customFunction(number);
    });
}


let excutingFunction = (number) => {
    console.log(number);
}

myCustomForEach(numArray, excutingFunction);

myCustomForEach(numArray, (number) => {
    console.log("Hello from anonymous = " + number);
});

let colors = ['red', 'blue', 'green'];
Array.prototype.myForEach = (fun) => {

    for (let i = 0; i < this.length; i++) {
        fun(this[i]);
    }
}


colors.myForEach(console.log);