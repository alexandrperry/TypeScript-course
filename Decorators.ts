

function log(constr:Function){
    console.log(constr);
}

@log
class User{
    constructor(public name:string,public age:string){
        console.log('I am User');
    }
}


function show(constr:Function){
    constr.prototype.showHtml = function () {
        const pre = document.createElement('pre');
        pre.innerHTML = JSON.stringify(this);
        document.body.appendChild(pre);
    }
}

@show
class User2{
    constructor(public name:string,public age:number){

    }
}

let userVar = new User2('Alex',19);
console.log(userVar);

console.log((<any>userVar).showHtml());