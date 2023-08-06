# News Web scraper
 A news webscrapper that gets all latest news from popular channles

 ## Tech : NodeJs, Express, Cheerio

 ## React Native App 👉🏻👉🏻 https://github.com/aniketsinha5552/NewsPiece

 ## Local Setup
 - run `npm install` to install all the dependencies
 - run `npm start` to start the server `http://localhost:5000/`

## API Endpoints
- GET `/news` 
Get all the news from all the sources

- GET `/news/:source ` :
Get all the news from a particular source (toi/ thehindu/ cnn/ aljazeera)

- POST `/news/search/:query` 
Search news
Body: {search: "query"}

