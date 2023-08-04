const router = require('express').Router();
const axios = require('axios');
const cheerio = require('cheerio');

const toi = require('../webScrapper').toi;
const thehindu = require('../webScrapper').thehindu;


router.get('/toi', async(req, res) => {
    const news = await toi();
    res.send(news);
    // console.log(news)
})

router.get('/thehindu', async(req, res) => {
    const news = await thehindu();
    res.send(news);
})


router.get('/', async(req, res) => {
    let news = []
    const toiNews = await toi();
    const thehinduNews = await thehindu();
    news = [...toiNews, ...thehinduNews]
    res.send(news);
})

module.exports = router;