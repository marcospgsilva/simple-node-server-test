const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});

app.post('/webhooks', (req, res) => {
    console.log('Webhook received!')
    console.log(req)
    res.send('POST request to the homepage')
})

app.get('/', (req, res) => {
    res.send('Homepage')
})