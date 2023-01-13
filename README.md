# README

Clairvoyant is a full stack clone of Medium, a popular blog host with a mix of amateur and professional journalism. It allows users to post articles and read other users' articles. Users can comment, post, like, bookmark, and share as well. Articles and comments have full CRUD functionality, and users can search articles and filter by topic.

## Clairvoyant Stack:
* Backend: Ruby on Rails
  * Used for models, controllers, routes
  * Pases data to frontend via JBuilder/JSON
* Database: PostgreSQL
  * Connected to backend via a rails framework
* Image Hosting: AWS
  * Article images [and user icons] are stored on S3
* Frontend: Javascript + React/Redux
  * Written in Javascript
  * Uses React to render components and Redux for state management
* [APIs: ChatGPT]

## Installation
1. Clone the repository: git clone https://github.com/3anni/clairvoyant.git
2. Install the dependencies
  * From the root directory, run `bundle install`
  * From the frontend directory, run `npm install`
3. Seed and configure the database with rails commands using `seeds.rb` file
  * You'll need to have PostgreSQL installed and running
4. Run the application
  * From the root directory, run `rails server`
  * From the frontend, run `npm start`
  * In development mode, the frontend is served up on port 3000 and the backend on 5000
  * In production mode, the app is served on port 500

Production build: from the root folder, run `NPM run build`

## Selected Features and Development



## Selected Features
Create articles




This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
