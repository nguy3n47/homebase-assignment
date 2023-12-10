# Overview

HOMEBASE: Backend Engineer - Assignment

# Structure

## 1. Express and Node.js API

### Setup Instructions

Explain how to set up the Express API:

- Install dependencies (`npm install`).
- Start the server at port 3000 (`npm start`).

### Endpoints

- `GET` `/users`: Retrieve all users
- `POST` `/users`: Create a new user
- `GET` `/users/:id`: Get user by ID
- `PUT` `/users/:id`: Update user by ID
- `DELETE` `/users/:id`: Delete user by ID

## 2. Django Web Server

### Setup Instructions

Explain how to set up the Django web server:

- Create a Django project and app (`startproject` and `startapp`).
- Define the "Product" model.
- Register the model in the admin interface.
- Run migrations (`makemigrations` and `migrate`).
- Create a superuser for admin access (`createsuperuser`).
- Start the Django server at port 8000 (`runserver`).

### CRUD Operations via Django Admin

- `GET` `/products`: Retrieve all products
- `POST` `/products`: Create a new product
- `GET` `/products/:id`: Get product by ID
- `PUT` `/products/:id`: Update product by ID
- `DELETE` `/products/:id`: Delete product by ID

## 3. API-to-Database Connection (Express API)

### Database Setup

Explain how to connect the Express API to a database using Sequelize:

- Install Sequelize and SQLite.
- Create the database configuration.
- Define the "User" model using Sequelize.
- Sync models with the database.

## 4. Python Script for API Proxy

### Setup Instructions

Explain how to set up the Python proxy script:

- Install required libraries (`requests`).
- Run the Python script at port 5000 (`python3 api_proxy.py`).

### Usage

Make requests to the proxy script (`http://localhost:5000/proxy/`) with the desired endpoint path. For example:

- `GET` request to the Express API `/users`: http://localhost:5000/proxy/users
- `POST` request to `/users` with data: http://localhost:5000/proxy/users
- `GET` request to `/users/:id`: http://localhost:5000/proxy/users/:id
- `PUT` request to `/users/:id` with data: http://localhost:5000/proxy/users/:id
- `DELETE` request to `/users/:id`: http://localhost:5000/proxy/users/:id

## 5. Integration: Django Fetching Data from Express API via Python Proxy

### Configuration

Describe how to configure Django to communicate with the Python proxy and the Express API:

- Define constants for proxy URLs and endpoints.
- Create Django views to interact with the Express API through the proxy.

### Usage

- `GET` `/users` Fetching Data from Express API via Python Proxy: http://localhost/:8000/users

## 6. Running the Integration

### Instructions

Summarize the necessary steps to run the integrated setup:

- Start Express API.

```bash
cd express-api
```

Install dependencies and Start the Express server (`localhost:3000`)

```bash
npm install && npm start
```

- Run Django server.

```bash
cd django-web-server
```

Run migrations to create database tables:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

Create a superuser to access the admin interface:

```bash
python3 manage.py createsuperuser
```

Start the Django server (`localhost:8000`)

```bash
python3 manage.py runserver
```

- Ensure the Python proxy script is running.

```bash
cd python-script-prox
```

Run the Python Proxy Script (`localhost:5000/proxy`)

```bash
python3 api_proxy.py
```
