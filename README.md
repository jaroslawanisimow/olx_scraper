# olx_scraper

<- Browser JS snipper was using ->

![image](https://user-images.githubusercontent.com/76183614/178600057-6462da45-fbdf-4f1b-ac3b-578e1abef263.png)


<- Cheerio library parser in progress ->


// Cheerio library parser
// const cheerio = require('cheerio');
// async function main() {
//     fetch('https://www.olx.pl/d/motoryzacja/samochody/fiat/').then(res => setTimeout(async () => {
//         const str = await res.text();
//         const $ = cheerio.load(str);
//         console.log($('.listing-grid-container .css-19ucd76').map(el => {
//             console.info(el);
//             return {
//                 name: el.find('.css-v3vynn-Text').text(),
//                 price: Number($(el).find('.css-wpfvmn-Text').text().replace( /\D+/g, '')),
//                 location: $(el).find('.css-p6wsjo-Text').text().split('-')[0],
//                 link: $(el).find('.css-1bbgabe').href,
//             }
//         }));
//     }, 5000));
// }
// main();

