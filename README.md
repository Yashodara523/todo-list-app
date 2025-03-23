# todo-list-app
A repository containing two tasks: a basic to-do list application built using Java Spring Boot and solutions for algorithm challenges written in JavaScript, including string reversal, finding the second-largest number in an array, and palindrome check

# To-Do List Application
This is a simple to-do list application that allows users to:

- Add tasks

- Mark tasks as completed

- Delete tasks

- View the list of tasks

# Features:
- Add a Task: Users can add tasks to the to-do list.

- Mark Task as Completed: Tasks can be marked as completed.

- Delete a Task: Users can remove a task from the list.

- View Tasks: Displays the current list of tasks.

# Getting Started
Clone the repository to your local machine:

```
git clone https://github.com/your-username/todo-list-app.git
```
Navigate to the project directory:

```
cd todo-list-app
```
Update application.properties with your database configuration:

```
spring.datasource.url=jdbc:mysql://localhost:3306/db_todolist
spring.datasource.username=root
spring.datasource.password=root
```
Build the project using Maven:

```
mvn clean install
```

Run the application using Maven:

```
mvn spring-boot:run
```

Open your web browser and navigate to http://localhost:8080 to access the application.

