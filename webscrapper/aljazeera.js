const axios = require("axios");
const cheerio = require("cheerio");


  
  const aljazeera = async () => {
    const url = "https://www.aljazeera.com/";
    let r = await axios.get(url);
    let data = r.data;
    let $ = cheerio.load(data);
    let news = [];

    function imgMutator(img) {
        // remove substring SQUARE_80 from img url and replace with LANDSCAPE_1200
        if(!img) return img;
        let imgArr = img.split("?");
        imgArr[imgArr.length - 1] = "resize=570%2C380&quality=80";
        img = imgArr.join("?");
        return img;
      }

    $(".fte-featured-articles-list__item").each((i, elem) => {
      const title = $(elem).find("a").text();
      let link = $(elem).find("a").attr("href");
      link = "https://www.aljazeera.com" + link;
      let img = $(elem).find('img').attr("src");
      img = "https://www.aljazeera.com" + img;
        img = imgMutator(img);
      
      if (img && link && title){
        news.push({
          title,
          url: link,
          img,
          source: "Al Jazeera",
          type: "General",
        });
      }
     
    });
  
    return news.slice(0, 10);
  };


  module.exports = aljazeera ;