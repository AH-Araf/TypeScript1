{

    //union types
    type FrontEndDeveloper = 'Good' | 'Bad' | 'Modern'
    const newDeveloper: FrontEndDeveloper = 'Modern'

    type User = {
        name: string;
        email?: string;
        gender: "Male" | "Female";
        bloodGroup: "O+" | "A+" | "B+"; // only common for "|"
    }

    const user1: User = {
        name: "Araf",
        gender: "Male",
        bloodGroup: "B+"
    }




    // intersection types
    type WebDeveloper = {
        skills: string[];
        designation1: 'WebDeveloper'
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: 'BackendDeveloper'
    }

    type FullStackDeveloper = WebDeveloper & BackendDeveloper
    const fullstackDeveloper: FullStackDeveloper = {
        skills: ['HTML', 'CSS', 'EXPRESS'],
        designation1: 'WebDeveloper',
        designation2: 'BackendDeveloper' //& e sobgula thakte hobe
    }


}


