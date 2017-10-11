
class MyUser {
    private admin: boolean;
    protected age: number = 19;
    public name: string;

    constructor(name: string, public skills: string) {
        this.name = name;
    }
}

const user = new MyUser('Alex','js');

class OtherUser extends MyUser{
    name:string = 'VIP';

    constructor(skills:string){
        super('VIP','TS');
        this.age = 100;
    }
}

const user2 = new OtherUser('TS');
console.log(user2);





abstract class City{
    name:string;
    people:number = 100000;

    abstract info(info:string):void;

    getPeople():number{
        return this.people;
    }
}


class Kiev extends City{
    info(info:string):void{
        console.log(info);
    }
}

const kiev = new Kiev()
console.log(kiev);
