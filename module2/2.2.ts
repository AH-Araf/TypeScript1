{
    // interface diye type, array, function


    type UserA ={ //type alias //type alias to interface
        name: string;
        age: number;
    }
    type UserWithRole1 = UserA & {role: string}; //type UserA er sathe new object add kora jay using intersect

    const user1 : UserWithRole1 ={
        name: "Araf",
        age: 5467,
        role: "manager"
    }


    interface UserB {
        name: string;
        age: number;
    }
    interface UserWithRole2 extends UserB{ //extends use kore  interface er property barano jay
        role: string;
    }
    const user2 : UserWithRole2 ={
        name: "Araf",
        age: 5467,
        role: "manager"
    }


    type Roll = number[] 
    type RollA = [string, string, number]

    const rollNumberA : Roll = [1,4,8]
    const rollNumberB : RollA = ['dsf','sdf',8]

    interface Role2 {
        [index: number] : number //first number for index that are number, second one for index are holding number type of data
    }
    const rollNumberC : Role2 =[1,4,6,7]

    interface Name {
        [index: number] : string | number //first number for index that are number, second string for index are holding string type of data
    }
    const nameRules : Name =[65,'araf', 'taha','nuha', 656]

    type Add= (num1 : number, num2 : number) => number
    const add: Add = (num1, num2)=> num1+num2
    
    interface Add1{
        (num1 : number, num2 : number) : number
    }
    const add1: Add1 = (num1, num2)=> num1+num2


    // 
}