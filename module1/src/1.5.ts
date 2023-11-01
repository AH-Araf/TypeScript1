// Reference type ==> Object

const user : {
    company: 'Programming Hero'; //type define, it will be unchanged and fixed. (Literal type) or //readonly company: 'string';
    firstName: string;
    middleName?: string; //Optional type by '?'. Na thakleo error dibe na.
    lastName: string;
    isMarried: boolean;
} = {
    company: 'Programming Hero',
    firstName: 'Md.',
    middleName: 'Arafat',
    lastName: 'Hossain',
    isMarried: true,
}

