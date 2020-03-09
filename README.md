# Game Critic

## A game review blog

### Requirements

- Docker Engine >= 19.03.5
- Docker Compose >= 1.25.4

### Getting Started

- Replace /back-end/.example.env ➡ /back-end/.env and update the environment variable values to your preference

- From the root directory run:

  ```sh
  $ MONGO_USER=yourUserName MONGO_PASSWORD=yourUserPassword docker-compose -f docker/docker-compose.yml build
  ```

  (yourUserName and yourUserPassword should match the values in your `.env` file)

- Once the build is complete run:

  ```sh
  MONGO_USER=dbadmin MONGO_PASSWORD=123123123 docker-compose -f docker/docker-compose.yml up
  ```

- Use a tool like Postman or Insomnia to create posts to localhost:5000/api/post

### Testing

- If you haven't done so already complete the first step of getting started

- From the root directory run:

  ```sh
  $ MONGO_USER=yourUserName MONGO_PASSWORD=yourUserPassword docker-compose -f docker/docker-compose.yml build
  ```

  (yourUserName and yourUserPassword should match the values in your `.env` file)

- Run the test with the following command:
  ```sh
  MONGO_USER=dbadmin MONGO_PASSWORD=123123123 docker-compose -f docker/docker-compose.yml up --abort-on-container-exit
  ```

#### User Stories

- [ ] As an avid video gamer I want a way to create blog posts for my video game reviews so that I can share my reviews in a way that my readers can respond to

#### Tasks

- [x] Initialize back-end api service
- [x] Create a Dockerfile for the back-end
- [ ] Create a Dockerfile for the front-end
- [x] Create a docker-compose config to run both api server and database
- [x] API endpoint for creating, retrieving, (Post)
- [ ] API endpoint for updating, and deleting reviews (Post)
- [ ] Unit tests for API endpoints
