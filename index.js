const quoteDiv = document.getElementById('quotes');
const authorDiv = document.getElementById('author');
const btn = document.getElementById('btn');
const api = 'https://type.fit/api/quotes';
let realData = ""
const getNewQuotes = () => {
    let randomNumber = Math.floor(Math.random() * (1643 - 1) + 1);
    // console.log(randomNumber);
    quoteDiv.innerText = realData[randomNumber].text;
    authorDiv.innerText = realData[randomNumber].author;
}

const getQuotes = async () => {
    try {
        let data = await fetch(api);
        realData =await data.json();
        // console.log(realData.length);
        getNewQuotes(realData); 
    
    } catch(error) {
    console.log(error);
    }
}

btn.addEventListener('click', getNewQuotes);
getQuotes();


// ripple effect 
btn.addEventListener('click', (e) => {
    console.log(e.offsetX);
    console.log(e.offsetY);
    let x = e.offsetX + 'px';
    let y = e.offsetY + 'px';
    let span = document.createElement('span');
    span.style.left = x;
    span.style.top = y;
    btn.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 1000)
})