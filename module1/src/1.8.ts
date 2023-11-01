{





    //destructuring

    //object destructuring
    const user = {
        id: 1111014,
        name: {
            firstName: 'Md.',
            middleName: 'Arafat',
            lastName: 'Hossain',
        },
        contactNo: '01312010261',
        address: 'Cumilla',
    };
    const {contactNo : PhoneNo, name:{middleName}  } = user; //destructuring //Name alias  //contactNo : PhoneNo (for changing the name)



    //array destructuring
    const alphabet = ['araf','akib','asif','amir','ans','alu','akm']
    const [ , ,c,...rest] = alphabet; //skip 2nd value







}