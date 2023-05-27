# <span style="color:#ADD8E6">Assignment 3: System Monitoring Tool -- Concurrency & Signals</span>


<div align="right"> Created by Minjun Kim </div>


## <span style="color:#ADD8E6">Table of Contents </span> 
- [Description](#description)
- [Requirements](#requirements)
- [Usage](#usage)
- [Functions](#functions)
- [Problem Solving](#problemsolving)
- [Notes](#notes)
- [References](#references)

<br />

<a id="description"></a>
## <span style="color:#ADD8E6">Description </span> 

This program displays information about the system, including the number of samples taken, the time delay between samples, memory usage, number of cores, CPU usage, and the current user sessions. THe program runs different queries concurrently. It retrieves the information by using system calls and reading from the /proc/stat file.

<br />

<a id="requirements"></a>
## <span style="color:#ADD8E6">Requirements </span>

The program requires the following libraries to be installed: <br />
- [`<stdio.h>`](https://man7.org/linux/man-pages/man3/stdio.3.html)<br />
- [`<stdlib.h>`](https://man7.org/linux/man-pages/man0/stdlib.h.0p.html)<br />
- [`<unistd.h>`](https://man7.org/linux/man-pages/man0/unistd.h.0p.html)<br />
- [`<string.h>`](https://man7.org/linux/man-pages/man0/string.h.0p.html)<br />
- [`<sys/utsname.h>`](https://man7.org/linux/man-pages/man0/sys_utsname.h.0p.html)<br />
- [`<sys/sysinfo.h>`](https://man7.org/linux/man-pages/man2/sysinfo.2.html)<br />
- [`<sys/resource.h>`](https://man7.org/linux/man-pages/man0/sys_resource.h.0p.html)<br />
- [`<utmp.h>`](https://man7.org/linux/man-pages/man5/utmp.5.html)<br />
- [`<getopt.h>`](https://man7.org/linux/man-pages/man3/getopt.3.html)<br />
- [`<math.h>`](https://man7.org/linux/man-pages/man0/math.h.0p.html) <br />
- [`<signal.h>`](https://man7.org/linux/man-pages/man7/signal.7.html) <br />
- [`<sys/wait.h>`](https://man7.org/linux/man-pages/man2/wait.2.html) <br />
- [`<fcntl.h>`](https://man7.org/linux/man-pages/man2/wait.2.html) <br />


and the header file: <br />

- `"a3.h'`

as well as the implementation files: <br />

- `main.c`
- `stats_functions.c`

also includes:
- `Makefile`

<br />

<a id="usage"></a>
## <span style="color:#ADD8E6">Usage</span> 

To run the program, compile the code using the following Makefile command:

```console
$ make
```

And then run the executable:

```console
$ ./prog
```

The program also accepts several command line arguments such as: <br />

  `--system`
<details>
    <summary>Click to expand</summary>

```console
$ ./prog --system
```

* to indicate that only the system usage should be generated.
</details>

<br />

`--user`
<details>
    <summary>Click to expand</summary>

```console
$ ./prog --user
```

* to indicate that only the users usage should be generated.
</details>

<br />
  
`--graphics`

<details>
  <summary>Click to expand</summary>

```console
$ ./prog --graphics
```

OR

```console
$ ./prog -g
```

  * to include graphical output in the cases where a graphical outcome is possible.

</details>

<br />

`--sequential`

<details>
  <summary>Click to expand</summary>

```console
$ ./prog --sequential
```

OR 

```console
$ ./prog -q
```

  * to indicate that the information will be output sequentially without needing to "refresh" the screen.

</details>

<br />

`--samples=N`

<details>
  <summary>Click to expand</summary>

```console
$ ./prog --samples=8
```

  * to indicate the number of times (N) the statistics are going to be collected and results will be reported based on the N number of iterations.
  * Note: if value is not indicated, the default value of 10 samples will be used.

</details>

<br />

`--tdelay=T`

<details>
  <summary>Click to expand</summary>

```console
$ ./prog --tdelay=2
```

  * to indicate how frequently to sample in seconds.
  * Note: if value is not indicated, the default value of 1 second will be used.

</details>

<br />


<details>
  <summary>Multiple Arguments</summary>

```console
$ ./prog --system --user -q -g 5 2
```
  * prints sequentially 5 graphical samples of cpu, system, and user information with 2 seconds of delay in between.
  * sample number and tdelay are positional arguments in this order.

<br />

- It is my design choice not to show graphics when the following command is entered:

    ```console
    $ ./prog     --user --graphics
    ```
    as I understood the following instruction to be only concerned with the users part and not CPU usage:
    >  `--user`: to indicate that only the users usage should be generated

</details>

<br />

Extra CDTs Used

-   `mem_struct` 
    <br />

    ```c
    typedef struct {
        char mem_str[MAX_LEN];
        double virt_used;
    } mem_struct;
    ```

-   `cpu_struct` 
    <br />

    ```c
    typedef struct table{
        pid_t pid; // process id
        int fd; // file descriptor
        int fd_count;  // number of file descriptors associated with the process
        char fname[MAX_LEN];    // symbolic link path name or canonical path name
        unsigned long inode;    // inode number
        struct table *next; // pointer to next node
    } c_table;
    ```
- `cpu_struct`
    <br />

    ```c
    typedef struct {
        unsigned long user;
        unsigned long nice;
        unsigned long system;
        unsigned long idle;
        unsigned long iowait;
        unsigned long irq;
        unsigned long softirq;
    } cpu_struct;
    ```

- `User`
    <br />

    ```c
    typedef struct user {
        char line[UT_LINESIZE + UT_NAMESIZE + UT_HOSTSIZE + 10];
        struct user *next;
    } User;
    ```

- `sample`
    <br />

    ```c
    typedef struct sample {
        double prev_virt; // previous virtual memory
        double cur_virt; // current virtual memory
    } sample;
    ```

<a id="functions"></a>
## <span style="color:#ADD8E6">Functions</span>

- Implemented/defined in `main.c`


    -   ```c
        /* Function to handle the SIGINT signal. Takes a single parameter, 'sig' (representing the signal number).
        * The function prints a message to the user asking if they want to quit the program. If the user enters
        * 'y' or 'Y', the program exits. If the user enters 'n' or 'N', the program continues to run.
        */
        void sigint_handler(int sig);
        ```

    -   ```c
        /* Function to handle the SIGTSTP signal. Takes a single parameter, 'sig' (representing the signal number).
        * Ignores the signal, allowing the program to continue running.
        */
        void sigtstp_handler(int sig) 
        ```

<br />


- Implemented/defined in `stats_functions.c`


    -   ```c
        /**
        * @brief Write the memory information to the pipe.
        * @param write_fd the file descriptor to write to
        * @param prev_virt the previous virtual memory
        * @param str the string to write to the pipe
        * @param i the index of the sample
        * @param graphics the graphics flag
        * @return None
        */
        void write_memory_pipe(int write_fd, double *prev_virt, char str[MAX_LEN], int i, int graphics);
        ```

    -   ```c
        /**
        * @brief Write the memory information to the pipe.
        * @param str the string to write to the pipe
        * @param i the index of the sample
        * @return double the virtual memory used
        */
        double write_memory(char str[MAX_LEN], int i);
        ```

    -   ```c
        /**
        * @brief Enqueue a newly allocated and initialized User node to the tail of the users 'q' in O(1) time
        * @param q the queue to enqueue to
        * @param line the string to store to the node that we enqueue
        * @return None
        */
        void enqueue(users *q, char line[UT_LINESIZE + UT_NAMESIZE + UT_HOSTSIZE + 10]);
        ```



    - ```c
        /**
        * @brief Allocate and initialize a new User queue
        * @param None
        * @return users* the allocated queue
        */
        users *setUp(void);
        ```

    - ```c
        /**
        * @brief Write the user information to the pipe.
        * @param write_fd the file descriptor to write to
        * @return None
        */
        void write_users_pipe(int write_fd);
        ```
    

    - ```c
        /**
        * @brief Read the user information from the pipe.
        * @param read_fd the file descriptor to read from
        * @return users* the queue of users
        */
        users* read_users_pipe(int read_fd);
        ```

    - ```c
        /**
        * @brief Write the cpu information to the pipe.
        * @param write_fd the file descriptor to write to
        * @param prev the previous cpu struct
        * @return None
        */
        void write_cpu_pipe(int write_fd, cpu_struct *prev);
        ```   
    
    - ```c
        /**
        * @brief Delete the users in the queue.
        * @param queue the queue to delete
        * @return users* the queue of users
        */
        users *delete_users(users *queue);
        ```  

    - ```c
        /**
        * display the header of the program
        * @param i the index of the sample
        * @param sequential the sequential flag
        * @param samples the number of samples
        * @param tdelay the delay between samples
        * @return None
        */
        void display_header(int i, int sequential, int samples, int tdelay);
        ```     

    - ```c
        /**
        * @brief Print the number of cores.
        * @param None
        * @return None
        */
        void print_cores(void);
        ```  

    - ```c
        /**
        * @brief Set the cpu values.
        * @param sample the cpu struct to set
        * @return None
        */
        void set_cpu_values(cpu_struct *sample);
        ```  

    - ```c
        /**
        * @brief Calculate the cpu usage.
        * @param prev the previous cpu struct
        * @param cur the current cpu struct
        * @return double the cpu usage
        */
        double calculate_cpu_usage(cpu_struct *prev, cpu_struct *cur);
        ```   

    - ```c
        /**
        * @brief Print the users in the queue.
        * @param queue the queue to print
        * @return None
        */
        void print_users(users *queue);
        ```  

    - ```c
        /**
        * @brief Print the machine information.
        * @param None
        * @return None
        */
        void print_machine_info(void);
        ```  

    - ```c
        /**
        * @brief Modify the memory graphics.
        * @param i the index of the sample
        * @param virt_used the virtual memory used
        * @param prev_virt the previous virtual memory
        * @param strArr the array of strings to modify
        * @return None
        */
        void modify_memory_graphics(int i, double virt_used, double *prev_virt, char strArr[][1024]);
        ```     

    - ```c
        /**
        * @brief Display the memory string at strArr[i].
        * @param sequential the sequential flag
        * @param samples the number of samples
        * @param i the index of the sample
        * @param strArr the array of strings to display
        * @return None
        */
        void display_memory_line(int sequential, int samples, int i, char strArr[][1024]);
        ```

    - ```c
        /**
        * @brief Display the cpu string at cpuArr[i].
        * @param sequential the sequential flag
        * @param samples the number of samples
        * @param i the index of the sample
        * @param cpuArr the array of strings to display
        * @return None
        */
        void cpu_graphics(char cpuArr[][200], int i, int sequential, int *num_bar, float cur_cpu_usage, float *prev_cpu_usage);
        ```         

<br />




<a id="problemsolving"></a>
## <span style="color:#ADD8E6">Problem Solving</span>
- How did I solve the problem(s)?

    - I solved the problem of implementing concurrency by attending multiple office hours held by the TAs and the instructor and by confirming my idea and implementation details with them. I thought of two approaches to solve the problem and chose the approach that made the most sense to me, which was to fork the processes in the main for loop and write to the appropriate pipe from the child processes, and in the main, wait for the processes to have finished their queries and read the necessary data from the pipe. When I first started the assignment, I was not very familiar with the idea of pipes, so I had to spend some time reviewing the concepts to get a good grasp of the communication methods.
    
    - To achieve concurrency, I had to modify my assignment 1 code and split the functions even further to enhance modularity and separation of tasks/queries based on writing and reading perspectives of the pipes. I also had to add additional structs to keep track of previous memory and cpu values. Fortunately, I took some time to read the manual pages that were provided in the assignment handout thoroughly, and asking the TAs for confirmation about the correct usage, I was able to use them and implement the required functionalities for my program.
    
    - Most importantly, I approached most problems I'd encountered by analyzing the behaviour of the program provided in Marcelo's video and brainstorming about how to solve the problem in my head before starting coding. For example, for the CPU graphics part and the number of bars that change with each iteration, I observed the pattern in the video and came up with the solution of taking the difference of the integer parts of the float current and previous CPU usage values and typecast the result to get the needed number of bars. Everything made sense when I took the time to think and brainstorm solutions. Lastly, office hours helped a lot with my understanding of some unclear instructions in the handout.

<a id="notes"></a>
## <span style="color:#ADD8E6">Notes</span>

- The utility only works on Linux systems.
- Entering ctrl + z repeatedly with minimal real time delay in between causes the program to speed up and ignore the sleep feature between samples. I went to Marcelo's office hours and he concluded based on my implementation that this is fine so long as I explain why this happens in my README file. 
- Explanation: The ctrl + z handler returns without doing anything and returns the execution control after the sleep call, therefore having an effect where it seems like the program is not sleeping. However, it does all the new calculations and updates the values accordingly without sleeping.

- The program uses the `/proc/stat` file to obtain information about the system, including CPU usage. The file is constantly updated by the system, so the information displayed may change over time.
- Was told by Marcelo that it is okay to use the `sysconf` function for counting the number of cores, instead of counting the number of cpu lines in /proc/stat
- The code assumes that there are at most 2 non-option arguments and that they must appear in the order samples then tdelay. If there are more or fewer arguments, or if they appear in a different order, the code might not work as intended.

<a id="references"></a>
## <span style="color:#ADD8E6">References</span>

- Reading /proc/stat: [kgottler](https://www.kgoettler.com/post/proc-stat/)
- Understanding cpu usage: [OpsDash](https://www.opsdash.com/blog/cpu-usage-linux.html)
- getopt(3) — [Linux manual page](https://man7.org/linux/man-pages/man3/getopt.3.html)
- Linux C library manual pages as linked in [requirements](#requirements)

<a id="contact"></a>
## <span style="color:#ADD8E6">Contact</span>
- creator: Minjun Kim
- email address: minjunn.kim@mail.utoronto.ca
