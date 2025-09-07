// Belajar OOP JAvascript
// Membuat Object, Function, Method, sampai Parameter
function Person(first_name, last_name) {
   this.first_name = first_name;
   this.last_name = last_name;
   this.greetings = (name) => {
      console.info(
         `Hello ${name}, my name is ${this.first_name} ${this.last_name}!`
      );
   };
   //    this.challange = (firstParam, secParam) => {
   //       return "blah blah..";
   //    };
}

const muzashi = new Person("Muzashi", "Yukihime");
const aisaki = new Person("Lina", "Aisaki");

// // Object Muzashi
// muzashi.first_name = "Muzashi";
// muzashi.last_name = "Yukihime";
muzashi.greetings("Maria");

console.log(muzashi);
