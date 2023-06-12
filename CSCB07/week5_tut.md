# <span style="color:#ADD8E6">Week 5 Notes + Tutorial</span>

<div align="right"> Created by Minjun Kim </div>


## <span style="color:#ADD8E6">Table of Contents </span> 
- [OOP Notes](#notes)
  - [inheritance](#inheritance)
  - [polymorphism](#poly)
  - [encapsulation](#encap)
  - [Method overloading/overriding](#method)
  - [Abstract Classes](#abstract)
  - [Interfaces](#interfaces)
  - [Generics](#generics)
  
- [Lab](#lab)
- [Tutorial](#tutorial)

<a id="notes"></a>
## <span style="color:#ADD8E6"> Object-oriented Programming Notes </span> 

<a id="visibility"></a>
### <span style="color:#ADD8E6">Class Visibility </span> 

There are four access modifiers in Java: public, protected, default (no modifier), and private. These modifiers control the visibility of classes, fields, and methods within a program.

1. `public`:
A public class is accessible from any other class in the program, regardless of the package it belongs to. It allows the class to be used by other classes and packages.

2. `protected`:
A protected class is accessible within the same package and can be accessed by subclasses (even if they are in a different package). It provides a level of encapsulation and inheritance.

3. Default (no modifier):
A class without any access modifier (default visibility) is accessible within the same package only. It is not accessible outside the package.
```java
class DefaultClass {
    // Class members and methods
}
```

4. `private`:
A private class is accessible only within the same class. It provides the highest level of encapsulation and restricts access from any other class.


<a id="inheritance"></a>
### <span style="color:#ADD8E6">Inheritance </span> 

- Inheritance is a mechanism in Java that allows a class (called the child or subclass) to inherit the properties and methods of another class (called the parent or superclass). The child class can then extend or modify the inherited behavior while retaining the existing functionality.

In Java, we use the `extends` keyword for inheritance.
```java
class Child extends Parent {
 ...
}
```

Example:
```
// Parent class
class Animal {
    void eat() {
        System.out.println("The animal is eating.");
    }
}

// Child class inheriting from Animal
class Dog extends Animal {
    void bark() {
        System.out.println("The dog is barking.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat(); // Inherited from Animal
        dog.bark(); // Defined in Dog class
    }
}
```


<a id="poly"></a>
### <span style="color:#ADD8E6">Polymorphism</span> 

Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables methods to be overridden in subclasses and called based on the actual object type at runtime, achieving different behaviors for different objects.

```java
// Parent class
class Animal {
    void makeSound() {
        System.out.println("The animal makes a sound.");
    }
}

// Child classes overriding the makeSound() method
class Dog extends Animal {
    void makeSound() {
        System.out.println("The dog barks.");
    }
}

class Cat extends Animal {
    void makeSound() {
        System.out.println("The cat meows.");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal1 = new Dog();
        Animal animal2 = new Cat();
        
        animal1.makeSound(); // Calls Dog's makeSound()
        animal2.makeSound(); // Calls Cat's makeSound()
    }
}
```

<a id="encap"></a>
### <span style="color:#ADD8E6"> Encapsulation </span> 

Encapsulation is a concept that bundles data and methods within a class, hiding the internal details and providing access to them through public methods. It helps in data protection and code maintainability.


```java
class Person {
    private String name;
    private int age;
    
    // Getter and setter methods
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person();
        person.setName("John");
        person.setAge(25);
        
        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());
    }
}
```

<a id="method"></a>
### <span style="color:#ADD8E6"> Method Overloading and Overriding: </span> 

Method overloading refers to having multiple methods with the same name but different parameters in the same class. <br/>
Method overriding occurs when a subclass provides its own implementation of a method defined in the superclass.

```java
// Parent class
class Shape {
    void draw() {
        System.out.println("Drawing a shape.");
    }
    
    void draw(String color) {
        System.out.println("Drawing a " + color + " shape.");
    }
}

// Child class overriding the draw() method
class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a circle.");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape shape = new Shape();
        shape.draw(); // Calls the draw() method in Shape
        
        Circle circle = new Circle();
        circle.draw(); // Calls the draw() method in Circle
        circle.draw("red"); // Calls the overloaded draw() method in Shape
    }
}

```

<a id="abstract"></a>
### <span style="color:#ADD8E6">Abstract Classes </span> 
An abstract class is a class that cannot be instantiated and can contain both regular methods and abstract methods (without implementation). 
It serves as a blueprint for its subclasses, which must provide implementations for the abstract methods.

```java
// Abstract class
abstract class Shape {
    abstract void draw();
    
    void display() {
        System.out.println("Displaying the shape.");
    }
}

// Concrete class extending the abstract class
class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a circle.");
    }
}

public class Main {
    public static void main(String[] args) {
        Circle circle = new Circle();
        circle.draw();
        circle.display();
    }
}
```

<a id="interfaces"></a>
### <span style="color:#ADD8E6">Interfaces </span> 
An interface is a collection of abstract methods. It defines a contract that classes must adhere to by implementing the methods declared in the interface. Multiple interfaces can be implemented by a class.

```java
// Interface
interface Animal {
    void makeSound();
}

// Class implementing the Animal interface
class Dog implements Animal {
    public void makeSound() {
        System.out.println("The dog barks.");
    }
}

class Cat implements Animal {
    public void makeSound() {
        System.out.println("The cat meows.");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal dog = new Dog();
        dog.makeSound();
        
        Animal cat = new Cat();
        cat.makeSound();
    }
}
```

<a id="generics"></a>
### <span style="color:#ADD8E6">Generics</span> 
Generics allow the creation of classes, interfaces, and methods that can work with different types, specified at compile-time. They provide type safety and enable code reusability.
```java
// Generic class
class Box<T> {
    private T content;
    
    public void setContent(T content) {
        this.content = content;
    }
    
    public T getContent() {
        return content;
    }
}

public class Main {
    public static void main(String[] args) {
        Box<String> stringBox = new Box<>();
        stringBox.setContent("Hello");
        String str = stringBox.getContent();
        
        Box<Integer> intBox = new Box<>();
        intBox.setContent(10);
        int num = intBox.getContent();
        
        System.out.println(str);
        System.out.println(num);
    }
}
```

1. Comparable Interface:
The Comparable interface allows objects to be compared to each other for ordering. It contains a single method, compareTo(), which defines the natural ordering of objects. <br/>
Classes that implement Comparable can be sorted using methods like Collections.sort() or Arrays.sort().

```java
import java.util.*;

// Custom class implementing Comparable
class Person implements Comparable<Person> {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Implementing the compareTo() method
    public int compareTo(Person other) {
        return this.age - other.age; // Comparing based on age
    }
    
    public String toString() {
        return name + " (" + age + ")";
    }
}

public class Main {
    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("Alice", 25));
        people.add(new Person("Bob", 30));
        people.add(new Person("Charlie", 20));
        
        Collections.sort(people); // Sorting the list based on age
        
        for (Person person : people) {
            System.out.println(person);
        }
    }
}
```

2. ArrayList Class:
The ArrayList class is an implementation of the List interface that provides dynamic arrays. It allows elements to be added, removed, and accessed using index-based operations. <br/>
The size of an ArrayList grows dynamically as elements are added.

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();
        
        // Adding elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        
        // Accessing elements
        System.out.println(fruits.get(1)); // Output: Banana
        
        // Modifying elements
        fruits.set(0, "Mango");
        
        // Removing elements
        fruits.remove(2);
        
        // Iterating over the elements
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
        
        // Checking the size
        System.out.println("Size: " + fruits.size()); // Output: 2
    }
}
```

3. HashSet Class:
The HashSet class is an implementation of the Set interface that stores elements in a hash table. <br/>
It provides constant-time performance for basic operations like adding, removing, and checking for the presence of an element. <br/> 
The elements in a HashSet are not ordered. <br/>

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        HashSet<String> countries = new HashSet<>();
        
        // Adding elements
        countries.add("USA");
        countries.add("Canada");
        countries.add("France");
        countries.add("Germany");
        
        // Checking for presence
        System.out.println(countries.contains("Canada")); // Output: true
        
        // Removing elements
        countries.remove("France");
        
        // Iterating over the elements
        for (String country : countries) {
            System.out.println(country);
        }
        
        // Checking the size
        System.out.println("Size: " + countries.size()); // Output: 3
    }
}
```

LinkedHashSet Class:
The LinkedHashSet class is an implementation of the Set interface that maintains the insertion order of elements. It is implemented as a hash table with a linked list running through it, allowing fast iteration. The elements in a LinkedHashSet are ordered based on the order of insertion.

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        LinkedHashSet<String> cities = new LinkedHashSet<>();
        
        // Adding elements
        cities.add("London");
        cities.add("Paris");
        cities.add("New York");
        
        // Checking for presence
        System.out.println(cities.contains("Paris")); // Output: true
        
        // Removing elements
        cities.remove("London");
        
        // Iterating over the elements
        for (String city : cities) {
            System.out.println(city);
        }
        
        // Checking the size
        System.out.println("Size: " + cities.size()); // Output: 2
    }
}
```



<a id="lab"></a>
## <span style="color:#ADD8E6"> Lab 3 </span> 

Instructions: <a href="https://q.utoronto.ca/courses/303347/assignments/1082952?module_item_id=4717065](https://q.utoronto.ca/courses/303347/files/26571834?wrap=1" target="_blank">Handout</a>



<a id="tutorial"></a>
## <span style="color:#ADD8E6"> Tutorial </span> 
  
  Attendance: <a href="https://forms.gle/i5BLbDMA1yb6AYwJ7" target="_blank">Fill out form</a>

  
