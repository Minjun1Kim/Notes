# <span style="color:#ADD8E6">ER Models</span>

<div align="right"> Created by Minjun Kim </div>

## <span style="color:#ADD8E6">Table of Contents </span> 
- [NOTES](#notes)
  - [Multiplicity of Binary E/R Relationships](#SRP)
  - [Open-Closed Principle](#OCP)
  - [Liscov Subsitution Principle](#LSP)
  - [Interface Segragation Principle](#ISP)
  - [Dependency Inversion Principle](#DIP)
  - [Tips](#tips)


<a id="notes"></a>
## <span style="color:#ADD8E6"> SOLID principles Notes </span> 

<a id="SRP"></a>
### <span style="color:#ADD8E6">Multiplicity of Binary E/R Relationships</span> 

Suppose R is a relationship connecting entity sets E and F.

1. Many-one
- If each member of E can be connected by R to at most one member of F, then R is `many-one` from E to F. <br/>
- Equivalently, `one-mamy` from F to E.
- Note: Each entity in F can be connected to many members of E.

2. One-one

- If R is both many-one from E to F and many-one from F to E, then we say R is `one-one`.
- An entity of either entity set can be connected to at most one entity of the other set.

3. Many-many
- If R is neither many-one from E to F or from F to E, then we say R is `many-many`.

<img width="50%" alt="image" src="https://github.com/Minjun1Kim/Notes/assets/104747956/66c6d0c9-dee8-4c88-a849-911ebf7c3a74">

- If a relationship is many-one from entity set E to entity set F, then we place an arrow entering F. <br/>
- The arrow indicates that each entity in set E is related to at most one entity in set F.
- In the example above, each movie is related to at most one studio.

<img width="662" alt="image" src="https://github.com/Minjun1Kim/Notes/assets/104747956/10d9e347-a547-4728-aba1-702b8c8bf7ce">

- A one-one relationship between entity sets E and F is represented by arrows pointing to both E and F.
- A president can run only one studio and a studio has only one president.
- Note: an arrow means `at most one`, meaning a studio might not have a president.


<a id="OCP"></a>
### <span style="color:#ADD8E6">Multiway Relationships </span> 

- A multiway relationship in an E/R diagram us represented by lines from the relationship diamond to each of the involved entity sets.
- The value of an E/R relationship can be thought of as a relationship set of tuples whose components are the entities participating in the relationship,

Example: 
<img width="532" alt="image" src="https://github.com/Minjun1Kim/Notes/assets/104747956/5dc344b5-12eb-4b99-b5b6-622fdb2a0ccb">

- `Contracts` can be described by triples of the form: (stdio, star, movie).
- An arrow pointing to an entity set E means that if we select one entity from each of the other entity sets in the relationship, those entities are related to at most one entity in E.
- Example: a star has contracted with one studio for that movie, but a studio may contract with several stars for a movie, and a star may contract with one studio for than one movie.

<a id="LSP"></a>
### <span style="color:#ADD8E6">Roles in Relationships </span> 

- There may be more than one appearance of an entity set in a single relationship.
- Each line to the entity set represents a different `role` that the entity set plays in the relationship. 

Example:

<img width="455" alt="image" src="https://github.com/Minjun1Kim/Notes/assets/104747956/48730d10-9a5f-4b54-8ab0-243409610afd">

- `Sequel-of` relationship between the entity set `Movies` and itself.
- Each relationship is between two movies, one of which is the sequel of the other.
- To differentiate the two movies, one line is labed by the role `Original` and the other by `Sequel`.
- A movie may have many sequels, but a sequel has onlt one original movie.
- `Many-one` from `Sequel` movies to `Original` movies.

<img width="526" alt="image" src="https://github.com/Minjun1Kim/Notes/assets/104747956/fd8ebee2-7513-4daa-a2bb-2b2991edce2b">

- Contracts involves two studios, a star, and a movie.
- One studio with a certian star under contract may further contract with a second studio for the star to act in a particular movie.
- There could be several different contracts between the star's studio and the producing studio allowing the star to act in several movies.
- 4-tuples: (studio1, studio2, star, movie)


<a id="ISP"></a>
### <span style="color:#ADD8E6">Attributes on Relationships</span> 

<img width="684" alt="image" src="https://github.com/Minjun1Kim/Notes/assets/104747956/6065748a-24cb-4726-8bdc-e248521b5ff4">

- Cannot associate salary with a star, they might get different salaries for different movies.
- Cannot associate salary with a studio (different salaries to different stars) or with a movie.
- Appropriate to associate salary with the (star, movie, studio) triple for the `Contracts` relationship.
- Attributes not necessary on relationships, can instead create another entity set `Salaries` with attribute `Salary`

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

<a id="tips"></a>
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
  
