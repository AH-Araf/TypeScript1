 {
// 
let  anything : any;

anything = 'Next level';
anything = 223;
// (anything as String).
// (anything as number).

const kgToGm = (value:string | number) : string | number | undefined =>{
    if(typeof value === 'string'){
        const convertValue = parseFloat(value)*1000;
        return `converted value is ${convertValue}`;
    }
    if(typeof value === 'number'){
        return value*1000;
    }
    const result1 = kgToGm(1000) as number
    const result2 = kgToGm("1000") as string
}


type CustomError = {
    message: string
}

try{

}catch(error){
    console.log((error as CustomError).message)
}

// 
 }