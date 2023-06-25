# <span style="color:#ADD8E6">SOLID Principles</span>

<div align="right"> Created by Minjun Kim </div>


## <span style="color:#ADD8E6">Table of Contents </span> 
- [SOLID Notes](#notes)
  - [Single Responsibility Principle](#SRP)
  - [Open-Closed Principle](#OCP)
  - [Liscov Subsitution Principle](#LSP)
  - [Interface Segragation Principle](#ISP)
  - [Dependency Inversion Principle](#DIP)
  - [Tips](#tips)

  
- [Lab](#lab)
- [Tutorial](#tutorial)

<a id="notes"></a>
## <span style="color:#ADD8E6"> SOLID principles Notes </span> 

<a id="SRP"></a>
### <span style="color:#ADD8E6">Single Responsibility Principle (SRP): </span> 

A class should have only one reason to change, meaning it should have only one responsibility. This principle promotes high cohesion and makes classes easier to understand, maintain, and test. <br/>

Example:
```java
// Incorrect implementation violating SRP
class Customer {
    void calculateTotalPrice() {
        // Calculate the total price of items
    }

    void sendConfirmationEmail() {
        // Send confirmation email to the customer
    }
}
```
Explanation: In the above example, the Customer class has two responsibilities: calculating the total price and sending confirmation emails. <br/>
This violates the SRP as it has more than one reason to change. To adhere to the SRP, we should separate these responsibilities into separate classes.

```java
// Correct implementation following SRP
class Customer {
    void calculateTotalPrice() {
        // Calculate the total price of items
    }
}

class EmailService {
    void sendConfirmationEmail(Customer customer) {
        // Send confirmation email to the customer
    }
}
```
Explanation: In the updated implementation, the responsibilities of calculating the total price and sending confirmation emails are separated into two different classes. This adheres to the SRP, as each class now has a single responsibility.


<a id="OCP"></a>
### <span style="color:#ADD8E6">Open-Closed Principle (OCP) </span> 
Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. This principle encourages designing systems that can be easily extended with new functionality without modifying existing code.
Example:
```java
// Incorrect implementation violating OCP
class DiscountCalculator {
    double calculateDiscount(double totalPrice) {
        // Calculate discount based on some condition
        // Code for specific discount calculation
        if (percentageDiscount) {
          // logic
        } else if (flatDiscount) {
          // logic
        } else if (...) {
          // logic
        } else {

        }
    }
}
```


Explanation: In the above example, the DiscountCalculator class directly implements specific discount calculation logic. If we want to add new types of discounts in the future, we would need to modify the existing class, violating the OCP. Instead, we should design the class to be open for extension by using abstraction and polymorphism.
```java
// Correct implementation following OCP
interface Discount {
    double calculateDiscount(double totalPrice);
}

class PercentageDiscount implements Discount {
    double calculateDiscount(double totalPrice) {
        // Calculate discount based on percentage
    }
}

class FlatDiscount implements Discount {
    double calculateDiscount(double totalPrice) {
        // Calculate discount based on a flat amount
    }
}
```

Explanation: In the updated implementation, the DiscountCalculator class is replaced by an interface Discount, which defines a common method calculateDiscount(). This allows for creating multiple classes that implement the Discount interface for different types of discounts. New discount types can be added by creating additional classes that implement the Discount interface, without modifying the existing code.


<a id="LSP"></a>
### <span style="color:#ADD8E6"> Liskov Substitution Principle (LSP): </span> 

Subtypes must be substitutable for their base types without affecting the correctness of the program. This principle ensures that objects of derived classes can be used interchangeably with objects of the base class without causing unexpected behavior.

Example:

```java
// Incorrect implementation violating LSP
class Rectangle {
    protected int width;
    protected int height;

    void setWidth(int width) {
        this.width = width;
    }

    void setHeight(int height) {
        this.height = height;
    }

    int calculateArea() {
        return width * height;
    }
}

class Square extends Rectangle {
    void setWidth(int width) {
        this.width = width;
        this.height = width;
    }

    void setHeight(int height) {
        this.height = height;
        this.width = height;
    }
}
```
Explanation: In the above example, the Square class extends the Rectangle class. However, the behavior of the Square class violates the LSP. Setting the width or height of a Square object affects both dimensions, while for a Rectangle, they can be set independently. This violates the substitution principle, as the Square object cannot be used interchangeably with the Rectangle object without causing unexpected behavior.

```java
// Correct implementation following LSP
abstract class Shape {
    abstract int calculateArea();
}

class Rectangle extends Shape {
    protected int width;
    protected int height;

    void setWidth(int width) {
        this.width = width;
    }

    void setHeight(int height) {
        this.height = height;
    }

    int calculateArea() {
        return width * height;
    }
}

class Square extends Shape {
    protected int sideLength;

    void setSideLength(int sideLength) {
        this.sideLength = sideLength;
    }

    int calculateArea() {
        return sideLength * sideLength;
    }
}
```


Explanation: In the updated implementation, the Shape class is introduced as an abstract base class, and both Rectangle and Square classes inherit from it. Now, the Square class does not inherit the setWidth() and setHeight() methods from the Rectangle class. Instead, it has its own method setSideLength(). This adheres to the LSP, as objects of Rectangle and Square can be used interchangeably through the common Shape interface.



<a id="ISP"></a>
### <span style="color:#ADD8E6">Interface Segregation Principle (ISP):</span> 

Clients should not be forced to depend on interfaces they do not use. This principle promotes the idea of creating specific interfaces for clients instead of having a single large interface.

```java
// Incorrect implementation violating ISP
interface Order {
    void processOrder();

    void cancelOrder();

    void shipOrder();

    void printInvoice();
}
```
Explanation: In the above example, the Order interface has several methods, including processOrder(), cancelOrder(), shipOrder(), and printInvoice(). However, not all clients might need all of these methods. This violates the ISP because clients are forced to depend on methods they don't need.

```java
// Correct implementation following ISP
interface Order {
    void processOrder();

    void cancelOrder();
}

interface Shippable {
    void shipOrder();
}

interface Printable {
    void printInvoice();
}
```

Explanation: In the updated implementation, the Order interface is divided into three smaller interfaces: Order, Shippable, and Printable. Each interface contains a specific set of methods. Clients can now implement only the interfaces they need, avoiding unnecessary dependencies and adhering to the ISP.


<a id="DIP"></a>
### <span style="color:#ADD8E6">Dependency Inversion Principle (DIP) </span> 

High-level modules should not depend on low-level modules. Both should depend on abstractions. This principle promotes loose coupling and allows for easier modification and testing of code.

High-level modules contain the important policy decisions and business models of an application – The identity of the application. <br/>
Low-level modules contain detailed implementations of individual mechanisms needed to realize the policy. <br/>

When high-level modules directly depend on low-level modules, it creates a tight coupling between them. This tight coupling can lead to several issues and make the software system more rigid and difficult to maintain.

Lack of Flexibility: When high-level modules directly depend on low-level modules, any changes or updates to the low-level modules can have a cascading effect on the high-level modules. This reduces the flexibility of the system and makes it harder to introduce new features or modify existing ones.

Limited Reusability: When high-level modules directly depend on low-level modules, it becomes difficult to reuse those high-level modules in different contexts or with different low-level implementations. The coupling restricts the flexibility to swap out low-level components or adapt the system to different environments.

Code Fragility: Changes in low-level modules can unintentionally break the functionality of high-level modules, even if the change is unrelated to their specific behavior. This fragility makes the system more prone to bugs and increases the risk of introducing unintended side effects.

By applying the Dependency Inversion Principle (DIP), which suggests that both high-level and low-level modules should depend on abstractions, these issues can be mitigated. The use of abstractions (interfaces or abstract classes) allows for loose coupling, promotes modularity, and facilitates easier testing, maintainability, and reusability of the system.

Example:
```java
// Violation of DIP

// Low-level module
class MySQLDatabase {
    public void save(Order order) {
        // Save order to MySQL database
    }
}

// High-level module
class OrderService {
    private MySQLDatabase database; // Low-level module dependency

    public OrderService() {
        this.database = new MySQLDatabase();
    }

    public void saveOrder(Order order) {
        // Save order to MySQL database
        database.save(order);
    }
}
```
Explanation: In the above example, the OrderService high-level module directly depends on the MySQLDatabase low-level module. This violates the DIP because the high-level module depends on a specific concrete implementation of the database.


```java
// Corrected implementation

// Low-level module
interface Database {
    void save(Order order);
}

// Concrete implementation of Database for MySQL
class MySQLDatabase implements Database {
    public void save(Order order) {
        // Save order to MySQL database
    }
}

// High-level module
class OrderService {
    private Database database; // Dependency on abstraction

    public OrderService(Database database) {
        this.database = database;
    }

    public void saveOrder(Order order) {
        // Save order using the injected database
        database.save(order);
    }
}
```

Explanation: In the corrected implementation, the OrderService high-level module depends on the Database interface, which is an abstraction. The concrete implementation of the database, MySQLDatabase, implements the Database interface. The dependency is injected into the OrderService through its constructor, allowing different implementations of the database to be used without modifying the high-level module.

This adherence to the DIP improves modularity, flexibility, and testability. It decouples the high-level module from specific low-level implementations, enabling easier maintenance and future changes. It also promotes reusability by allowing different implementations of the Database interface to be used in different contexts.


### <span style="color:#ADD8E6"> Tips on recognizing violations of SOLID principles </span> 

1. Single Responsibility Principle (SRP):
- Look for classes or methods that have multiple responsibilities or reasons to change.
- Identify cohesive tasks or responsibilities within the code.
- Extract separate classes or methods for each responsibility.
- Ensure that each class or method has a single, well-defined responsibility.

2. Open/Closed Principle (OCP):
- Identify areas of the code that require modification when new functionality is added.
- Look for conditional statements or switch cases that handle different variations of behavior.
- Apply abstraction and create interfaces or base classes to define common behavior.
- Use inheritance or composition to extend functionality without modifying existing code.
  
3. Liskov Substitution Principle (LSP):
- Identify classes that are derived from a base class or implement an interface.
- Look for overridden methods that change the preconditions, postconditions, or invariants defined in the base class or interface.
- Ensure that derived classes can be used interchangeably with the base class or interface without causing unexpected behavior.
- Refactor the code to adhere to the contract defined by the base class or interface.
  
4. Interface Segregation Principle (ISP):
- Identify interfaces that are large and have multiple methods.
- Look for clients that depend on these interfaces but only use a subset of the methods.
- Split the large interfaces into smaller, more focused interfaces.
- Refactor the code to use the smaller interfaces based on specific client needs.
  
5. Dependency Inversion Principle (DIP):
- Identify classes or modules that depend on concrete implementations.
- Look for tight coupling between high-level and low-level modules.
- Introduce abstractions (interfaces or abstract classes) to represent dependencies.
- Use dependency injection or inversion of control to provide implementations to the dependent classes.


<a id="tips"></a>
### <span style="color:#ADD8E6"> Abstract Class VS Interface </span> 

#### <span style="color:#ADD8E6"> Abstract Class</span> 

- An abstract class is a class that cannot be instantiated and serves as a blueprint for derived classes.
- It can contain both abstract and non-abstract methods.
- It can have instance variables and constructors.
- It may provide default implementations for some or all of its methods.
- It can enforce or provide common behavior for its derived classes.
- A class can inherit from only one abstract class.

Use cases for Abstract Classes:

- When you want to provide a common base implementation for a group of related classes.
- When you have some methods that can be fully implemented in the base class and other methods that should be implemented in the derived classes.
- When you want to define common state or behavior that derived classes can inherit.
  
#### <span style="color:#ADD8E6"> Interface </span> 

- An interface is a contract that defines a set of methods that a class must implement.
- It cannot have instance variables or constructors.
- All methods in an interface are implicitly abstract and public.
- It cannot provide default implementations for methods.
- A class can implement multiple interfaces.
  
Use cases for Interfaces:

- When you want to define a contract that specifies a set of behaviors that a class must implement.
- When you want to provide a common behavior across unrelated classes.
- When you want to achieve multiple inheritances since a class can implement multiple interfaces.
- When you want to enable loose coupling by programming to interfaces rather than concrete classes.

In general, use abstract classes when you want to provide a base implementation and define a relationship between classes, and use interfaces when you want to define a contract that can be implemented by multiple unrelated classes. Abstract classes are more suitable when you have a "is-a" relationship, while interfaces are more suitable when you have a "can-do" relationship.


<a id="lab"></a>
## <span style="color:#ADD8E6"> Lab 3 </span> 

Instructions: <a href="https://q.utoronto.ca/courses/303347/assignments/1082952?module_item_id=4717065](https://q.utoronto.ca/courses/303347/files/26571834?wrap=1" target="_blank">Handout</a>


Resources: <a href="http://stg-tud.github.io/sedc/Lecture/ws13-14/3.5-DIP.html#mode=document"> DIP </a>
  
