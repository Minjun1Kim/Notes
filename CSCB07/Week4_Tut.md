# <span style="color:#ADD8E6">Week 4 Tutorial</span>

<div align="right"> Created by Minjun Kim </div>


## <span style="color:#ADD8E6">Table of Contents </span> 
- [Notes](#notes)
  - [arrays](#arrays)
  - [I/O](#IO)
- [Lab](#lab)
  - [git-setup](#setup)
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



```shell
 $ git clone <RepoURL>
 $ cd b07lab1
 $ git checkout -b lab2
```


