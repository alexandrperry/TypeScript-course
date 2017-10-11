let obj: {name:string,age:number,fun :() => void,arr:number[]} = {
    name: 'Alex',
    age: 19,
    fun():void{

    },
    arr:[1]
};

type User = {name:string,age:number,fun :() => void,arr:number[],arr2?:string[]};

let obj2: User = {
    name: 'Alex',
    age: 19,
    fun():void{

    },
    arr:[1]
};


let obj3: User = {
    name: 'Alex',
    age: 19,
    fun():void{

    },
    arr:[1],
    arr2:['str']
};
