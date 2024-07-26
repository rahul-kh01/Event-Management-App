
# Event Management System

## Overview
The Event Management System is a comprehensive application developed with React for the frontend and Spring Boot for the backend, using MySQL as the database. This system enables users to efficiently manage events through features such as adding, updating, deleting, and viewing event details. Additionally, users can register attendees for events.

## Features
### Backend
- **Database:** MySQL
- **API Endpoints:**
  - Retrieve all events
  - Create a new event
  - Modify event details
  - Remove an event by its ID
  - Register an attendee for an event

### Frontend
- **Components:**
  - Form component for entering event details (event name, description, date, location)
  - List component to display all events
  - Detail view for each event, including all information and a list of attendees
- **Functionalities:**
  - Load and display events from the backend on page load
  - Add new events using the form
  - Edit event details via an edit button
  - Remove events by ID using a delete button
  - Register attendees for events

### UI/UX and Styling
- Intuitive user interface
- Custom styles implemented with CSS/SCSS
- Responsive design for various device sizes

## Prerequisites
- React.js
- npm
- Java
- MySQL

## Installation and Setup
1. **Clone the repository:**
    ```bash
    git clone https://github.com/rahul_kh01/Event-Management-App.git
    cd eventmanagementsystem
    ```

2. **Backend Setup:**
    - Navigate to the backend directory:
      ```bash
      cd eventmanagementsystem
      ```
    - Create a MySQL database:
      ```sql
      CREATE DATABASE eventdb;
      ```
    - Update the `application.properties` file with your database credentials:
      ```properties
      #configuration
      
      spring.jpa.hibernate.ddl-auto=update
      spring.datasource.url=jdbc:mysql://localhost:3307/eventdb
      spring.datasource.username=root
      spring.datasource.password=
      spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
      server.port=8081
      spring.jackson.date-format=yyyy-MM-dd
      ```
    - Build and run the Spring Boot application:
      ```bash
      ./mvnw spring-boot:run
      ```

3. **Frontend Setup:**
    - Navigate to the frontend directory:
      ```bash
      cd eventfrontend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Start the React application:
      ```bash
      npm start
      ```

## Usage
- Open your browser and go to `http://localhost:3000` to access the frontend application.
- Use the form to add new events, view the list of events, update event details, delete events, and register attendees.

## Contact
For any questions or inquiries, please contact (dynamicrahul952156gmail.com).

---

Feel free to adjust any details as needed!
