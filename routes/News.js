const router = require('express').Router();

const toi = require('../webscrapper/toi')
const thehindu = require('../webscrapper/thehindu');
const cnn = require('../webscrapper/cnn'); 
const aljazeera = require('../webscrapper/aljazeera');



router.get('/toi', async(req, res) => {
    const news = await toi();
    res.send(news);
    // console.log(news)
})

router.get('/thehindu', async(req, res) => {
    const news = await thehindu();
    res.send(news);
})

router.get('/cnn', async(req, res) => {
    const news = await cnn();
    res.send(news);
})

router.get('/aljazeera', async(req, res) => {
    const news = await aljazeera();
    res.send(news);
})



router.get('/all', async(req, res) => {
    let news = []
    const toiNews = await toi();
    const thehinduNews = await thehindu();
    const cnnNews = await cnn();
    const aljazeeraNews = await aljazeera();
    news = [...toiNews, ...thehinduNews, ...cnnNews, ...aljazeeraNews]
    news.sort(()=> Math.random() - 0.5)
    res.send(news);
})

router.post('/search', async(req, res) => {
    let news = []
    const toiNews = await toi();
    const thehinduNews = await thehindu();
    const cnnNews = await cnn();
    const aljazeeraNews = await aljazeera();
    news = [...toiNews, ...thehinduNews, ...cnnNews, ...aljazeeraNews]
    let searchQuery = req.body.search.toLowerCase()
    news = news.filter((newsItem) => newsItem.title.toLowerCase().includes(searchQuery))
    res.send(news);

})

module.exports = router;