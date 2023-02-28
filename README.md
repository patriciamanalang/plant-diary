# Plant Diary 🌱

A full stack web application for plant enthusiasts who want to organize and keep track of the growth/development of their plants.

## Why I Built This

As a plant lover, I've always wanted a place where I can keep track of every single plant that I own. Taking care of multiple plants can be quite overwhelming. I often forget which plant I recently repotted or when exactly was the last time I watered a plant. This is why I built Plant Diary, this application makes it easier for plant lovers to organize all of their plants in one place.

## Link Demo

Try the application live here: https://plant-diary.patriciamanalang.tech/

## Technologies Used

- React
- Node.js
- Express.js
- PostgreSQL
- Webpack
- JavaScript (ES6)
- HTML5
- CSS3
- Babel
- Pgweb
- AWS
- Dokku

## Features

- Users can add a plant on their "My Plants" list.
- Users can view a list of the plants they are currently tracking.
- Users can delete a plant from their "My Plants" list.
- Users can view a page dedicated for each plant.
- Users can upload a photo of a plant.
- Users can add notes about the plant photo.
- Users can edit the notes.
- Users can delete the entire plant entry.
- Users can create an account.
- Users can login/logout of thier account.

## Preview



![Kapture 2023-02-28 at 13 32 04](https://user-images.githubusercontent.com/109925604/221985402-993fbe8e-b8de-4e16-a5a7-25909a9d8d33.gif)



### Getting Started

1. Clone the repository.

    ```shell
    git clone git@github.com:patriciamanalang/plant-diary.git
    cd plant-diary
    ```

2. Install [PostgreSQL](https://www.postgresql.org/download/)

3. Install all dependencies with NPM.

    ```shell
    npm install
    ```

4. Create a `.env` file from the example template and update `TOKEN_SECRET` value

    ```shell
    cp .env.example .env
    ```

 5. Start PostgreSQL and create the database
    ```shell
    sudo service postgresql start
    createdb nameOfDatabase
    ```

 6. Update `DATABASE_URL` value to point to your PostgreSQL database.

7. Initialize the database
    ```shell
    npm run db:import
    ```

8. Start the project. Once started, you can view the application by opening `http://localhost:3000` in your browser.

    ```shell
    npm run dev
    ```
