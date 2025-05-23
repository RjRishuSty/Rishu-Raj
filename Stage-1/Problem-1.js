

//! Calculator using Class................................

class Calculator {
  constructor(a, b) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
  }

  operate(type) {
    switch (type) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        return this.b !== 0 ? this.a / this.b : "Divide by zero get  error";
      default:
        return "Invalid operation";
    }
  }
}


const result = new Calculator(10, 5);
console.log(result.operate("add")); 
