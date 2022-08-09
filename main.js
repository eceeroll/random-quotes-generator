var quotes = [];

function getQuotes() {
  return fetch("https://type.fit/api/quotes")
  .then(response => response.json())
  .then(data => {
    quotes=data;
    generateQuotefromAPI();
  })
}

// getting quotes from API 
function generateQuotefromAPI() {

    var count = quotes.length;
    var randomIndex = Math.floor(Math.random() * count);

    var quote = document.getElementById("quote");
    var author = document.getElementById("author");

    quote.innerText  = quotes[randomIndex].text;
    author.innerText = "-" + quotes[randomIndex].author;

}

getQuotes();

// getting quotes from an array that we have create:
// function generateQuotefromArray() {
//   // var quotes = {
//   //   "- Madeline Miller": "“Bury us, and mark our names above. Let us be free.”",
//   //   "- Jenny Valentine":
//   //     "“Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free.”",
//   //   "- Nenia Campbell":
//   //     "“You want to be free. You also want to be mine. You cant be both.”",
//   //   "- Albert Einstein":
//   //     '"Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
//   //   "- Charles Bukowski":
//   //     '"The free soul is rare, but you know it when you see it - basically because you feel good, very good, when you are near or with them."',
//   // }; 

//   var authors = Object.keys(quotes); // generate an array with all of the keys

//   var author = authors[Math.floor(Math.random() * authors.length)]; // generates a random index

//   var quote = quotes[author]; // returns the value of an item

//   let quoteDom = document.getElementById("quote");
//   let authorDom = document.getElementById("author");

//   quoteDom.innerHTML = quote;
//   authorDom.innerHTML = author;
// }


