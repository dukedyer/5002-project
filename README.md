# We are modeling an airport domain

- **schema name**: db_final_project
- [Schema description meeting project requirements](data/uml/README.md)
- [UML diagram](data/uml/db_final_project_uml.pdf)
- [SQL table dump](data/dump/)
- [Code: backend and frontend](code/)


# P1 Table Buildout Checklist:

- [x] Airlines
- [x] Roles
- [x] Status
- [x] Plane
- [x] Trip
- [x] User
- [x] Passenger
- [x] Employee
- [x] Ticket
- [x] Task
- [x] Task Assignment


# P2 backend/frontend tables:

- User
- Passenger
- Ticket
- Plane

# P3 Documentation:

### Project

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

### Team
- Logan Mednick:  CS5200 12293 Database Management Sys SEC 02 Fall 2021
- Brandon Dyer:   CS5200 12293 Database Management Sys SEC 02 Fall 2021
