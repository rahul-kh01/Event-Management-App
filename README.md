# Event Management System

## Overview
This application is an Event Management System built using React for the frontend and Spring Boot for the backend. The database used is MySQL. The application allows users to manage events by adding, updating, deleting, and viewing event details. Additionally, users can register attendees to events.

## Features
### Backend
- **Database:** MySQL
- **API Endpoints:**
  - Fetch all events
  - Add a new event
  - Update event details
  - Delete an event by its ID
  - Register an attendee to an event

### Frontend
- **Components:**
  - Form component for inputting event details (event name, description, date, location)
  - List component to display all events
  - Detail view for each event, displaying all information and a list of attendees
- **Functionalities:**
  - Fetch and display the list of events from the backend when the page loads
  - Add a new event through the form
  - Update event details using an edit button
  - Delete an event by its ID using a delete button
  - Register an attendee to an event

### UI/UX and Styling
- User-friendly interface
- Custom styles written in CSS/SCSS
- Responsive design across different device sizes

## Prerequisites
- React.js
- npm
- Java
- MySQL

## Installation and Setup
1. **Clone the repository:**
    ```bash
    git clone https://github.com/SithuminiNimthara/Event-Management-Application.git
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
- Open your browser and navigate to `http://localhost:3000` to access the frontend application.
- Use the form to add new events, view the list of events, update event details, delete events, and register attendees.

## Contact
For any questions or inquiries, please contact (sithumininimthara@gmail.com).

