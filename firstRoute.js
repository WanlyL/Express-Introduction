const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("HOMEPAGE!")
})

app.get('/dogs', (req, res) => {
    res.send('MEOW MEOW MEOW')
})

app.get('/dogs', (req, res) => {
    console.log('YOU ASKED FOR /DOGS!')
    console.log(req)
    res.send('<h1>I AM DOG WOOF WOOF</h1>')
})

app.get('/chickens', (req, res) => {
    res.send("BOCK BOCK BOCK (get request")
})

app.post('/chicken', function createChicken(req, res){
    res.send('YOU CREATED A NEW CHICKEN (not really) (Post request)')
})


const greetings = {
    en: "hello",
    fr: "bonjour",
    ic: "hallo",
    js: "konnichiwa"
}
app.get("/greet/:language", (req, res) => {
    const lang = req.params.language;
    const greeting = greetings[lang];
    if (!greeting) return res.send("INVALID LANGUAGE");
    return res.send(greeting.toUpperCase());
})

'/search/'
app.get('/search', (req, res) => {
    const {term, sort} = req.query;
    console.log(req.query)
    return res.send("SEARCH PAGE! Term is ${term}, sort is ${sorts}")
})

app.get('/show-me-headers', (req, res) => {
    console.log(req.rawHeaders)
    console.log(req.headers)
    res.send(req.headers)
})

app.get('/show language', (req, res) => {
    const lang = req.headers['accept-language']
    res.send('Your language preference is: ${lang}')
})

app.listen(3000, () => {
    console.log("server running on port 3000")
})