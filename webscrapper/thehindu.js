const axios = require("axios");
const cheerio = require("cheerio");

function imgMutator(img) {
    // remove substring SQUARE_80 from img url and replace with LANDSCAPE_1200
    if(!img) return img;
    let imgArr = img.split("/");
    imgArr[imgArr.length - 2] = "LANDSCAPE_1200";
    img = imgArr.join("/");
    return img;
  }
  
  const thehindu = async () => {
    const url = "https://www.thehindu.com/";
    let r = await axios.get(url);
    let data = r.data;
    let $ = cheerio.load(data);
    let news = [];
    $(".element").each((i, elem) => {
      // console.log(elem)
      const title = $(elem).find("a").text();
      const link = $(elem).find("a").attr("href");
      let img = $(elem).find("a").find("img").attr("data-original");
      img = imgMutator(img);
      
      if (img && link && title){
        news.push({
          title,
          url: link,
          img,
          source: "The Hindu",
          type: "General",
        });
      }
     
    });
  
    return news.slice(0, 10);
  };


  module.exports = thehindu ;