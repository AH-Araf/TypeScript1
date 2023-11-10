{
    //utility types
    // Pick
    type Person = {
      name: string;
      age: number;
      email?: string;
      contactNo: string;
    };
  
    type NameAge = Pick<Person, "name" | "age">;
  
    
    type ContactInfo = Omit<Person, "name" | "age">;// Omit
  
    
    type PersonRequired = Required<Person>;// Required
  
    
    type PersonPartial = Partial<Person>;// Partial
  
    
    type PersonReadonly = Readonly<Person>;// Readonly
  
    const person1: PersonReadonly = {
      name: "Mr. XY",
      age: 200,
      contactNo: "017",
    };
    // person1.name = "Mr. YZ";

  
    // type MyObj = Record<string, number>;
  
    // const EmptyObj: Record<string, unknown> = {};
  
    // const obj1: MyObj = {
    //   a: "aa",
    //   b: "bb",
    //   c: "cc",
    //   d: "dd",
    //   e: 6,
    // };
  
    //
  }