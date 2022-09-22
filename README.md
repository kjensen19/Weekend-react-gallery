# React photo gallery

## Description

# Duration: 4 days

The idea behind this project was to use React to create an app that renders images dynamically, counts likes, pictures can be "flipped" to show a description etc

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites
NodeJS as well as:

  "dependencies": {
    "@emotion/react": "^11.10.4",
    "@emotion/styled": "^11.10.4",
    "@mui/icons-material": "^5.10.3",
    "@mui/material": "^5.10.5",
    "axios": "^0.19.2",
    "body-parser": "^1.20.0",
    "express": "^4.17.1",
    "multer": "^1.4.5-lts.1",
    "pg": "^8.8.0",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-scripts": "^5.0.1"
  },

## Installation


1. Create a database named `react-gallery`,
2. The queries in the `database..sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal to start the node server
5. Run `npm run client` in your terminal to start React
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Upon arrival at the site, all currently uploaded images render
2. Images display with a like count, a heart icon (to like the image) and a trashcan to remove the image
3. Clicking on an image will hide the image and show the "back" of the picture which is a brief description
4. Add the bottom of the page there is a button to upload images along with a description
5. At this time the page must be manually refreshed in order to see the newest image


## Built With
NodeJS
Express
PG
Postico
Multer
MUI (Material UI)
React
JS
HTML/CSS
axios

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io), all of the L'engle cohort.

## Support
If you have suggestions or issues, please email me at kjensen19@gmail.com