# News Webscrapper
 A news webscrapper to get all the latest news

 ## Tech : NodeJs, Express, Cheerio

 ## React Native App created using this 👉🏻👉🏻 https://github.com/aniketsinha5552/NewsPiece

 ## Local Setup
 - run `npm install` to install all the dependencies
 - run `npm start` to start the server

## API Endpoints
- GET `/news` 
Get all the news from all the sources

- GET `/news/:source ` :
Get all the news from a particular source (toi/ thehindu/ cnn/ aljazeera)

- POST `/news/search/:query` 
Search news
Body: {search: "query"}

