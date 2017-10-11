class User {
    private admin:boolean;
    protected age:number = 19;
    public name:string;

    constructor(name:string,public skills:string ){
        this.name = name;
    }

    public getAge():number{
        return this.age;
    }

    public setTitle(title:boolean){
        console.log(this.admin);
        this.admin = title;
        console.log(this.admin);
    }
}

const Alex = new User('Alex','TS');
console.log(Alex);
Alex.setTitle(false);







