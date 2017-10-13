

namespace Test{
    export function isEmpty(data:any){
        return !data;
    }

    export function isUndefined(value){
        return typeof value === 'undefined';
    }

    export const PI = Math.PI;
    export const EXP = Math.E;
}

const PI = 'pi';

console.log(Test.PI);
console.log(PI);