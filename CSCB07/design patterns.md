# <span style="color:#ADD8E6"> Design Patterns </span>

<div align="right"> Created by Minjun Kim </div>


## <span style="color:#ADD8E6">Table of Contents </span> 
  - [Introduction](#intro) 
  - [Creational Design Patterns](#creational)
    - [Singleton](#singleton)
    - [Factory Method](#factory)
  - [Structural Design Patterns](#structural)
    - [Facade](#facade)
    - [Adapater](#adapter)
  - [Behavioural Design Patterns](#behavioural)
    - [Observer](#observer)
    - [Strategy](#strategy) 

<a id="intro"></a>
## <span style="color:#ADD8E6"> Introduction </span> 

Design patterns are reusable solutions to common software design problems. They provide proven approaches for designing flexible, maintainable, and efficient software systems. Design patterns are categorized into three types: Creational, Structural, and Behavioral.


<a id="creational"></a>
## <span style="color:#ADD8E6">Creational Design Patterns </span> 

Creational design patterns focus on the object creation process. They provide mechanisms for creating objects in a way that promotes flexibility and decouples the client code from the concrete classes.

<a id="singleton"></a>
### <span style="color:#ADD8E6"> Singleton Method </span> 

The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. It is useful in scenarios where a single instance is required to control actions throughout the system.

```java
public final class Singleton {
    private static Singleton instance;

    private Singleton() {
        // Private constructor to prevent direct instantiation
    }

    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    // Other methods and data members...
}
```

<a id="factory"></a>
### <span style="color:#ADD8E6"> Factory Method </span> 
The Factory Method pattern provides an interface for creating objects, but it allows subclasses to decide which class to instantiate. It abstracts the object creation process, making the client code independent of the concrete classes.

```java
public interface Product {
    void create();
}

public class ConcreteProductA implements Product {
    @Override
    public void create() {
        System.out.println("Creating Product A");
    }
}

public class ConcreteProductB implements Product {
    @Override
    public void create() {
        System.out.println("Creating Product B");
    }
}

public abstract class Creator {
    public abstract Product createProduct();
}

public class ConcreteCreatorA extends Creator {
    @Override
    public Product createProduct() {
        return new ConcreteProductA();
    }
}

public class ConcreteCreatorB extends Creator {
    @Override
    public Product createProduct() {
        return new ConcreteProductB();
    }
}

```


<a id="structural"></a>
## <span style="color:#ADD8E6">Structural Design Patterns </span> 

Structural design patterns focus on how objects are composed to form larger structures. They help in defining relationships between classes and provide flexible ways to combine and use them.

<a id="facade"></a>
### <span style="color:#ADD8E6"> Facade </span> 

The Facade pattern provides a unified interface to a set of interfaces in a subsystem. It simplifies the client code by hiding the complexity of the subsystem behind a single interface.

```java
// Complex subsystem classes
class CPU {
    void processData() {
        System.out.println("CPU: Processing data...");
    }
}

class Memory {
    void loadProgram(String program) {
        System.out.println("Memory: Loading " + program + " into memory...");
    }
}

class HardDrive {
    void readData(String data) {
        System.out.println("Hard Drive: Reading data - " + data);
    }
}

// Facade class
class ComputerFacade {
    private CPU cpu;
    private Memory memory;
    private HardDrive hardDrive;

    public ComputerFacade() {
        cpu = new CPU();
        memory = new Memory();
        hardDrive = new HardDrive();
    }

    // Simplified startup method for the computer
    public void startComputer() {
        String program = "Operating System";
        System.out.println("ComputerFacade: Starting the computer...");
        cpu.processData();
        memory.loadProgram(program);
        hardDrive.readData(program);
        System.out.println("ComputerFacade: Computer started successfully.");
    }

    // Simplified shutdown method for the computer
    public void shutdownComputer() {
        System.out.println("ComputerFacade: Shutting down the computer...");
        System.out.println("ComputerFacade: Saving data...");
        System.out.println("ComputerFacade: Computer shutdown completed.");
    }
}

```

<a id="adapter"></a>
### <span style="color:#ADD8E6"> Adapter </span> 
The Adapter pattern allows incompatible interfaces to work together. It acts as a bridge between two interfaces, allowing them to collaborate seamlessly.

```java
// Existing interface
public interface MediaPlayer {
    void play(String audioType, String fileName);
}

// Incompatible class to be adapted
public class AdvancedMediaPlayer {
    public void playVlc(String fileName) {
        System.out.println("Playing vlc file: " + fileName);
    }

    public void playMp4(String fileName) {
        System.out.println("Playing mp4 file: " + fileName);
    }
}

// Adapter class
public class MediaPlayerAdapter implements MediaPlayer {
    private AdvancedMediaPlayer advancedMediaPlayer;

    public MediaPlayerAdapter(AdvancedMediaPlayer advancedMediaPlayer) {
        this.advancedMediaPlayer = advancedMediaPlayer;
    }

    @Override
    public void play(String audioType, String fileName) {
        if (audioType.equalsIgnoreCase("vlc")) {
            advancedMediaPlayer.playVlc(fileName);
        } else if (audioType.equalsIgnoreCase("mp4")) {
            advancedMediaPlayer.playMp4(fileName);
        }
    }
}
```


<a id="behavioural"></a>
## <span style="color:#ADD8E6">Behavioural Design Patterns </span> 

Behavioral design patterns focus on communication between objects and how they interact to achieve common tasks. They emphasize flexibility and extensibility in defining object interactions

<a id="observer"></a>
### <span style="color:#ADD8E6"> Observer </span> 

The Observer pattern defines a one-to-many dependency between objects, where one object (subject) notifies multiple observers of any state changes. Observers can register and unregister to receive updates from the subject.

```java
import java.util.ArrayList;
import java.util.List;

// Subject (Observable) interface
interface Subject {
    void register(Observer observer);
    void unregister(Observer observer);
    void notifyObservers();
}

// Concrete Subject (Observable) class
class ConcreteSubject implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private int state;

    public void setState(int state) {
        this.state = state;
        notifyObservers();
    }

    @Override
    public void register(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void unregister(Observer observer) {
        observers.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(state);
        }
    }
}

// Observer interface
interface Observer {
    void update(int state);
}

// Concrete Observer classes
class ConcreteObserverA implements Observer {
    @Override
    public void update(int state) {
        System.out.println("Observer A received state: " + state);
    }
}

class ConcreteObserverB implements Observer {
    @Override
    public void update(int state) {
        System.out.println("Observer B received state: " + state);
    }
}

```

<a id="strategy"></a>
### <span style="color:#ADD8E6"> Strategy </span> 
The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It allows clients to choose the appropriate algorithm at runtime.

```java
// Strategy interface
interface PaymentStrategy {
    void pay(double amount);
}

// Concrete Strategy classes
class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;
    private String expirationDate;

    public CreditCardPayment(String cardNumber, String expirationDate) {
        this.cardNumber = cardNumber;
        this.expirationDate = expirationDate;
    }

    @Override
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " with Credit Card " + cardNumber);
    }
}

class PayPalPayment implements PaymentStrategy {
    private String email;

    public PayPalPayment(String email) {
        this.email = email;
    }

    @Override
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " with PayPal account " + email);
    }
}

// Context class
class ShoppingCart {
    private PaymentStrategy paymentStrategy;

    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    public void checkout(double totalAmount) {
        paymentStrategy.pay(totalAmount);
    }
}

```


  
