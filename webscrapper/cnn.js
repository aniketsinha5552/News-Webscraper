const axios = require("axios");
const cheerio = require("cheerio");


  
  const cnn = async () => {
    const url = "https://edition.cnn.com/";
    let r = await axios.get(url);
    let data = r.data;
    let $ = cheerio.load(data);
    let news = [];

    $(".stack__inner").each((i, elem) => {
      const title = $(elem).find("a").find("span").text();
      let link = $(elem).find("a").attr("href");
      link = "https://edition.cnn.com" + link;
      let img = $(elem).find("a").find("picture").find("source").attr("srcset");
      
      if (img && link && title){
        news.push({
          title,
          url: link,
          img,
          source: "CNN",
          type: "General",
        });
      }
     
    });
  
    return news.slice(0, 10);
  };


  module.exports = cnn ;