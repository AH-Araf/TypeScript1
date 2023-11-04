{
    // generic type
    // generic array
    // generic object
    // generic tuple
    const rollNumbers : number [] = [3,5,7]
    const rollNumbers1 : Array<number> = [3,5,7]

    const mentors : string [] = ['a','b','c']
    const mentors1 : Array<string|number> = ['a','b','c',67]

    const bool : (boolean | number) [] = [true,false,true,true,6]

    type GenericArray = Array<number> //only useable for number
    const rollNumbers3 : GenericArray= [3,5,7]


    // we can make it generic and reuseable for every array by Types(T)
    type MainGenericArray<T> = Array<T> //reuseable
    const roll : MainGenericArray<number> = [1,2,3] //reused by number
    const name : MainGenericArray<string> = ['a','b'] //reused by string



    const user : MainGenericArray<{name: String, age: number}> = [
        {
            name: 'Araf',
            age: 23,
        },
        {
            name: 'Jhankar',
            age: 100,
        },
    ]

    const people : [string,string] = ["a","b"]

    type GenericTuple<X,Y> = [X,Y]
    const people1 : GenericTuple<string,string> = ["a","b"]

    const userDetails : GenericTuple<string,{name:string, phone:number}
    > = ["a",{name: "Araf", phone: 1312010261}]


}