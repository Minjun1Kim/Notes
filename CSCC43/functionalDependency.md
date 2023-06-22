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
## <span style="color:#ADD8E6"> Functional Dependency Notes </span> 

<a id="SRP"></a>
### <span style="color:#ADD8E6"> Definition </span> 

A `functional dependency (FD)` on a relation R is a statement of the form "If two tuples of R agree on all of the attributes A1, A2, ... , An (the tuples have the same values in their respective components for each of these attributes), then they must also agree on all of another list of attributes B1, B2, ..., Bm. We write this FD formally as A_1 A_2 ... A_n -> B_1 B_2 ... B_m and say that "A1, A2, ... , An functionally determine B1 B2 ... Bm"

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
### <span style="color:#ADD8E6"> Converting Multiway Relationships to Binary </span> 

- any relationship connecting more than two entity sets can be converted to a collection of binary, many-one relationships.

<img width="867" alt="image" src="https://github.com/Minjun1Kim/Notes/assets/104747956/2b8ef577-abc7-415e-b9d0-e4a6eae7e301">

<a id="tips"></a>
### <span style="color:#ADD8E6"> Subclasses in the E/R Model </span> 

- An entity set may contain certain entities with special properties not associated with all members of the set.
- Useful to define certain special-case entity sets, or subclasses, each with its own special attributes and/or relationships.
- Connect an entity set to its subclasses using an `isa` relationship.
- "An A is a B": `isa` relationship from entity set A to entity set B.
- `isa` relationship represented by a triangle with one side attached to the subclass and the opposite point connected to the superclass.
- Every `isa` relationship is `one-one` (although not explicitly shown with arrows).

- A colection of entity sets connected by `isa` relationships could have any structure, limit isa-structures to trees in which there is one **root** entity set that is the most general (i.e. movies) with progressively more specialized entity sets extending below the root in a tree.

<img width="614" alt="image" src="https://github.com/Minjun1Kim/Notes/assets/104747956/fb69de92-89c1-4f89-905d-95908461ad86">


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
### <span style="color:#ADD8E6"> Design Principles </span> 

1. Faithfulness

The design should be faithful to the specifications of the application; entity sets and their attributes should reflect reality.
- A relationship `Stars in` between Stars and Movies should be a many-many relationship.

2. Simplicity Counts

Avoid introducing more elements into your design thatn is absolute necessary.

3. Choosing the right relationships.

Adding to our design every possible relationship is not often a good idea as it can lead to redundancy, where the connected pairs or sets of entiteis for one relationship can be deduced from one or more other relationships.
- resulting database could require much more space to store redundant elements, and modifying DB could become complex.

4. Picking the right kind of element
- 

  
