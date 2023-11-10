{
    // oop - class
  
    class Animal {
      constructor(
        public name: string,
        public species: string,
        public sound: string
      ) {}
  
      makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
        console.log(`Species- ${this.species}`);
      }
    }
  
    const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
    const cat = new Animal("Persian bhai", "cat", "meaw meaw");
    const cow = new Animal("Kalu vai", "cow", "hamba hamba");
  
    cow.makeSound();
  
    
    //
  }