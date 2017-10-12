function genericGetter<T>(data:T):T{
    return data;
}

console.log(genericGetter('Hello').length);
console.log(genericGetter<string>('Hello').length);

let genericFunction:<T>(d:T) => T = genericGetter;

console.log(genericFunction('Hello').length);


class Multiply<T extends number>{
    constructor(private a:T,private b:T){

    }
    public getResult():number{
        return +this.a*Number(this.b);
    }
}

const m = new Multiply(10,2);
console.log(m.getResult());
;


