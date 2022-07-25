const axios = require("axios");
const cheerio = require("cheerio");

const fetchData = async () => {
  const { data } = await axios.get(
    "https://intsecurebeta.cargillag.ca/en/pages/dashboard"
  );
  const $ = cheerio.load(data);
//   console.log('$', $);
  const scripts = $("script");

  const jsonScripts = [];
  Object.values(scripts).forEach((script) => {
    if (
      typeof script === "object" &&
      typeof script.attribs === "object" &&
      script.attribs.type === "application/json" 
    ) {
        const aemObj = {...script.children[0]}
        const parseObj = JSON.parse(aemObj.data)
        jsonScripts.push(parseObj.data)
    }
  });
    // const filtered = jsonScripts.map(script => {
    //     return script.data;
    // })
    // console.log('filtered', filtered);
    jsonScripts.forEach(script => {
        console.log('filtered values', script);
    })
};

fetchData();
