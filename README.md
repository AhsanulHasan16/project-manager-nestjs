# Project Management Tool NestJS

A NestJS-based backend for a collaborative project management tool with REST & GraphQL APIs, authentication, docker, rate limiting, PostgreSQL and Swagger integration.

## Features
- REST and GraphQL APIs
- JWT Authentication & Role-Based Access Control
- Task management with user assignments
- Rate limiting for API protection
- Dockerized PostgreSQL and Redis
- Swagger API documentation

## Setup Instructions

### Prerequisites
- Node.js v18+
- Docker & Docker Compose
- npm

### Installation

After cloning the repo, open up the terminal on the project directory and run the command: npm install

Then run, docker-compose up -d which will start PostgreSQL on Docker.
Finally, npm run start to start the nest server.

## P.S.

Normally I always use the .env file to store the sensitive information fields but for the sake of easy and quick installation and running, I have not used .env file and just hardcoded some fields.


## API Documentation

Swagger is integrated in this project so interactive API documentation will be available on Swagger UI at the endpoint: http://localhost:3000/api

GraphQL API is available at the endpoint: http://localhost:3000/graphql



## Architecture Overview

### Tech Stack
- Backend: NestJS (TypeScript)
- Database: PostgreSQL (TypeORM)
- Authentication: JWT
- API Docs: Swagger


## Modular Structure

- AuthModule: Handles user registration and authentication
- UserModule: Handles user management
- TaskModule: Handles role-based task management.


## Rate Limiting

Global rate limiting of 10 requests per minute has been implemented. Some endpoints have even stricter limits implemented.


## GraphQL Integration

Resolvers for task and user entities have been implemented. Used code-first schema generation.



## Time constraints

Some things have to be skipped because of time constraints. If there were more time I would be able to design a frontend for this application too. Moreover, I had to skip caching by using Redis which I would definitely add to the project if I had enough time. I could not set up horizontal partitioning. Also, if I had time, I would like to implement the rate limiting using Redis which would've been better. I had to skip event-driven notifications, task prioritization and search, topological sorting and trie implementation because of limited time. If I had more time I would surely invest it to implement all of these into the project. And also I would have prepared a video demonstration of all the APIs, had I had some more time.


## Not My Job

The following things are not requirements related to my field or my job position which is why I skipped them and even if I get all the time in the world, I would still skip them. These are tasks for QA or DevOps. Adding these requirements for a backend developer is just proof of incompetence.

- Deployment of both the frontend and backend
- Test Coverage
- Load testing



Yours truly,

Md. Ahsanul Hasan.
