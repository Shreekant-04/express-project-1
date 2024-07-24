# Fictional Company Web Application

This project is a web application built using the Express framework, generated with the Express Generator tool.
The application serves as a basic company website for a fictional company, showcasing various features including home, about, contact pages, and dynamic user profiles.
The project structure follows a standard MVC (Model-View-Controller) pattern commonly used in web development.

## Features

1. **Home Page**: Introduces the fictional company, providing an overview of its services and mission.
2. **About Page**: Details the company's history, mission, and team.
3. **Contact Page**: Offers information on how to contact the company, including email, phone, and address details.
4. **User Profiles**: Dynamically generated pages displaying user-specific information based on the URL parameter.

## Project Structure

- **app.js**: Main application file where the Express app is configured. It sets up middleware, the view engine, static file serving, and routes.
- **routes/index.js**: Defines the routes for the application, including the root, about, contact, and dynamic user routes.
- **views/**: Contains the EJS template files for rendering the different pages of the application.

## Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Shreekant-04/express-project-1.git
