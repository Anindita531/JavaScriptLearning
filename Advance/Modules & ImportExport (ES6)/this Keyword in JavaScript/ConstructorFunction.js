function User(name) {
  this.name = name;
  this.sayHi = function() {
    console.log("Hi " + this.name);
  };
}
const user1 = new User("Anindita");
user1.sayHi(); // Hi Anindita
