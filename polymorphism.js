// polymorphism =>  the ability of objects to take on many forms.
// 1. Compile-time Polymorphism :- This type of polymorphism is resolved at compile time, meaning the compiler determines which method to call based on the method signature (method name and parameter types).

// 2. Runtime Polymorphism :- This type of polymorphism is resolved at runtime, meaning the actual method to be called is determined based on the object's type at runtime.                                        

// ==> run time polymorphism

class Test {
    sayhello(){
        console.log("parent class called....");
    }
};

class result extends Test {
    sayhello(){
        console.log("child class called....");
        }
};

const obj = new result();
obj.sayhello();
// ==> output: child class called....
const obj1 = new Test();
obj1.sayhello();
// ==> output: parent class called....