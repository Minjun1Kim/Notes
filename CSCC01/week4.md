# <span style="color:#ADD8E6">Week 4 Notes</span>

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
### <span style="color:#ADD8E6">Non-functional Requirement & System Constraints </span> 

- Scalability <br>
- Performance <br>
- Fault tolerance / high availability <br>
- Availability + Partition Tolerance <br>
- Durability


### <span style="color:#ADD8E6">System API </span> 

- REST API over HTTP
- REST API Definition
  - Identifying entities
  - Mapping entities to URL
  - Defining Resource Representation
  - Assigning HTTP methods to operation on resources

### <span style="color:#ADD8E6">Mapping entities to URI </span> 

```
Users -> /users
         /users/{user-id}
```       

```
Posts -> /posts
         /posts/{posts-id}
```

```
Comments -> /posts/{posts-id}/comments
            /posts/{posts-id}/comments/{comments-id}
```

```
Images -> /posts/{posts-id}/images
          /posts/{posts-id}/image/{images-id}
```

```
Votes -> /posts/{posts-id}/vote
         /posts/{posts-id}/comments/{comments-id}/vote
```


### <span style="color:#ADD8E6"> Define Resource Representation </span> 

Posts
```javascript

GET /posts/{post-id}
{
  "post-id": "14245bac",
  "title": "How do I make money with stocks?",
  "user-id": "1234acd",
  "topics": ["investing", "stocks", "trading"],
  "upvotes": 5,
  "downvotes": 1,
  "body": "...."
}
```

Comments
```
GET /posts/{post-id}/comments/{comment-id}
{
  "post-id": "14245bac",
   comments: [
    { "comment-id": 1234,
      "body": "I agree",
      "user-id": "abd54232"
      "upvotes": 50, "downvotes": 3
    },
    {
      "comment_id": 4321,
      "body": "I don't think so, because ...",
      "user-id": "5423adc"
      "upvotes": 7, "downvotes": 6
    }]
}
```


#### <span style="color:#ADD8E6"> Assigning HTTP Methods </span> 

POST/user/create ----- Creating New User
POST/user/login  ----- Login Existing User

Why not GET Method
- We cannot use HTTP message body

GET/user/login?username=abc&password=secret
- Login operation can be viewed as create session operation or a create authentication token operation.
  - response contain new authentication token
  - no need to re-authenticate
 
#### <span style="color:#ADD8E6"> API Consideration </span> 
FR - users navigate to the home page, should be presented with the most popular post in the last 24 hours.
- Number of active posts in our system can be very big in the thousands or more.
- API pagination: limit the # of posts

GET/posts?limit=20&offset=0




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

  
