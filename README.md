# Pintu FE Candidate Task

## Demo link:

Access my site at [pintu-fe-task.vercel.app/market](https://pintu-fe-task.vercel.app/market)

## Full Documentation:

Read full documentation for deeper explanation about the app design and technology usage here:
https://docs.google.com/document/d/124Lf9AGvE1jUbNWZabioBsPFNNP7ZAHtUHWAiiBAydU/edit?usp=sharing

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Improvement Opportunities](#improvement)

## About The Project

This project is built as part of Frontend Web Engineer candidate test in Pintu. In general, it's a replication from [Pintu market site](https://pintu.co.id/market) with focus on the token list feature. Users can view a table containing a list of tokens available in Pintu site. The table provides sorting options based on price and price changes over different time frames such as day, week, month, and year. Additionally, there is a prominent section above the table showcasing the top 6 tokens that have experienced the most significant price changes in the past 24 hours. This app has support for mobile view and good responsiveness as well.

## Screenshots

- Dekstop
  ![Market Dekstop](/docs/screenshots/market_dekstop.png)

- Mobile
  ![Market Mobile](/docs/screenshots/market_mobile.png)

## Technologies

**Main Stacks**

- React 18
- Typescript
- Tailwind CSS
- Material UI
- Axios
- react-query

**Supporting Utils**

- Eslint
- Prettier
- Husky (for pre-commit)
- Storybook

**Testing**

- Jest
- React testing library

**Deployment**

- Vercel

**Backend**

- [Cors-anywhere](https://www.npmjs.com/package/cors-anywhere) in separate repo: https://github.com/bananaabread00/node-cors-proxy

## Setup

- Download or clone this repository
- Run `npm install` to install all depedencies
- To run the app in development mode, run `npm start`.
  Then open `http://localhost:3000` to view it in the browser.
- To build the app, run `npm run build`.
  The build result can be found in `/build` folder.
- To run the test suites, run `npm run test`.
  The coverage file can be found in `/coverage` folder.
- To view the storybook, run `npm run storybook`.
  Then open `http://localhost:6006/?path=/docs` to view it in the browser.

## Improvement Opportunities

- Utilize caching and prefetch (can use react-query as well) to make the data fetching more efficient. Especially for fetching token logos now I still call the s3 url for each token everytime the page is being reloaded.
- Consider adding pagination for the token list table to help reduce the amount of data that needs to be fetched and displayed, especially if the token list amount continues growing. This approach also optimizes performance and ensures that the table remains responsive and user-friendly, even when dealing with a large dataset.
- Consider modifying the price-changes API to only send changed data to reduce size of payload data.
- Consider using web-sockets for real time data updates between FE and BE, so BE will notify FE for every data change without periodic API calls.
