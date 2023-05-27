# Week 1

## Introduction to Software Engineering

### Software Development Lifecycle

- Guides the software development process
- Systematic process to develop high quality software
- Identify discrete steps needed to develop software
- Meets the requirement of the client
- Cycle of planning, design, and implement
- Minimizes the development risks and costs

### Phases in SDLC
#### Six Stages of SDLC
- Planning: requirement gathering and development of the SRS.
- Design: The architecture is developed during the design phase and the design document is created.
- Development: Coding takes place.
- Testing: Issues with the code are found and fixed if possible.
- Deployment: Releasing the code to the production environment.
- Maintenance: Feedback is collected from stakeholders, offer UI issues may be identified, and code enhancements suggested.

Use Cases
- Projects where failures and downtimes are unacceptable (i.e. medical software, aviation fleet, management software)

- SDLC vs STLC

Agile Software Development
- A set of software engineering best practices (allowing for rapid delivery of high quality software)
- A business approach (alignment of business/client needs with goals)

Extreme Programming
- iterative incremental model
- emphaises on technical aspects of software development.
- customer's decision drives the project
- in a nutshell, about good practices taken to an extreme.
- Pair-programming, testing early.
<img src="/images/p1.png" alt="Alt Text" style="width:50%;">


## Section 2

### Scrum Elements
#### Product
- Product Backlog
- Sprint Backlog

#### Process
- Sprint planning and backlog meeting
- Daily scrum meeting
- Sprint Retrospective
- Sprint Review Meeting

<img src="/images/p2.png" alt="Alt Text" style="width:50%;">

#### Product Backlog/Sprint Backlog
- Product backlog: all the features of the product
- Sprint Backlog: all the features that will be worked on for that sprint. Should be broken down into discrete tasks.
    - Refined
    - Estimated
    - Assigned to individual, who will work on the story
    - Acceptance criteria should be clear
- User stories are used in sprints to deliver work.

- Scrum Meetings
    - Sprint Planning Meeting
        - Entire team decide together what to tackle for that sprint.
    - Daily Scrum Meeting
        - Quick meeting to touch base on:
            Q. What did you do yesterday?
            Q. What do you plan to do today?
            Q. Do you need help?
    - Sprint Retro: Review the sprint progress
    - Sprint Review: Review the product

#### Scrum Process
 -> planning -> Implementation -> Review -> Retrospect ->

Small Releases

#### Twelve Principles of Agile
Individuals and Interactions
- 1. Projects are built around motivated individuals, who should be trusted.
- 2. Face-to-face conversation is the best form of communication (co-location)
- 3. Self-organizing teams
Working Software
- 4. Working software is delivered frequently (weeks rather than months)
- 5. Working software is the principal measures of progess
- 6. Sustainable development, able to maintain a constant pace.
- 7. Continuous attention to technical excellence and good design.
- 8. Simplicity: the art of maximizing the amount of work not done - is essential

Customer Collaboration
- 9. Customer satisfaction by rapid delivery of useful software.
- 10. Close, daily cooperation between business people and developers.

Responding to change
- 11. Welcome changing requirements, even late in development
- 12. Regular adaption to changing circumstances

Pair programming Style
- Driver/Navigator
    - Driver types the code
    - Navigator reviews the code as it's written
- Ping-pong
    - First developer writes a test
    - Second developer writes a code to pass the test

- Strong style
    - Pair a junior programmer with senior one
    - Senior programmer is navigator
    - Junior programmer is driver

- Test Driven Development
    - Programmers write a failing unit test case for the simplest piece of functionality that you need to implement.
    - Simplest code to pass the test
    - Refactor the code to pass or meet the standards of the code.

- Continuous Integration (CI)
    - New code is integrated with the current system after no more than a few hours. When integrating, the system is built from scratch and all tests must pass or the changes

- Continous Deployment (CD)
    - is closely related to Continuous Integration and refers to keeping your application deployable at any point or even automatically releasing to a test or production environment if the latest version passes all automated tests.
