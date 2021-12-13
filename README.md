# CS 5200 Final Project - Fall 2021

### Project Name: Airport Workflow Database

### Team
- Logan Mednick:  CS5200 12293 Database Management Sys SEC 02 Fall 2021
- Brandon Dyer:   CS5200 12293 Database Management Sys SEC 02 Fall 2021

### Links
- **schema name**: db_final_project
- [Schema outline](data/uml/README.md)
- [UML diagram](data/uml/db_final_project_uml_p3.pdf)
- [SQL table dump](data/dump/)
- [Code: backend and frontend](code/)

### Project Description

Our project consists of an airport database to simulate the information / transactions necessary to maintain an adequate workflow in this environment. We feature various user and domain object models to simulate the various aspects of an airport and provide an easy to use GUI in order to perform various CRUD operations on the various tables of the database.

### User Data Model Description / Relations

Our project utilizes two user data models in order to represent both Passengers and Employees. This is implemented in our database via inheritance, as both of these classes are concrete classes of a User abstract class. Each User contains the basic required attirubtes such as first and last names, username, password, email, and birth date. In addition to these, Passengers contain a created date attribute and Employees contain start date, role, airline, and manager attributes. Each user has a many to many relationship with Trips, while Employees specifically have a many to one relationship with other Employees as well as a many to many relationship with Tasks.

### Domain Object Model Descriptions / Relations

Our project has implemented the following domain objects:

- Tickets: These contain crucial flight information regarding a trip's boarding date, boarding group, and departure date. This domain object acts as an intermediary between the User to Trip many to many relationship. The Ticket table has many to one relationships with the User, Plane, and Trip tables.
- Planes: This table contains information relating to a given plane including its name and serial number. This table has a one to many relationship with Ticket.
- Trips: This table contains information regarding a given trip such as origin / destination airports as well as airline. This table has a many to many relationship with User and a one to many relationship with Task.
- Tasks: This table represents a task that an employee would execute as part of a routine flight. It contains information such as the task's name and status. It has a many to many relationship with Employee and a many to one relationship with Trip.
- Task Assignments: This table represents a given Employee assignment to a certain task and acts as an intermediary between the Employee to Task many to many relationship. Thus, this table has many to one relationships with both the Employee and Task tables.

### Portable Enums

We utilize three portable enumerations in this project:

- Airline: This enum contains three major airline names in order to ensure that a given Trip or Employee is constrained to a legitimate airline. These airlines are AMERICAN, DELTA, and SOUTHWEST.
- Role: This enum contains the various roles of the Employees in our database. This helps us with the Employee to Employee relation as each Employee has a manager. These roles are PILOT, FLIGHT ATTENDANT, GATE ATTENDANT, and MANAGER.
- Status: This enum contains the various statuses of a given Task. This is used in order to track a Task's completion. These tasks are NOT STARTED, IN PROGRESS, COMPLETE, and BLOCKED.

### User Interface

Our user interface is easy to navigate straight from the home screen. When launching the page, simply choose from the displayed list of tables to display that table's contents in a list. From this list window, you can add a new entry into the table, or select an existing entry in order to modify its attributes. Each entry's edit screen will link to each of the tables that it is related to and will allow you to navigate to their edit screens as well by clicking on the links in their respective lists.

# P3 Descriptions

**Problem statement - describe the problem that your project is trying to solve**

We seek to provide online visibility to the management of an airport. Airports have many job functions essential to their operation, Additionally, airports have a high volume of travelers that demand accurate, accessible data for their travel itinerary. Manual tracking of airport employees and passengers is an almost insurmountable task given the small margin of error that is expected in airport record keeping.

**Solution statement - describe the solution you implemented to solve the problem**

Our solution creates a platform for accurate, relational record keeping for of passenger travel and employee job functions within an airport. Specifically, our domain model and web app allows for the creation of passengers, tickets, and planes. Additionally, airport/airplane employees can be given different roles (flight attendant, gate attendant, etc) and assigned job specific tasks. Essentially, our solution seeks to manage the functions within an airport and airplane.

**User - describe the typical user(s) that would use your solution**

The typical user would be a DBA or project manager working at the airport. This person would have the ability to create tickets for passengers as well as assign specific staff to trips. It is a platform that seeks to enable end-to-end administration of the airport.

If a form of authentication/user profiles were implemented in the future, then you may see passengers interacting with the web app to book tickets on specific trips. However, since the web app user profiles were out of scope for this project, access to the tables and record creation was left open. Therefore, the ideal user is one that is allowed to access all the tables and have full visibility into the functions of an airport

**Domain objects - describe at least two of the domain objects you implemented in your solution**

The Plane represents an airplane. Planes have an serial number and a name associated with them. The passenger's Ticket has a reference to the Plane that they will board for their trip, as expected with a flight.

The Task is just that, a task, assigned to an employee that is necessary for the successful completion of a trip. Tasks can be thought of as a checklist that employees must complete. For example a task a flight attendant may have assigned to them is to "perform safety announcements", which are done after boarding a plane, pre-departure.
