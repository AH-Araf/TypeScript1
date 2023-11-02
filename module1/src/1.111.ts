// ternary operation
// nullish coalescing operator

{

    // ternary operation
    const age: number = 19;
    if (age >= 18) {
        console.log('Adult');
    } else {
        console.log('Not Adult');
    }
    // ternary operation
    const isAdult = age >= 18 ? 'adult' : 'not adult'
    console.log(isAdult);




    // nullish coalescing operator (only use when have to make decision only using NULL and UNDEFINED value)
    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest'
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'
    console.log(result1);
    console.log(result2);



    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: 'Araf',
        address: {
            city: 'cum',
            road: 'roadline',
            presentAddress: 'cumilla'
        }
        
    };
    const a = user.address.permanentAddress ?? 'No permanent Address'; //if value is null thn set value as - no permanent address
    console.log({a});


}