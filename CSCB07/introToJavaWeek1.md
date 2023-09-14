# <span style="color:#ADD8E6"> Introduction to Java (Week 1) </span>

<div align="right"> Created by Minjun Kim </div>


## <span style="color:#ADD8E6">Table of Contents </span> 
- [Notes](#notes)
  - [Overview of Java](#java)
  - [Steps to running a program](#run)
  - [IDE](#ide)
  - [Primary Data Types](#prime)
  - [Objects and Classes](#obj-class)
  - [Instantiation of Objects](#inst)
  - [The Main Method](#main)
  - [Java Memory Model](#mem)
  - [Differnece: Primitive Types vs. Reference Types](#prim-ref)
  - [Default Values](#default)
  - [Keywords](#keywords)
  - [Arrays](#arrays)
  - [I/O](#IO)
- [Lab](#lab)
- [Tutorial](#tutorial)

<a id="notes"></a>
## <span style="color:#ADD8E6">Notes </span> 

<a id="java"></a>
### <span style="color:#ADD8E6"> Java </span> 
- Java is a versatile, class-based, object-oriented, statically-typed, high-level programming language.
- Known for its "Write Once, Run Anywhere" capability
  -  enables Java programs to be executed on multiple platforms without modification.
- Portability achieved through the use of Java Virtual Machine (JVM)
  - interpretes and compiles Java code into bytecode that can run on any system with a compatible JVM.

<a id="run"></a>
### <span style="color:#ADD8E6"> Steps to Running a Java Program </span> 

1. Write Source Code: <br/>
Create your Java Program by writing the source code in a text editor or IDE.

2. Compile code: <br />
Use the Java compiler 'javac' to translate your source code into bytecode.

```shell
$ javac helloWorld.java
```

This produces `.class` file containing the bytecode

3. Execute Bytecode: Run the Java program by invoking the JVM and specifying the classs name:

```shell
$ java helloWorld
```

<a id="ide"></a>
### <span style="color:#ADD8E6"> Integrated Development Environments (IDEs) </span> 

- user-friendly environment for writing, compiling, and debugging Java code
- offer features such as code auto-completion, project management, and integrated debugging tools
  - makes Java development more efficient
- Examples: Ecipse, IntelliJ IDEA, NetBeans, etc.


<a id="prime"></a>
### <span style="color:#ADD8E6"> Primitive Data Types </span> 
- a set of built-in data types for representing fundamental values.
- divided into two main categories:
  - Numeric Primitive Types:
    - `char`, `byte`, `short`, `int`, `long`, `float`, `double`
  - Boolean Type:
    - `boolean` 

![image](https://github.com/Minjun1Kim/Notes/assets/104747956/98107602-346c-4fcb-9edd-c8876cb0f2f0)

<a id="obj-class"></a>
### <span style="color:#ADD8E6"> Objects and Classes </span> 
- An object is an instance of a class.
- Classes serve as blueprints for creating objects, define the structure and behaviour of objects.

Example:
```java
public class Person {
    // Data fields (instance variables)
    String name;
    int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    public void greet() {
        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}
```
<a id="inst"></a>
### <span style="color:#ADD8E6"> Instantiation of Objects </span> 
- To create an object from a class, you use the new keyword followed by the class constructor.

Example:
```java
Person person1 = new Person("Alice", 30);
```

<a id="main"></a>
### <span style="color:#ADD8E6"> The 'main' method </span> 

- the `main` method of a program serves as the entry point for the program.
- has the following signature:
  
```java
public static void main(String[] args) {
    // code
}
```

- the args parameter allows you to pass command-line arguments to your program.

<a id="mem"></a>
### <span style="color:#ADD8E6"> Java Memory Model </span> 

- Java manages memory using a heap and a stack.
- the heap stores objects and dynamically allocated data
- the stack handles method calls and local variables.
- Objects created with the new keyword are stored in the heap, and references to these objects are stored on the stack.

<a id="prim-ref"></a>
### <span style="color:#ADD8E6"> Differnece: Primitive Types vs. Reference Types </span> 
- Variables of primitive types hold the actual value
- variables of reference types store references (memory addresses) to objects.
- When you assign a primitive variable to another, you copy the value.
- When you assign a reference variable to another, you copy the reference, not the object itself.

<a id="default"></a>
### <span style="color:#ADD8E6"> Default Values </span> 
- Java assigns default values to variables based on their data types.
- Numeric types are initialized to 0
- Booleans initialized to false
- Object references to null.
  - includes String
- Note (for `char`): `'\u0000'`


<a id="keywords"></a>
### <span style="color:#ADD8E6"> Keywords </span> 

#### the `this` reference
- Inside a class, this refers to the current instance of the class.
- Often used to distinguish between instance variables and method parameters with the same name.

#### the `static` modifier
- used to define class-level members (variables and methods) that are shared among all instances of the class.
- members are accessed using the class name, not an instance.

```java
public class MyClass {
    int x;
    static int count; // A static variable shared by all instances

    public MyClass(int x) {
        this.x = x;
    }

    public static void incrementCount() {
        count++;
    }
}
```

- count is a static variable, and incrementCount is a static method.

<a id="arrays"></a>
### <span style="color:#ADD8E6"> Arrays </span> 

To create an array and allocate memory, use the new keyword.
```java
int[] grades;
grades = new int[10];
```

Alternatively, you can declare and create an array in a single line.
```java
int[] grades = new int[10];
```

You can access individual elements of an array using their index.
```java
grades[index] = score;   // Assign value to an element
score = grades[index];   // Retrieve value from an element
```

Arrays have a length property that returns the number of elements in the array.
```java
int length = grades.length;
```

Arrays can be looped over using a for loop or a foreach loop.
```java
for (int i = 0; i < grades.length; i++) {
    // Access array elements using grades[i]
}

// or

for (int score : grades) {
    // Access array elements using score
}
```

<a id="IO"></a>
### <span style="color:#ADD8E6"> Input and Output Operations in Java</span> 

Java provides various classes and methods for performing input and output operations. <br />
Here are some commonly used components:

`System.in` represents the standard input stream, which allows reading input from the user. <br>
`System.out` represents the standard output stream, which is used for displaying output to the console. <br>


Example: Reading input from the user using System.in and printing output using System.out.

```java
import java.util.Scanner;

public class InputOutputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.println("Hello, " + name + "!");

        scanner.close();
    }
}
```

### <span style="color:#ADD8E6"> The File class </span> 

The File class in Java provides methods for working with files and directories. <br>
It can be used to perform operations such as creating files, deleting files, checking file existence, listing files in a directory, etc. <br>

Commonly used methods of the File class: <br>

```java
boolean createNewFile(); //Creates a new file and returns true if the file is successfully created.
boolean delete(); //Deletes the file or directory and returns true if the operation is successful.
boolean exists(); //Checks if the file or directory exists.
boolean isDirectory(); //Checks if the given file is a directory.
File[] listFiles(); //Returns an array of File objects representing the files and directories in the given directory.
```

Example: Performing file operations using the File class.
```java
import java.io.File;
import java.io.IOException;

public class FileExample {
    public static void main(String[] args) {
        try {
            // Create a new file
            File file = new File("myfile.txt");
            boolean created = file.createNewFile();
            System.out.println("File created: " + created);

            // Check if the file exists
            boolean exists = file.exists();
            System.out.println("File exists: " + exists);

            // Check if the file is a directory
            boolean isDirectory = file.isDirectory();
            System.out.println("Is a directory: " + isDirectory);

            // Delete the file
            boolean deleted = file.delete();
            System.out.println("File deleted: " + deleted);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

#### <span style="color:#ADD8E6"> Reading and Writing Files </span> 

Reading and writing files can be done in different ways in Java.

Example: Reading a file using the BufferedReader class.
```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ReadFileExample {
    public static void main(String[] args) {
        try {
            BufferedReader input = new BufferedReader(new FileReader("myfile.txt"));
            String line;
            while ((line = input.readLine()) != null) {
                System.out.println(line);
            }
            input.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

Example: Reading a file using the `Scanner` class, writing using the `PrintStream` class, writing using the `FileWriter` class
```java
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Scanner;

public class ReadWriteFileExample {
    public static void main(String[] args) {
        // Reading from a file using Scanner
        try {
            Scanner input = new Scanner(new File("myfile.txt"));
            while (input.hasNextLine()) {
                String line = input.nextLine();
                System.out.println(line);
            }
            input.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        // Writing to a file using PrintStream
        try {
            PrintStream output = new PrintStream("myfile.txt");
            output.println("Hello, World!");
            output.println("This is a sample file.");
            output.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        // Writing to a file using FileWriter
        try {
            FileWriter output = new FileWriter("myfile.txt", false);
            output.write("This will overwrite the file.");
            output.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

In the examples above, the first one uses PrintStream to write lines of text to the file, while the second one uses FileWriter to write a string to the file, overwriting its content. The second argument false in FileWriter indicates that the file should not be appended to, but overwritten.


<a id="lab"></a>
## <span style="color:#ADD8E6"> Lab 1 </span> 

Instructions: <a href="https://q.utoronto.ca/courses/311857/assignments/1151570?module_item_id=5041351" target="_blank">Handout</a>


Commands you need for the lab:
```shell
 $ git add *.java  #adds new/changed files in working directory to the staging area
 $ git commit -m "added Polynomial.java and Driver.java"   #save staged changes as a new commit in the Git repository with the commit message
 $ git push  #push to the remote repository
```

<a id="tutorial"></a>
## <span style="color:#ADD8E6"> Tutorial </span> 
  
  Attendance: <a href="https://docs.google.com/forms/d/e/1FAIpQLSeo4JVJdWw9cfjICCqiIwgPQPLr7dOYpgyRjGvtB2h9iWozbg/viewform?usp=sf_link" target="_blank">Fill out form</a>

  
