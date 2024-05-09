# Microgen Server

Microgen Server is a Node.js application built with Express and MongoDB, providing endpoints to manage user data related to power generation and consumption.

## Server Vercel Endpoint

- https://microtest-ivory.vercel.app/

## Prerequisites

- Node.js installed on your machine
- MongoDB instance running
- Environment variables set in a `.env` file:
  - `PORT`: Port number for the server (default: 3000)
  - `MONGO_CONNECT_URL`: MongoDB connection URL

## Installation

1. Clone the repository:


2. Install dependencies:


3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add `PORT` and `MONGO_CONNECT_URL` variables

## Usage

Start the server:


The server will start on the specified port (default: 3000).

## Endpoints

### GET /
- Description: Check if the server is running
- Response: "Microgen server is up and running"

### POST /api/newUser
- Description: Create a new user
- Request Body: User object
- Response: JSON with a message and the created user

### GET /api/users
- Description: Get all users
- Response: JSON array of users

### GET /api/users/generated/:tokenId
- Description: Get the generated power for a given token ID
- Parameters:
  - `tokenId`: User token ID
- Response: User's generated power

### GET /api/users/consumed/:tokenId
- Description: Get the consumed power for a given token ID
- Parameters:
  - `tokenId`: User token ID
- Response: User's consumed power

### PATCH /api/users/update/:tokenId
- Description: Update a user's data
- Parameters:
  - `tokenId`: User token ID
- Request Body: Updated user data
- Response: JSON with the updated user

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

[MIT](LICENSE)
