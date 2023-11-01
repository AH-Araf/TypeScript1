{
    // spread operator
    //rest operator
  



    // spread operator------------------------------------------------------------------------------------
    const bros1: string[] = ['Araf', 'Kafi', 'Mahmud']
    const bros2: string[] = ['Ali', 'Koushik', 'Siam']
    bros1.push(...bros2) //... for spread the index value of array

    // bros1.push(bros2) //array er moddhe full array dhukai dibe
    //  const bros1: string[] = ['Araf', 
    // 'Kafi', 
    // 'Mahmud'
    // ['Ali', 'Koushik', 'Siam']
    // ]

    const m1 = {
        a: 'abc',
        b: 'def',
        c: 'ghi',
    }
    const m2 = {
        d: 'jkl',
        e: 'mno',
        f: 'pqr',
    }
    const mList ={
        ...m1, //... for spread the index value of array
        ...m2
    }




    //rest operator------------------------------------------------------------------------------------
    const greetFriends = (f1:string,f2:string,f3:string) =>{
        console.log(`hi ${f1},${f2},${f3},`);
    }
    greetFriends('Araf','Taha','Nuha') //But new kew ashle add kora jabe na

    const done = (...friends:string[]) =>{
        // console.log(`hi ${f1},${f2},${f3},`);
        friends.forEach((friend: string)=>console.log(`hi ${friend}`))
    }
    done('Araf','Taha','Nuha', 'Dolan')




}