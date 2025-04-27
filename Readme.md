express-users-api

A simple Express.js server for managing users with basic CRUD operations (Create, Read, Update, Delete).

Features

Get all users

Search users by name or displayname

Add a new user

Update a user (full update - PUT)

Update a user (partial update - PATCH)

Delete a user

Sample /api/product route

Installation

bash
Copy
Edit
git clone https://github.com/Kiran5258/express-users-api.git
cd express-users-api
npm install
Running the Server
bash
Copy
Edit
npm start
Server will run at:

bash
Copy
Edit
http://localhost:3000
(or the port you set in .env)

Method                 | Endpoint                    | Description

GET                    | /api/users                  | Get all users or search users

GET                    | /api/users/:id              | Get a single user by ID

POST                   | /api/users                  | Add a new user

PUT                    | /api/users/:id              | Update entire user

PATCH                  | /api/users/:id              | Update partial user

DELETE                 | /api/users/:id              | Delete a user

GET                    | /api/product                | Get sample product


Example Request

POST /api/users

json
Copy
Edit

{
  "name": "Alice",
  "displayname": "ali"
}

Tech Stack

Node.js

Express.js

Author

Made with ❤️ by Kiran Kumar

License

This project is licensed under the MIT License.
