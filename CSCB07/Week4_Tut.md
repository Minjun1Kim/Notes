# <span style="color:#ADD8E6">Week 4 Notes + Tutorial</span>

<div align="right"> Created by Minjun Kim </div>


## <span style="color:#ADD8E6">Table of Contents </span> 
- [Notes](#notes)
  - [arrays](#arrays)
  - [I/O](#IO)
- [Lab](#lab)
- [Tutorial](#tutorial)

<a id="notes"></a>
## <span style="color:#ADD8E6">Notes </span> 

<a id="arrays"></a>
### <span style="color:#ADD8E6">Arrays </span> 

- An array is a data structure that stores a fixed-size sequence of elements of the same type. <br>
- In Java, arrays are zero-indexed, meaning the first element is accessed using index 0. <br>
- Arrays can store primitive types (int, char, boolean, etc.) as well as objects. <br>
- To declare an array, specify the type of elements followed by square brackets and the array name. <br>

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
### <span style="color:#ADD8E6">Input and Output Operations in Java</span> 

Java provides various classes and methods for performing input and output operations. Here are some commonly used components:

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
## <span style="color:#ADD8E6"> Lab 2 </span> 

Instructions: <a href="https://q.utoronto.ca/courses/303347/assignments/1082952?module_item_id=4717065" target="_blank">Handout</a>


Commands you need for the lab:
```shell
 $ git clone <RepoURL>  #Clone the repo of Lab 1 
 $ cd b07lab1   #Change Directory to b07lab1
 $ git checkout -b lab2   #Create a branch named lab2 and switch to the branch
 $ git add *.java   #adds/stages all the files with .java extension for commit
 $ git commit -m "modified Polynomial.java and Driver.java"   #save staged changes as a new commit in the Git repository with the commit message
 $ git push --set-upstream origin lab2   #push the commits from your local "lab2" branch to the "origin" remote repository
```

Note: 

By running git push --set-upstream origin lab, you are pushing the commits from your local "lab2" branch to the "origin" remote repository, and also setting the tracking relationship between the local "lab" branch and the remote branch with the same name.

Setting the upstream branch allows you to use subsequent git push or git pull commands without specifying the remote repository and branch name each time. Once the tracking relationship is established, you can simply use git push or git pull to push or pull changes to and from the upstream branch.

It's worth noting that the first time you push a branch to a remote repository, you need to use the --set-upstream option to set the tracking relationship. After that, subsequent pushes and pulls can be done with just git push and git pull.


<a id="tutorial"></a>
## <span style="color:#ADD8E6"> Tutorial </span> 
  
  Attendance: <a href="https://docs.google.com/forms/d/e/1FAIpQLSeo4JVJdWw9cfjICCqiIwgPQPLr7dOYpgyRjGvtB2h9iWozbg/viewform?usp=sf_link" target="_blank">Fill out form</a>

  
