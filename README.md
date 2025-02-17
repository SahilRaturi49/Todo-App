## Todo-App

A simple **Todo List API** built with **Node.js, Express, and MongoDB**.

## Features
- **Create, Read, Update, and Delete (CRUD)** todos
- **RESTful API** using Express.js
- **MongoDB Database** for data persistence
- **CORS enabled** for cross-origin requests
- **Body parsing** with body-parser

## Prerequisites
Make sure you have the following installed:
- **Node.js** (v14+ recommended)
- **MongoDB** (running locally or using a cloud service like MongoDB Atlas)
- **Git**

## Installation

### 1. Clone the Repository
```sh
git clone https://github.com/SahilRaturi49/Todo-App.git
cd Todo-App
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start MongoDB
Make sure MongoDB is running locally. If using a local MongoDB instance, you can start it with:
```sh
mongod
```

If using MongoDB Atlas, update the **MONGO_URI** in `server.js`:
```js
const MONGO_URI = 'your-mongodb-atlas-uri';
```

### 4. Start the Server
```sh
npm start
```
By default, the server will run on `http://localhost:3000/`.

## API Endpoints

### Create a Todo
**POST** `/api/todos`
#### Request Body:
```json
{
  "title": "Buy groceries"
}
```
#### Response:
```json
{
  "_id": "650a1d2c36f3a432c4a8c93a",
  "title": "Buy groceries",
  "completed": false,
  "date": "2024-02-07T10:00:00.000Z"
}
```

### Get All Todos
**GET** `/api/todos`
#### Response:
```json
[
  {
    "_id": "650a1d2c36f3a432c4a8c93a",
    "title": "Buy groceries",
    "completed": false,
    "date": "2024-02-07T10:00:00.000Z"
  }
]
```

### Update a Todo
**PUT** `/api/todos/:id`
#### Request Body:
```json
{
  "completed": true
}
```
#### Response:
```json
{
  "_id": "650a1d2c36f3a432c4a8c93a",
  "title": "Buy groceries",
  "completed": true,
  "date": "2024-02-07T10:00:00.000Z"
}
```

### Delete a Todo
**DELETE** `/api/todos/:id`
#### Response:
```json
{
  "message": "Task deleted successfully"
}
```

## Project Structure
```
Todo-App/
│── models/
│   ├── todoModels.js       # Mongoose Schema for Todo
│
│── routes/
│   ├── todoRoutes.js       # Express Router for CRUD operations
│
│── server.js               # Main server file
│── package.json            # Project dependencies and scripts
│── README.md               # Documentation
```

## Technologies Used
- **Node.js** – Backend runtime
- **Express.js** – Web framework for handling routes
- **MongoDB & Mongoose** – Database and ODM
- **Cors & Body-Parser** – Middleware for API handling

## Contribution
Feel free to fork this repository and create a pull request!


## Author
[Sahil Raturi](https://github.com/SahilRaturi49) 🚀


