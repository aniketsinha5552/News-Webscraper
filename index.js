const express =require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');


const app = express();

app.use(cors());


app.listen(5000, () => {
    console.log('Server running on port 5000');
})

app.get('/', (req, res) => {
    res.send('Hello World');
})

// news

    const url = "https://timesofindia.indiatimes.com"
    let res = axios.get(url).then(res => {
        let data = res.data
        let $ = cheerio.load(data)
        let news = []
        $('.col_l_6').each((i, elem) => {
             const title = $(elem).find('a').text()
            const link = $(elem).find('a').attr('href')
            const img = $(elem).find('a').find('img').attr('placeholdersrc')
            news.push({
                title,
                link,
                img
            })
        })
        console.log(news)
    })
   
