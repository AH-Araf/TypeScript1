{//Nullable type
//Unknown type
//never


    //Nullable type
    const searchName = (value: string | null)=>{
        if(value){
            console.log('searching');
        }else{
            console.log('there is nothing to search');
        }
    }
    searchName(null);


    //Unknown type
    const getSpeedInMeterPerSecond=(value:unknown)=>{
        if (typeof value === 'number'){
            const convertSpeed = (value*1000)/3600;
            console.log(`The speed is ${convertSpeed} meterps`);
        }
        else if (typeof value === 'string'){
            const valueInNumber = value.split(' ')
            const [result, unit] = value.split(' ')
            console.log(valueInNumber);
            console.log(result);
            const convertSpeed = (parseFloat(result)*1000)/3600;
            console.log(`The speed is ${convertSpeed} meterps`);
        }
        else{
            console.log('Wrong input');
        }
    }
    getSpeedInMeterPerSecond(null)

    //never
    const throwError = (msg:string): never => {
        throw new Error(msg)
    }
    throwError('Achanak Error')







}