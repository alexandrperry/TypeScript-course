enum MyHistory{
    born = 1997,
    age,
    job
}

const  myBorn:MyHistory = MyHistory.born;
console.log(myBorn);
const  age:MyHistory = MyHistory.age;
console.log(age);

function throwError(err):never{
    throw new Error(err);
}

let testVar;
testVar = null;

let myNum:number | null = 20;
myNum = null;