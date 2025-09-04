<!-- A User Management Application built with Angular 14+ and NgRx for state management, featuring a login page (mock authentication) and a dashboard for managing users. The backend is simulated using json-server.

Features

Login Page

Simple username/password form

Redirects to dashboard on login

User Management Dashboard

List, Add, Edit, Delete users

State managed via NgRx

Backend Integration

CRUD via json-server REST API

UI & Styling

Responsive and accessible design

Optional: Angular Material components

Bonus

Nx workspace for modular architecture

Unit tests for components, services, and NgRx store

Form validation and error handling

Tech Stack

Frontend: Angular 14+, NgRx

Backend: json-server

Monorepo: Nx Workspace (optional)

Version Control: Git

User Data Example
{
  "id": 1,
  "username": "johndoe",
  "email": "john@example.com",
  "job-role": "tech"
}


Job role options: tech, id, gd, qa

Setup Instructions
Prerequisites

Node.js >= 18.x

npm >= 9.x

Angular CLI >= 14.x

Clone & Install
git clone <repository-url>
cd <project-folder>
npm install

Run json-server
npm run json-server


API runs at http://localhost:3000/users

Run Angular App
ng serve


Open http://localhost:4200

Run Tests
ng test

Project Structure
/apps         → Angular app (login, dashboard, components)
/libs         → Shared modules, services, NgRx store
/assets       → Styles & static assets


NgRx Store: Actions, reducers, effects, selectors

Services: HTTP requests for user CRUD

Usage

Start json-server

Launch Angular app

Login with any username/password

Manage users: Add, Edit, Delete

Design Decisions

NgRx ensures predictable state management

Reactive forms with validation for user forms

json-server provides quick backend simulation

Nx workspace (optional) for modular, scalable code

Responsive and accessible UI -->