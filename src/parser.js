const offers = Array.from(document.querySelectorAll('.listing-grid-container .css-19ucd76'));
const cars = offers.map(function(e){
    if (e.querySelector('.css-v3vynn-Text')) {
        return {
            name: e.querySelector('.css-v3vynn-Text').textContent,
            price: Number(e.querySelector('.css-wpfvmn-Text').textContent.replace( /\D+/g, '')),
            location: e.querySelector('.css-p6wsjo-Text').textContent.split('-')[0],
            link: e.querySelector('.css-1bbgabe').href,
        }
    }
}).filter(Boolean);

console.log(cars);