# Kanban Board: ReactJS Web Application

This project was created as part of a Frontend developer assignment for [QuickSell](https://quicksell.co).

## Table of Contents

1. [Introduction](#introduction)
2. [Live Preview](#live-preview)
3. [How to Use](#how-to-use)
4. [Screenshots](#screenshots)
5. [Core Features](#core-features)
6. [Technology Stack](#technology-stack)
7. [Installation Guide](#installation-guide)

## Introduction

This web application interacts with the [API](https://api.quicksell.co/v1/internal/frontend-assignment) and enables users to modify the Kanban board dynamically based on their selected grouping and sorting criteria.

## Live Preview

You can explore a live version of the app [here](https://quickselliitbhu-kanban-board.vercel.app/), hosted on Vercel.

## How to Use

1. Press the "Display" button to access the options for "Grouping" and "Sorting."
2. Instantly modify the Kanban board layout according to your preferences for grouping and ordering.

## Screenshots

- Grouping by `Status`, Sorting by `Priority`:
  <img width="1440" alt="Grouped by Status, Sorted by Priority" src="https://github.com/subhh33/Kanban-Board/blob/main/src/assets/ss1.png">

- Grouping by `Status`, Sorting by `Title`:
  <img width="1440" alt="Grouped by Status, Sorted by Title" src="https://github.com/subhh33/Kanban-Board/blob/main/src/assets/ss2.png">

- Grouping by `User`, Sorting by `Title`:
  <img width="1440" alt="Grouped by User, Sorted by Title" src="https://github.com/subhh33/Kanban-Board/blob/main/src/assets/ss3.png">

- Grouping by `Priority`, Sorting by `Title`:
  <img width="1440" alt="Grouped by Priority, Sorted by Title" src="https://github.com/subhh33/Kanban-Board/blob/main/src/assets/ss1.png">

## Core Features

- Group tasks by Status, User, or Priority.
- Sort tasks by either Priority or Title.
- Fully responsive and attractive UI.
- Retains state even after page reloads.
- Reliable error handling to ensure smooth data retrieval.
- Optimized logic for performance.
- Modular, reusable components for ease of maintenance.

## Technology Stack

- [HTML5](https://html.com/)
- [CSS3](https://css3.com/)
- [JavaScript (ES6)](https://www.javascript.com/)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [React Icons](https://react-icons.github.io/react-icons)
- [React](https://react.dev)

## Installation Guide

To set up and run this project locally, follow these steps:

1. Open a terminal or command prompt.

2. Clone the repository: 

    ```bash
    git clone https://github.com/subhh33/Kanban-Board.git
    ```

3. Navigate to the project directory: 

    ```bash
    cd Kanban-Board
    ```

4. Install the dependencies:

    ```bash
    npm install
    ```

5. Run the development server:

    ```bash
    npm start
    ```

6. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app in action.

## Additional Notes

- **/demo route**: 
  I have added a `/demo` route to showcase the main Kanban board without making an API call. This route uses a local `demo.json` file to simulate data because the provided API was not returning data for `Canceled` and `Done` events. The `/demo` route allows you to interact with the board as if real data were loaded, providing a seamless experience without dependency on the external API.

