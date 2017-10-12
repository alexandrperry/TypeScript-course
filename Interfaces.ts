function getLength(variable:{length:number}):void{
    console.log(variable.length);
}


const box = {
    length: 20
};

getLength(box);


interface ILength{
    length:number;
    name?:string;
}

function getLength2(variable:ILength):void{
    console.log(variable.length);
}


getLength2(box);

interface ITest{

}

class User implements ILength,ITest{
    length:number;
    other:any;
}


