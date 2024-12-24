# NoSQLNet

Project Overview


This project is a social network API built for a web application where users can share their thoughts, react to friends' posts, and create a friend list. The API uses a NoSQL MongoDB database to handle large amounts of unstructured data. Express.js is used for routing, and Mongoose is used as the Object Data Modeling (ODM) tool to interact with MongoDB. This application is designed to demonstrate the ability to build and structure an API for a social media platform, meeting the requirements outlined below.

Features


Users can create and update their accounts.
Users can share thoughts (posts).
Users can react to thoughts of others (via reactions).
Users can create a friend list to connect with others.
API routes allow the ability to retrieve, create, update, and delete users, thoughts, and reactions.
Technologies Used
Express.js: Web framework used for routing and handling HTTP requests.
MongoDB: NoSQL database for storing user data, thoughts, and reactions.
Mongoose: ODM library for MongoDB to define models and interact with the database.
JavaScript (Date object or external library): Used for managing timestamps.
User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data



Server Startup:

When the server is invoked, the Mongoose models are synced to the MongoDB database.
GET Routes:

When API GET routes for users and thoughts are accessed in Insomnia, data for each route is displayed in a formatted JSON response.
POST, PUT, DELETE Routes:

When testing API POST, PUT, and DELETE routes, users and thoughts can be successfully created, updated, and deleted from the database.
Reactions Management:

POST and DELETE routes allow reactions to thoughts to be created and deleted successfully, and users can add and remove friends.
API Routes
Users
GET /api/users
Retrieve all users.

GET /api/users/:userId
Retrieve a specific user by their ID.

POST /api/users
Create a new user.

PUT /api/users/:userId
Update an existing user's details.

DELETE /api/users/:userId
Delete a user.

Thoughts
GET /api/thoughts
Retrieve all thoughts.

GET /api/thoughts/:thoughtId
Retrieve a specific thought by its ID.

POST /api/thoughts
Create a new thought.

PUT /api/thoughts/:thoughtId
Update an existing thought.

DELETE /api/thoughts/:thoughtId
Delete a thought.

Reactions
POST /api/thoughts/:thoughtId/reactions
Add a reaction to a thought.

DELETE /api/thoughts/:thoughtId/reactions/:reactionId
Delete a reaction from a thought.

Friends
POST /api/users/:userId/friends/:friendId
Add a friend to the user's friend list.

DELETE /api/users/:userId/friends/:friendId
Remove a friend from the user's friend list.

Walkthrough Video
You can view the functionality of the application in the following walkthrough video:
https://drive.google.com/file/d/1PMjfkcSHpb5MEAJ-IJNRsI6P0fs3UMhl/view

https://drive.google.com/file/d/1MXXPwkd2HZtYWfaf3vQTZn8sfjv-DM6S/view


Acknowledgment

Thanks to Thomas White, Brock Altug, Alex Mena, Tala Awwad, Nancy Touma, Arman Tork, Maritza Diaz: my fantastic classmates with whom I worked on this project.

Thanks to John Young and Zac Warner from edX/UC Berkeley Full-Stack Bootcamp.
