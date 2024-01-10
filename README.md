This is a base template project.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

# Project Instructions

We want to pull data from the star wars api and display it on the page. We will be using the free Star Wars Api `https://studio.apollographql.com/public/star-wars-swapi/variant/current/explorer` to fetch the data.

The endpoint we will be using is `https://swapi-graphql.netlify.app/.netlify/functions/index`


## Overview

The project will have two pages:

1. Home page: This page will display a 3x3 column layout and a list of cards with the title of the film and the director. The cards will be populated with data Star Wars gql api. Please make sure the cards are mobile responsive.

2. Contact page: This page will have a form with the following fields, name and email. The form will be validated and the user will be notified if the form is valid or not on the frontend. You will not need to use the API for this page, just the form validation on the frontend.

### Film Card

Each card should include an image, a title, and a description. The cards need to be mobile-responsive. Please use a free image from [Unsplash](https://unsplash.com/) as the image for each card.

### Contact Form

Form validation can be done with any library of your choice. The form should include the following fields:

- Name
- Email

Check validation for the name that its not empty and that the email is a valid email address.

## Tasks

1. **Star Wars Film Cards:** Modify the GraphQL query below to fetch the necessary content from the API.

   ```graphql
   # Example GraphQL Query
   query ExampleQuery {
     allFilms {
        edges {
            node {
                title
                director
            }
        }
     }
   }
    ```
2. Please use tailwind css for the styling of the page. You can use any other library you want for the form validation. The tailwind docs can be found here [tailwindcss](https://tailwindcss.com/docs/installation)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
