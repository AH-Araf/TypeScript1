// Function-----------------------------

// Normal Function
function add(n1 : number, n2 : number):number{
    return  n1+n2;
}
add(2,4);


// Arrow Function
const addArrow = (n1:number,n2:number): number => n1+n2;


// Method = object <- function thake
const poorUser = {
    name: 'Araf',
    balance:0,
    addBalance(balance:number):number{ //first number is receiving type, second one for return type
        return this.balance + balance;
    }
}
// Method = object <- function thake
const richUser = {
    name: 'Lebu',
    balance:100000,
    addBalance(balance:number):string{ //first number is receiving type, second string for return type
        return `My balance is: ${this.balance + balance}`;
    }
}


// map
let ID : number[] = [1,4,10]
const newID : number[] = ID.map ((element:number) : number => element*element) //square the every index value of array